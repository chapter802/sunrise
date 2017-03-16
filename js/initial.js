window.onload=function () {
    var obox = document.getElementById("box");
    var adrag = obox.getElementsByClassName("mac-folder");
    for (var i = 0; i < adrag.length; i++) {
        drag(adrag[i]);
    }
    function drag() {
        var odrag = adrag[i];
        var disX = 0;
        var disY = 0;

        odrag.onmousedown = function (ev) {
            var oEvent = ev || event;

            disX = oEvent.clientX - odrag.offsetLeft;
            disY = oEvent.clientY - odrag.offsetTop;

            document.onmousemove = function (ev) {
                var oEvent = ev || event;
                var l = oEvent.clientX - disX;
                var t = oEvent.clientY - disY;

                if (l < 0) {
                    l = 5;
                }
                else if (l > obox.clientWidth - odrag.clientWidth) {
                    l = obox.clientWidth - odrag.clientWidth - 5;
                }

                if (t < 0) {
                    t = 0;
                }
                else if (t > obox.clientHeight - odrag.clientHeight) {
                    t = obox.clientHeight - odrag.clientHeight;
                }

                odrag.style.left = l + 'px';
                odrag.style.top = t + 'px';
            };

            document.onmouseup = function () {
                document.onmousemove = null;
                document.onmouseup = null;
            };

            return false;
        };
    }

/* JSONP 获取百度搜索建议 */
      var oInp = document.getElementById('inp');
          var oUl= document.getElementById('ul1');

          oInp.onkeyup = function() {
            if (this.value != '') {
              var oScript = document.createElement('script');
              oScript.src = 'http://suggestion.baidu.com/su?wd='+this.value+'&cb=oSearch';
              document.body.appendChild(oScript);
            } else {
              oUl.style.display = 'none';
            }
          }
};
