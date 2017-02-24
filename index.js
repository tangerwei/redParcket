var index = {
    init:function(){
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src","code/iframe.html");
        iframe.scrolling = "no";
        iframe.setAttribute("width","100%");
        iframe.setAttribute("height","100%");
        iframe.className = "iframe";
        document.getElementById("app").appendChild(iframe);
    }
}