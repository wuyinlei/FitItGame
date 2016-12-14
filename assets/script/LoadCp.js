cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        cc.log("开始加载资源");
        cc.view.enableRetina(false);
        cc.myAssets = {};

        var resList = [
            //"sounds"
            "pics",
            //"scenes"
            "prefabs",
            "fonts",
            "anims",
        ]

         //加载目录下所有资源
    var count = 0;
    for(var i = 0 ; i < resList.length ; i ++){
        cc.loader.loadResAll(resList[i],function(i,err,assets){
            cc.myAssets[resList[i]] = assets;
            cc.log("资源加载完成" + count);
            count ++;
            if(count >= resList.length){
                //为了前置加载音效  这里直接为这个场景添加所有声音的组件

                //开始游戏
                cc.director.loadScene('startScene');
            }
        }.bind(this,i));
    }

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

   


});
