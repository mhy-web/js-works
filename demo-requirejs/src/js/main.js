  require.config({
    baseUrl: "src/js/app",  
    paths: {
      'jquery': '../lib/bower_components/jquery/dist/jquery.min'
    }

  })

  // 加载入口模块
  require(['index']);