/**
 * car
 * @authors hunger (hunger@jirengu.com)
 * @date    2015-10-21 17:21:54
 * @version $Id$
 */

console.log('000')
debugger;
define(function(require) {

	var $ = require('jquery');
	console.log('123')
	debugger;

	var Event = require('event');   //这是CMD的写法
	debugger;
	console.log('456')
	function Carousel($ct){
		this.init($ct)
		this.bind()
	}
	Carousel.prototype = {
		init: function($ct){
			this.$ct = $ct
			this.$imgCt = $ct.find('.img-ct')
			this.$imgs = $ct.find('.img-ct >li')
			this.$preBtn = $ct.find('.pre')
			this.$nextBtn = $ct.find('.next')
			this.$bullets = $ct.find('.bullet li')

			this.pageIndex = 0
			this.isAnimate = false

			this.imgCount = this.$imgs.length
			this.imgWidth = $(window).width()
			this.$imgs.width(this.imgWidth)
			this.$imgCt.append(this.$imgs.first().clone())
			this.$imgCt.prepend(this.$imgs.last().clone())
			this.$imgCt.width((this.imgCount + 2) * this.imgWidth)
			this.$imgCt.css({left: - this.imgWidth})
		},

		bind: function(){
			var self = this

			this.$nextBtn.click(function(e){
				e.preventDefault()
				self.playNext(1)
			})
			
			this.$preBtn.click(function(e){
				e.preventDefault()
				self.playPre(1)
			})

			this.$bullets.click(function(){
				var index = $(this).index()
				if(index > self.pageIndex) {
					self.playNext(index - self.pageIndex)
				}else if(index < self.pageIndex){
					self.playPre(self.pageIndex - index)
				}
			})
		},
		
		playNext: function(len) {
			var self = this
			if(this.isAnimate) return

			this.isAnimate = true
			this.$imgCt.animate({
				left: '-=' + len * this.imgWidth
			}, function(){
				self.pageIndex += len
				if(self.pageIndex === self.imgCount) {
					self.pageIndex = 0
					self.$imgCt.css({left: -self.imgWidth})
				}
				self.setBullet()
				self.isAnimate = false

				Event.fire('carousel:play', self.pageIndex)
			})
		},

		playPre: function(len) {

			if(this.isAnimate) return

			this.isAnimate = true
			this.$imgCt.animate({
				left: '+=' + len * this.imgWidth
			}, (function(){
				this.pageIndex -= len
				if(this.pageIndex < 0){
					this.pageIndex = this.imgCount - 1
					this.$imgCt.css({left: - this.imgCount * this.imgWidth})
				}
				this.setBullet()
				this.isAnimate = false

				Event.fire('carousel:play', self.pageIndex)
			}).bind(this)   //这次我们没用 self，想想为什么
			)
		},

		setBullet: function(){
			this.$bullets.removeClass('active')
							.eq(this.pageIndex)
							.addClass('active')
		}
	}


	return Carousel
})