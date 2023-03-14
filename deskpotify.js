function searchOnClick(info, tab){

	const { menuItemId } = info;

	if (menuItemId != "a_sptf_srch") {
		return;
	}

	searchArgs = info.selectionText
		.replace("\t", " ")
		.replace(/[^\p{L}\p{N} .]+/gu, "")
		.replace("  ", " ");
	var targetURL = "spotify:search:" + searchArgs;
	chrome.tabs.update(tab.id,{"url":targetURL});
}

// init

chrome.runtime.onInstalled.addListener(() => {
	var menuItem = chrome.contextMenus.create({
		"id": "a_sptf_srch",
		"title": "Deskpotify: '%s'",
		"contexts":["selection"]
	});

	
});

chrome.contextMenus.onClicked.addListener(searchOnClick);
