(function (w, d) {
    'use strict';
    function Facebook() {
        w.addEventListener("mouseup", function (evt) {
            if (evt.target.classList.contains("UFICommentStickerIcon") || evt.target.classList.contains("_6gb")) {
                w.Facebook.addCustomEmoticonsTab();
            }
        });
    }
    Facebook.prototype = {
        addCustomEmoticonsTab(){
            console.info("[Facebook]: add emoticons tab");
            var self = w.Facebook;
            var timeout = setTimeout(function () {
                var curEmoticonsTab = d.querySelector('._5r81:not(.customEmoticonTab)');
                if (curEmoticonsTab) {
                    curEmoticonsTab.classList.add("customEmoticonTab");
                    var anchor = d.createElement('a');
                    anchor.className = "_5r8a";
                    anchor.innerHTML = '<img class=" _5r8c img" src="' + chrome.extension.getURL("/assets/img/facebook.png") + '" alt="">';
                    anchor.onclick = self.addCustomEmoticons;
                    curEmoticonsTab.insertBefore(anchor, curEmoticonsTab.childNodes[0]);
                    self.findElement(curEmoticonsTab).lastChild.querySelector('._5r8k').innerHTML = 'custom emoticons aqui';
                    clearTimeout(timeout);
                } else {
                    self.addCustomEmoticonsTab()
                }
            }, 500);
        },
        addCustomEmoticons(){
            w.Facebook.findElement(this).lastChild.querySelector('._5r8k').innerHTML = 'custon emoticons aqui';
        },
        findElement(el){
            while (el.parentNode) {
                el = el.parentNode;
                if (el.classList.contains('_5r8f'))return el;
            }
            return null;
        }
    };
    w.Facebook = new Facebook();
})(window, document);