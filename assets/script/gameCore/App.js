var app = {
    startGame : function(){

    },
}

    //加载模块
    var modPath = [
        'Util',
    ]

    for(var i in modPath){
        var path = modPath[i];
        require(path);
    }

    module.exports = app;

