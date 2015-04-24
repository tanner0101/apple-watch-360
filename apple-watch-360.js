//by tanner nelson

var name_p = $('meta[property="og:image"]').content.split('/');
var name = name_p[7];
var main = document.getElementById("main");

main.style.opacity = 0;
var nav = document.getElementById("localnav");
nav.style.opacity = 0;

document.body.style.backgroundSize = "790px 790px";
document.body.style.backgroundPosition = "center 110px";

function urlforpos(pos) {
    var leading = '000';
    if (pos >= 100) {
        leading = '0';
    } else if (pos >= 10) {
        leading = '00';
    }
    
    var type = 'apple-watch-sport';
    if (name.indexOf('steel') >= 0) { 
        type = 'apple-watch'; 
    } else if (name.indexOf('gold') >= 0) { 
        type = 'apple-watch-edition'; 
        if (name.indexOf('18-karat') < 0) {
            name = "18-karat-" + name;
        }
    }

    return "http://images.apple.com/media/us/watch/2015/a718f271_b19c_47d8_928d_d108fc5d702a/product-viewer/"+type+"/" + name + "/360/large_2x/jpg/" + name + "_" + leading + pos + ".jpg";
}
function preloadImage(url) {
                var img = new Image();
                img.src = url;
}
var pos = 0;

function load() {
    
    for(var i = 0; i < 360; i++) {
        preloadImage(urlforpos(i));
    }
    spin();

}
function spin() {

    document.body.style.backgroundImage = "url("+urlforpos(pos)+")";
    setTimeout(function(){ spin() }, 80);
    pos += 1;
    if(pos>=360) { pos = 0 };  

}

load();

for (var i = 0; i < 40; i++) {
    var s = '';
    if (i % 2) { s = '.' };
    console.log(s);
}
console.log('-------------------------------------------------------');
console.log(' ');
console.log(' ');
console.log('                    enjoy');
console.log('                               -tanner');
console.log(' ');
console.log('-------------------------------------------------------');