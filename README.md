# Simplified-tts-chrome_extention
#### A Chrome extension sample that adds a "Speak" option to the context menu and performs TTS on the selected text.

### Installation
-----------------
- Download the extension from the releases page.
- In Chrome, go to the extensions page (chrome://extensions).
- Enable developer mode by clicking the toggle switch in the top right corner.
- Click the "Load unpacked" button and select the downloaded extension folder.

### Usage
---------
Select some text on a webpage.
Right-click the selected text and choose the __Speak__ option from the context menu.
The selected text will be spoken aloud using TTS.
### Development
-----------------
##### (optional)To modify to specific language:
- On tts.js file, change line 17-19 to for example:<br>`chrome.tts.speak(selectedText, {
        'lang':'language_format_here_example(zh-CN, en-US)',
        'rate': 'speech_rate_recommend(0.8-0.9)'
      });`

#### To set up a development environment for this extension:
- Load the extension in Chrome as described in the __Installation__ section above.

### Credits
------------
- [Chrome Extension APIs](https://developer.chrome.com/docs/extensions/reference/)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

This extension is licensed under the MIT License. See LICENSE for more information.
