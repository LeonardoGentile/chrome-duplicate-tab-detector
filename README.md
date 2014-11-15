#chrome-duplicate-tab-detector

chrome-duplicate-tab-detector is an extension for Google Chrome which alters the behaviour of opening a new tab to help reduce duplicate tabs (tabs displaying the same URL).

When opening a new tab, and a duplicate tab exists in the same window, it closes the new tab and selects the duplicate tab. If there's no duplicate, the new tab is opened as usual.

Notes and limitations:
 * Only applies to new tabs--navigation within a single tab is not affected.
 * Tabs in other windows are ignored.
 * Does not handle redirects--the requested URL must match the duplicated page URL exactly to be considered a duplicate.
 * Does not detect new tabs which are opened via javascript (e.g. via bookmarklets)
 * Does not auto-update

## Installation:
OpenChrome's extension tab and drag the folder over there

###WHY: 
I find this particulary useful when developing web things and I have some script that automaticlly launch a local webserver and open the browser pointing to the server page. If you stop and restart the server many times you will end up with 10 tabs pointing to your localhost. This extension should avoid this.

All credits to [@mbhutton](https://github.com/mbhutton/chrome-duplicate-tab-detector)
