chrome.tabs.onCreated.addListener(function(newTab) {
    chrome.tabs.getAllInWindow(newTab.windowId, function(tabs) {
        var duplicateTab = null;
        tabs.forEach(function(otherTab) {
            if (otherTab.id !== newTab.id && otherTab.url === newTab.url) {
                duplicateTab = otherTab;
            }
        });
        if (duplicateTab) {
            chrome.tabs.remove(newTab.id);
            chrome.tabs.update(duplicateTab.id, {"selected": true});
            chrome.tabs.reload(duplicateTab.id);
        }
    });
});
