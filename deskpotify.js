var menuItem = chrome.contextMenus.create({
		"id": "anhspsrch",
		"title": "Deskpotify: '%s'",
		"contexts":["selection"]
	});
	
function searchOnClick(info, tab){
	var targetURL = "spotify:search:" + info.selectionText;
	chrome.tabs.update(tab.id,{"url":targetURL});
}

chrome.contextMenus.onClicked.addListener(searchOnClick);

