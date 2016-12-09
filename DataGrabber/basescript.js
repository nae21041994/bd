var x = new XMLHttpRequest();
x.open("GET", "https://api.foursquare.com/v2/venues/explore?oauth_token=WLNKN2ZD0TMVD5AV2Y3CMT1LFPHRBYVRYKGDVRLHONFF3BEU&v=20151209&near=Moscow&radius=2500", true);
x.onload = function (){
	//JSON.parse(x.responseText);
	//alert(x.responseText);
	var text = x.responseText;
	//var text = JSON.stringify(x.responseText, "", 4);;
	//document.write(
	//    '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '" download="text.txt">text.txt</a>'
//)
var BlobBlob = new Blob([text], {type : 'application/json'});
	ww = URL.createObjectURL(BlobBlob);
	ll.href = ww;
}
x.send(null);




