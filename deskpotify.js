var menuItem = chrome.contextMenus.create({
		"id": "anhspsrch",
		"title": "Deskpotify: '%s'",
		"contexts":["selection"]
	});
	
function searchOnClick(info, tab){
	searchArgs = info.selectionText
		.replace("\t", " ")
		.replace(/[^\p{L}\p{N} .]+/gu, "")
		.replace("  ", " ");
	var targetURL = "spotify:search:" + searchArgs;
	chrome.tabs.update(tab.id,{"url":targetURL});
}

chrome.contextMenus.onClicked.addListener(searchOnClick);
