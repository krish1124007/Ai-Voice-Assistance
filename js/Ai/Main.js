
let animated_button = document.getElementById('animated_img')
let Answer = document.getElementById('Answer');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript; // This line fetch the line which is user speack

    console.log("You said: ", transcript); //console.log that line

    TakeCommand(transcript) // with that line in agrument of TakeCommand function
};





let btn = document.getElementById('Voice_Assitence_Button');
btn.addEventListener('click', () => {
    
    ChangeAnswer()
    StarterAnimation()
    animated_button.setAttribute('src', '../images/voice.gif');

    recognition.start();
});
const body = document.body;

body.addEventListener('keydown', (event) => {
    if (event.key == 's') {
        ChangeAnswer()
        StarterAnimation()
        animated_button.setAttribute('src', '/assets/pics/voice.gif');
        recognition.start();
    }
})




