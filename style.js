(function(){
    var Router = function () {
        this.routes = {};//保存路由
        this.curUrl = '';//获取当前的hash值
    }
    Router.prototype.init = function () {
        //hashchange事件，当hash变化时，调用reloadPage方法
        //第一个this指向window，bind里面的this指向调用这个函数的对象，具体使用方法可以百度
        window.addEventListener('hashchange', this.reloadPage.bind(this));
    }

    Router.prototype.reloadPage = function () {
        this.curUrl = location.hash.substring(1) || '/';//获取当前hash的值（去掉#）
        this.routes[this.curUrl]();      //运行当前hsah值对应的函数
    }

    Router.prototype.map = function( key, callback ){ //保存路由对应的函数：
        this.routes[key] = callback;  //key表示hash的值（去掉#），callback表示当前hash对应的函数
    } 
    window.oRou = Router;
})()


var oRouter2 = new oRou();
oRouter2.init();
oRouter2.map('/index',function () {
    var oSidebar1 = document.getElementsByClassName("yg-1");
    oSidebar1[0].className = "yg-0";
    var oSidebar2 = document.getElementsByClassName("yg-0");
    oSidebar2[0].className = "yg-1";
})

oRouter2.map('/zncw',function () {
    var oSidebar1 = document.getElementsByClassName("yg-1");
    oSidebar1[0].className = "yg-0";
    var oSidebar2 = document.getElementsByClassName("yg-0");
    oSidebar2[1].className = "yg-1";
})

oRouter2.map('/video',function () {
    var oSidebar1 = document.getElementsByClassName("yg-1");
    oSidebar1[0].className = "yg-0";
    var oSidebar2 = document.getElementsByClassName("yg-0");
    oSidebar2[2].className = "yg-1";
})

oRouter2.map('/calculator1',function () {
    var oSidebar1 = document.getElementsByClassName("yg-1");
    oSidebar1[0].className = "yg-0";
    var oSidebar2 = document.getElementsByClassName("yg-0");
    oSidebar2[3].className = "yg-1";
})
oRouter2.map('/calculator2',function () {
    var oSidebar1 = document.getElementsByClassName("yg-1");
    oSidebar1[0].className = "yg-0";
    var oSidebar2 = document.getElementsByClassName("yg-0");
    oSidebar2[4].className = "yg-1";
})

oRouter2.map('/calculator3',function () {
    var oSidebar1 = document.getElementsByClassName("yg-1");
    oSidebar1[0].className = "yg-0";
    var oSidebar2 = document.getElementsByClassName("yg-0");
    oSidebar2[5].className = "yg-1";
})


  function jisuanOne(x){
    if(x==1){
    var benjinNum = document.getElementById("benjin1").value;
    var shouyilvNum = document.getElementById("shouyilv1").value;
    var touzinianxianNum = document.getElementById("touzinianxian1").value;
    var shouyiNum = 1+shouyilvNum/100;
    document.getElementById("zuizhongshouyi1").innerHTML=benjinNum*Math.pow(shouyiNum,touzinianxianNum);
    }else if(x==2){
      document.getElementById("benjin1").value = "";
      document.getElementById("shouyilv1").value = "";
      document.getElementById("touzinianxian1").value = "";
      //document.getElementById("zuizhongshouyi1").value = "";
    }
  }

  function jisuanTwo(x){
    if(x==1){
    var nianjinNum = document.getElementById("nianjin2").value;
    var shouyilvNum = document.getElementById("shouyilv2").value;
    var touzinianxianNum = document.getElementById("touzinianxian2").value;
    var shouyiNum = 1+shouyilvNum/100;
    document.getElementById("zuizhongshouyi2").innerHTML=nianjinNum*(Math.pow(shouyiNum,touzinianxianNum)-1)/(shouyiNum-1);
    }else if(x==2){
      document.getElementById("nianjin2").value = "";
      document.getElementById("shouyilv2").value = "";
      document.getElementById("touzinianxian2").value = "";
      //document.getElementById("zuizhongshouyi1").value = "";
    }
  }


  function jisuanThree(x){
    if(x==1){
    var zuizhongshouyiNum = document.getElementById("shouyi3").value;
    var shouyilvNum = document.getElementById("shouyilv3").value;
    var touzinianxianNum = document.getElementById("touzinianxian3").value;
    var shouyiNum = 1+shouyilvNum/100;
    document.getElementById("nianjin3").innerHTML=zuizhongshouyiNum*(shouyiNum-1)/(Math.pow(shouyiNum,touzinianxianNum)-1);
    }else if(x==2){
      document.getElementById("shouyi3").value = "";
      document.getElementById("shouyilv3").value = "";
      document.getElementById("touzinianxian3").value = "";
      //document.getElementById("zuizhongshouyi1").value = "";
    }
  }
