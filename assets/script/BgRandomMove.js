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

        ["x轴移动距离"]:1,
        ["y轴移动距离"]:1,
        ["移动速度(单位：像素/秒)"]:20,
        ["随机量"]:10
    },

    //随机移动
    randomMove: function(){
        var dt = cc.pLength(cc.p(this["x轴移动距离"],this["y轴移动距离"]))/ this["移动速度(单位：像素/秒)"];
        var randomDir = cc.pMult(cc.pNormalize(cc.randomMinus1To1(), cc.randomMinus1To1()),this["随机量"]);
        
        var moveDir = cc.pAdd(cc.p(this["x轴移动距离"],this["y轴移动距离"]),randomDir);

        var action = cc.repeatForever(
            cc.sequence(
                cc.moveBy(dt,moveDir),
                cc.moveBy(dt,cc.pMult(moveDir,-1))
            )
        )
        this.node.runAction(action);
    },

    // use this for initialization
    onLoad: function () {
        this.randomMove();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
