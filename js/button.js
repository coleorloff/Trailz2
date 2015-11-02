

$(document).ready(function() {

	$('button').click(function(){
		var dt = new Date($.now());
		var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

		var keywordlist = [];
		var newURL = $("input[name=url").val();

		$.get('http://gateway-a.watsonplatform.net/calls/url/URLGetRankedKeywords?apikey=909d2935c04ba8e5001c01e3c1c183d64e0de728&url='+ newURL +'&outputMode=json', function(data){
			for(var i = 0; i < data.keywords.length; i++){
				keywordlist.push(data.keywords[i].text);
			}
			$('.container').append("<div class='panel panel-default'>" + "<div class='panel-heading'>" + "<h3 class='panel-title'>" + newURL + "</h3>" + "</div>" + "<div class='label label-info'>" + time + "</div>" + "<div class='panel-body'>" + keywordlist + "</div>" + "</div>" + "</div>");
			//$('.card').draggable();
		});
	});
});


// Format for basic Alchemy API Web call: 
// http://gateway-a.watsonplatform.net/calls/url/URLGetRankedKeywords?apikey=909d2935c04ba8e5001c01e3c1c183d64e0de728&url=http://coleorloff.com

// parameters:
// url (required)
// apikey (required)
// maxRetrieve
// keywordExtractMode
// sentiment
// outputMode (xml (default), json, rdf, rel-tag, rel-tag-raw)
// jsonp
// showSourceText

// additional params at: http://www.alchemyapi.com/api/keyword/urls.html


	