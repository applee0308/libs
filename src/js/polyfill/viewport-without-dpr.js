/**
 * [Based of 20px(iphone6 && iphone6s)]
 * @param  {[type]} doc [document]
 * @param  {[type]} win [window]
 */
!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            var baseSize = 20 * (width / 375); 
            baseSize > 32 ? baseSize = 32 : baseSize = baseSize;
            width && (docEle.style.fontSize = baseSize + "px");
        };

    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));
