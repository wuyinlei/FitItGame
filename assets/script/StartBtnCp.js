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

        ["游戏界面"]:{
            default: null,
            type: cc.Prefab
        }
    },

    onClick: function(){
        var canvas = this.node.parent;
        var action = cc.sequence(
            cc.scaleTo(0.2,0),
            cc.callFunc(function(){
                cc.log("开始游戏");
                cc.director.loadScene("gameScene");
                this.node.destroy();
            },this)
        )

        var anim = this.getComponent(cc.Animation);
        anim.stop();

        this.node.runAction(action);
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
