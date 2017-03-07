/**
 * 首页功能
 */

//define(id, ['jquery'], function($){ $('')  })
//
//
//CMD
// define(function(require, exports, module){
// 	var jQuery = require('jquery');
// 	var GoTop = require('com/gotop');
// 	console.log(GoTop)

// 	new GoTop();
// })

//AMD

// define(function(require){
// 	var $ = require('jquery')
// 	var Event = require('event')
// 	return 123

// })




define(['jquery','gotop', 'event', 'carousel', 'exposure'], function($, GoTop, Event, Carousel, Exposure) {

	

	new GoTop();
	new Carousel($('.carousel'))

	var colors = ['#dfdfdc', '#142829', '#2b2e41', '#172838']
	var msgs = ['兴趣很重要', '踏实很重要', '思考很重要', '动手很重要']
	
	Event.on('carousel:play', function(idx) {
		$('body').css('background-color', colors[idx])
		$('.intro p').text(msgs[idx])
	})



	Exposure.one($('.img-cells img'), function(){
		var $this = $(this);
		$this.attr('src', $this.attr('data-src'));
	})


});