function speck(text) {
    let text_speck = new SpeechSynthesisUtterance(text);
    text_speck.rate = 0.8;
    text_speck.pitch = 1;
    text_speck.volume = 1;
    window.speechSynthesis.speak(text_speck);
}