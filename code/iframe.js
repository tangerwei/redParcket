var iframe = function(){
    var _iframe = {};
    _iframe.init = function(){

    }
    _iframe.moveSlideBar = function(){
        

    }
    function addSlidePath(w){
        var barPath = document.getElementById("slideBarPath");
        var s = "M0,0 50,0 a" + w + ",250 0 1,1 0,500 L0,500";
        barPath.d = s;
    }
    function setTnterl(func){//循环执行
        if(func()){
            setTimeout(function(){
                setTnterl(function(){
                    
                });
            },10);
        }
    }
    return _iframe;
}()