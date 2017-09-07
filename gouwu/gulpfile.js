var gulp = require('gulp');
var server = require('gulp-webserver');
var urlTool = require('url')
var qs = require('qs');
var json = [
        {
            "img":"img/1.jpg",
            "tit1":"一说 智能机器人在这个地方大家洼等级外交哇",
            "tit2":"¥898",
            "tit3":"¥1280"
        },
        {
            "img":"img/1.jpg",
            "tit1":"一说 智能机器人在这个地方大家洼等级外交哇",
            "tit2":"¥898",
            "tit3":"¥1280"
        },
        {
            "img":"img/1.jpg",
            "tit1":"一说 智能机器人在这个地方大家洼等级外交哇",
            "tit2":"¥898",
            "tit3":"¥1280"
        }
]
gulp.task('mocker',function(){
    gulp.src('gulp')
        .pipe(server({
            port:8081,
            middleware:function(req,res,next){
                res.setHeader('Access-Control-Allow-Origin','*')
                // var urlObj =  urlTool.parse(req.url);
                // var method = req.method;
                // var pathname = urlObj.pathname;
                // if(method==="POST"){
                //     var postData = '';
                //     req.on('data',function(chunk){
                //         postData +=chunk;
                //     })
                //     req.on('end',function(){
                //         var postParmas = qs.parse(postData)
                //         switch(pathname){
                //             case '/goodslist':

                //             break;
                //             default
                //         }
                //         res.end()
                //     })
                // }
                res.setHeader('content-type','application/json;charset=utf-8')
                            res.write(JSON.stringify(json))
                            res.end()
            }
        }))
})

gulp.task('default',['mocker'])