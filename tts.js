chrome.contextMenus.create({
    id: 'speak',
    title: 'Speak',
    // icon: 'icon.png',
    contexts: ['selection'],  // Show the option only when text is selected
  });
  
  // Handle clicks on the "Speak" option
  chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId != ""){
        console.log(info.menuItemId)}
    if (info.menuItemId == "speak") {  // Check that the clicked item is the "Speak" option
      // Get the selected text
      var selectedText = info.selectionText;
      console.log(info.selectedText)
      // Use the chrome.tts.speak function to perform TTS on the selected text
      chrome.tts.speak(selectedText, {
        gender: 'female'  // Set the voice to a female voice (optional)
      });
    }
});
