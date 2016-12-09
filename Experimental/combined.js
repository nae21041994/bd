var texty;
var ayy = 500;

var x = new XMLHttpRequest();
x.open("GET", 'https://api.hh.ru/vacancies?page=0'+'&per_page='+ayy, true);
x.onload = function (){
	//JSON.parse(x.responseText);
	//alert(x.responseText);
	var text = x.responseText;
	texty = text;
	//var text = JSON.stringify(x.responseText, "", 4);;
	//document.write(
	//    '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="text.txt">text.txt</a>'
//)
var BlobBlob = new Blob([text], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	ll.href = ww;
}
x.send(null);

x1 = new XMLHttpRequest();
x1.open("GET", "https://api.hh.ru/vacancies?page=1&per_page=500", true);
x1.onload = function (){
var text1 = x1.responseText;
texty = texty+text1;
BlobBlob = new Blob([text1], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	l2.href = ww;
}
x1.send(null);

x2 = new XMLHttpRequest();
x2.open("GET", "https://api.hh.ru/vacancies?page=2&per_page=500", true);
x2.onload = function (){
var text2 = x2.responseText;
texty = texty+text2;
BlobBlob = new Blob([text2], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	l3.href = ww;
}
x2.send(null);

x3 = new XMLHttpRequest();
x3.open("GET", "https://api.hh.ru/vacancies?page=3&per_page=500", true);
x3.onload = function (){
var text3 = x3.responseText;
texty = texty+text3;
BlobBlob = new Blob([text3], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	l4.href = ww;
}
x3.send(null);

x4 = new XMLHttpRequest();
x4.open("GET", "https://api.hh.ru/vacancies?page=3&per_page=500", true);
x4.onload = function (){
	setTimeout(function(){
BlobBlob = new Blob([texty], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	l5.href = ww;
	}, 8000);
}
x4.send(null);

setTimeout(function(){
    //alert(texty);
}, 20000);




