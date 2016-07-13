gmwebcolors = [    [        [    "html",            "htm"        ],        "#0000ff" , "wchtml"  ],    [        [            "php"        ],        "#800080"  ,"wcphp"  ],    [        [            "js"        ],        "#ff0000"  ,"wcjs"   ],    [        [            "xml"        ],        "#00ff00"  ,"wcxml"   ],    [        [            "css"        ],        "#ff8000"   ,"wccss" ],    [        [            "jpg",            "jpeg",            "png",            "gif",            "bmp",            "tga",            "tiff"        ],        "#ff8080"   ,"wcimg"  ]];
function in_array(haystack,needle, strict) {  
    var found = false, key, strict = !!strict;
    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }
    return found;
}


 String.prototype.FE = function(){
	var a = this.split('.');
	var ext = a[a.length-1];  
	return ext;
}
 String.prototype.FeQ = function(extq){
	var ext = this.FE;
	return ext==extq;
}
 String.prototype.WebColor = function(){
	for(var p in gmwebcolors){
		if(gmwebcolors[p][0]){
			if(in_array(gmwebcolors[p][0],this.FE())){
				return gmwebcolors[p][1];
			}
		}
	}
}
String.prototype.WebColorClass = function(){
	for(var p in gmwebcolors){
		if(gmwebcolors[p][0]){
			if(in_array(gmwebcolors[p][0],this.FE())){
				return gmwebcolors[p][2];
			}
		}
	}
}
function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
}

function transpose(arr) {
	return _.zip.apply(_,arr);
}

function GMGetText(sel){
	var arr = [];
	$(sel).each(function(n){arr.push($(this).text());});
	return arr;
}
function GMGetHref(sel){
	var arr = [];
	$(sel).each(function(n){arr.push($(this).attr('href'));});
	return arr;
}

 String.prototype.gmLocationHostnameQ = function(){
	return window.location.hostname==this;
}
 String.prototype.gmLocationHostQ = function(){
	return window.location.host==this;
}
 String.prototype.gmLocationHrefQ = function(){
	return window.location.href==this;
}
String.prototype.gmLocationOriginQ = function(){
	return window.location.origin==this;
}
String.prototype.gmLocationPathnameQ = function(){
	return window.location.pathname==this;
}

var gmGetLocation = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

function gmTimeout(func,time,enfunc){
	time.forEach(function(item, i, arr) {
		setTimeout(func,item);
		if(i==time.length-1){
			setTimeout(enfunc,item);
		}
	});
}
function cl(str){console.log(str);}



function sql(base,q){
	base.transaction(
	function (tx) {
	  var r = tx.executeSql(q,[],function(tx,res){return res;});
	});
	return r;
}

function local_item(vr,vl){
	if(vl){
		return localStorage.setItem(vr,vl);
	}else{
		return localStorage.getItem(vr);
	}
}

cires = 0;
function chrome_item(vr,vl,flag){
	if (flag === undefined) {
		flag = true;
	 }
	if(vl){
		return chrome.storage.local.set({vr:vl});
	}else{
		chrome.storage.local.get(vr,function(e){cires = e[vr];if(flag){cl(e);}});
	}
}