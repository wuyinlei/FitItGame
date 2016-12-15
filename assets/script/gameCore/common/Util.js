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

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});


var _p = {
    //遍历对象的属性和方法
    printObj : function(obj){
        //用来保存所有的属性名称和值
        var props = "";
        //开始遍历
        for(var p in obj){
            //方法
            if(typeof (obj[p]) == " function "){
                props += p + " \n ";
            } else{
                // p 为属性名称，obj[p] 为对应的属性的值
                props += p + " \n ";
            }
        }

        cc.log(props);
    },

    //随机
    random: function(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    testCodeStr : "",

    testCode1: function(str){
        this.start = new Date().getTime(); // 起始时间
        this.testCodeStr = str;
    },

    testCode2: function(str){
        this.end = new Date().getTime(); // 结束时间
        var timeStr = (this.end - this.start) + "ms";
        cc.log("此处花时间：" + timeStr + this.testCodeStr);
    }
}


module.exports = _p;