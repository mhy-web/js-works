function setRouter(app){ 
 var router = app; 


app.get('/getData', function(req, res){
  var treeData = [
    {
      title: '课程',
      children: [
        {
          title: '后端',
          link: '#1'
        },
        {
          title: '前端',
          children: [
            {
              title: '必修班',
              link: '#2'
            },
            {
              title: '任务班',
              link: '#3'
            }
          ]
        }
      ]
    },
    {
      title: '文章',
      is_open: true,
      children: [
        {
          title: '技术',
          link: '#4'
        },
        {
          title: '灌水',
          link: '#5'
        }
      ]
    }
  ]

  res.send(treeData)
})}
 module.exports.setRouter = setRouter