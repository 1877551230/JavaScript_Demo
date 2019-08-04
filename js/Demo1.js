function bb(){
    alert("哈哈哈");
    console.log("呵呵呵呵");
}
function demo1(){
    console.log(window.parseInt("5.5"));
    console.log(parseInt("5.6"));//默认对象为window.
    console.log(parseFloat(5.5));
    console.log(typeof("test"+10));
    console.log(window.isNaN("5.55555"));
    console.log(window.isNaN("abc"));
    

}
function demo2(){
    var aa;
    alert(aa);

    aa=null;
    alert(aa);
}
function demo3(){
    var str="hello world!";
    var str1=new String("一#二#三#四#五");
    console.log("length-->"+str.length);
    console.log(str.toLowerCase());
    console.log(str.charAt(2));
    console.log(str.charCodeAt(2));
    console.log(str.indexOf("1",1));
    console.log(str.lastIndexOf("l"));
    console.log(str.substring(1,7));
    console.log(str.substr(2,7));
    console.log(str.replace("ll","haha"));
    var strs=str1.split("#");
    console.log(strs[2]);
    window.document.write('<span style="color:red;">在页面直接输出html标签</span>');
    window.document.write(str.italics().fontsize(50));
}
function demo4(){
    var num1=23.5678;
    var num2=new Number("23.5678");
    console.log(num1.toFixed(2));
    console.log(num2.toFixed(2));
}
function demo5(){
    var arr=new Array();
    alert(arr[0]);
    var arr1=new Array(2);
    arr1[0]=1;
    arr1[1]=2;
    arr1[2]=3;
    alert(arr1[0]+" "+arr1[1]+" "+arr1[2]);
    var arr2=[100,"200",true];
    alert(arr2[0]+" "+arr2[1]+" "+arr2[2]);
    var arr3=new Array(100,"200",true)
    alert(arr3[0]+" "+arr3[1]+" "+arr3[2]);
    alert(arr3.length);
    arr3.reverse();
    alert(arr3.toString());
    var arr4=[32,12,111,444];
    arr4.sort();
    alert(arr4.toString());

    arr4.sort(sortFunction);//回调一个函数sortFunction
    //匿名函数
    alert(arr4.toString());
    arr4.sort(function(a,b){return a-b;});
    //循环
    for(var i=0;i<arr4.length;i++){
        alert(arr4[i]);
    }
    for(var x in arr4){
        alert(x+" "+arr4[x]);
    }
}
function sortFunction(a,b){
    return a-b;
}
function demo6(){
    var now=new Date();
    var now1=new Date("2019/8/2 14:36");
    console.log(now.getTime());
    console.log(now.getDate());
    console.log(now.getDay());
    console.log(now.getFullYear());
    console.log(now.toString());
    console.log(now.toLocaleTimeString());
    console.log(now.toLocaleDateString());
    console.log(now.toTimeString());
}
function demo7(){
    var name="aaaaaa";
    var reg=new RegExp("^[a-zA-Z0-9]{3,6}$");
    var flag=reg.test(name);
    console.log(flag);
}
function aa(a,b,c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log("###############")
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]);
    console.log(arguments[5]);

}
function aa1(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]);
    console.log(arguments[5]);
}
function demo8(){
    aa(1,2,3,4);
    console.log("--------------");
    aa(1,2);
    console.log("--------------");
    aa();
    console.log("--------------");
    aa1(1,2,3,4,5,6,7,8);
}
function demo9(){
    var add=function(a,b){
        return a+b;
    };
    console.log(add(1,2));
    console.log(add(1,2,3));
    console.log(add(1));
    console.log(add);
}
function demo10(){
    var add=new Function("a","b","return(a+b)");
    console.log(add(1,2));
    console.log(add(1,2,3));
    console.log(add(1));
    console.log(add);
}
function demo11(){
    if(confirm("删除吗?")){
        alert("删除成功");
    }else{
        alert("删除失败");
    }
}
var id;
function start(){
    //每隔一秒执行一次func
    id=window.setInterval(function(){
        //获取日期时间
        var now=new Date();
        var time=now.toLocaleTimeString();
        //给在id="clock"的span中显示time的内容
        //从dom的文档树中获取id为clock的对象
        var span_ele=document.getElementById("clock");
        //把time的内容放在span中,作为文本节点
        span_ele.innerHTML='<span style="color:red;">'+time+'</span>';
    },1000);
}
function stop(){
    //清除周期性操作
    window.clearInterval(id);
}
function del(){
    var div_ele=window.document.getElementById("msg");
    div_ele.className="show";
    id=window.setTimeout(function(){
        div_ele.className="hide";
        window.clearTimeout(id);
    },2000);
}
function demo12(){
    //刷新当前地址栏所对应的网页
    window.location.reload();
    //给当前的地址栏赋值为新的url
    window.location.href="http://www.zhaopin.com";
}
function demo13(){
    console.log(window.navigator);
}