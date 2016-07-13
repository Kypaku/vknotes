// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*$( ".upl" ).click(function() {
$.get("http://ferz2/uploadext.php");
  alert( "Handler for .click() called." );
});*/
/*$( ".upl" ).click(function() {
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
});
});*/
$(function(){
$('#send').click(function(){
	 chrome.extension.sendMessage({"im":$("#im").val(),"note":$("#note").val(),"color":$("#color").val()},
		 function(response){
		  console.log(response);
		}
	);
});
});