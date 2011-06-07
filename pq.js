/*
    Welcome to a ProtoQuote
    by Christopher de Beer v1.1
*/

// Load
window.bookmarklet = (function(opts){fullFunc(opts)})({
    css : [pqBase + "protoquote.css"],
    js  : [pqBase + "protoquote.js", pqBase + "rangy-core.js" ],
    ready : function() {
        
        // Start the show.
        
        var range = rangy.createRange()

        // All DOM Range methods and properties supported
        range.selectNodeContents(document.body)
        
        // Selection object based on those in Mozilla, WebKit and Opera
        var sel = rangy.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
        
        alert(sel)
        
    }
});

// jQuery bookmarklet magic...
// ... by Brett Barros (& Paul Irish)
// ... http://www.latentmotion.com/downloads/blank-bookmarklet-v1.js
function fullFunc(a){function d(b){if(b.length===0){a.ready();return false}
$.getScript(b[0],function(){d(b.slice(1))})}function e(b){$.each(b,function(c,f){$("<link>")
.attr({href:f,rel:"stylesheet"}).appendTo("head")})}a.jqpath=a.
jqpath||"http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js";
(function(b){var c=document.createElement("script");c.type="text/javascript";c.src=b;
c.onload=function(){e(a.css);d(a.js)};document.body.appendChild(c)})(a.jqpath)};