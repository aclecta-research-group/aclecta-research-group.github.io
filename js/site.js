function gMTL(fn,ln,dn){
	return("mail" + "to:" + fn +"." + ln + "@" + dn + ".com");
}

function renderHeader(){
	var h =
	"<header class=\"sticky\"><h1>" +
	"<ul class=\"nav\">" +
	"<li><a class=\"navlink\" href=\"/\">Home</a></li>" +
	"<li><a class=\"navlink\" href=\"/about/\">About</a></li>" +
	"<li><a class=\"navlink\" href=\"/results/\">Results</a></li>" +
	"<li><a class=\"navlink\" href=\"/services/\">Services</a></li>" +
	"<li><a class=\"navlink\" href=\"/learning/\">Learning</a></li>" +
	"</ul></h1></header>";
	document.write(h);
}



function gMTL(fn,ln,dn){
	return("mail" + "to:" + fn +"." + ln + "@" + dn + ".com");
}

function renderFooter(){
	var f = "<div class=\"component\">"+
	"<button class=\"cn-button\" id=\"cn-button\">▲</button>"+
	"<div class=\"cn-wrapper\" id=\"cn-wrapper\">"+
	"<ul>"+
	"<li><a href=\"https://www.linkedin.com/in/parrottsquawk\" target=\"_blank\"><span class=\"socicon-linkedin\" style=\"color:#3371b7;\"></span></a></li>"+
	"<li><a href=\"https://twitter.com/parrottsquawk\" target=\"_blank\"><span class=\"socicon-twitter\" style=\"color:#4da7de;\"></span></a></li>"+
	"<li><a href=\"javascript:window.location=this.gMTL('chet','parrott','aclecta')\" target=\"_blank\"><span class=\"socicon-mail\" style=\"color:#0079B7;\"></span></a></li>"+
	"<li><a href=\"https://github.com/parrottsquawk\"><span class=\"socicon-github\" style=\"color:#221e1b;\" target=\"_blank\"></span></a></li>"+
	"<li><a href=\"http://stackoverflow.com/users/2783893/parrottsquawk\"><span class=\"socicon-stackoverflow\" style=\"color:#FD9827;\" target=\"_blank\"></span></a></li>"+
	"</ul>"+
	"</div>"+
	"<div id=\"cn-overlay\" class=\"cn-overlay\"></div>"+
	"</div>";
	document.write(f);

}