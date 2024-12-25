function StarterAnimation ()
{
    const AnsweContainer = document.getElementById('Answer')
    AnsweContainer.innerHTML ='';
    const Name = ['L' ,'I' , 'S' , 'I' ,'N' ,'I','N' ,'G'];

for(let i=0; i<Name.length-1; i++)
{
    let spann = document.createElement('span')
    spann.className ='AnwserSpan';
    spann.innerHTML= Name[i]+ ' ';
    spann.style.fontSize ='40px'
    spann.style.color ='black';
    spann.style.fontFamily =`'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif' `
    AnsweContainer.style.letterSpacing='1px'
    AnsweContainer.appendChild(spann)
}
const Answers = document.querySelectorAll('.AnwserSpan');

// Function to wait for a given time
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async function animateAnswers() {
  for (let i = 0; i < 3; i++) { // Run 6 iterations
    for (const element of Answers) { // Loop through each answer element
      element.style.fontSize = '60px';
      element.style.color='red';
      await sleep(300); // Wait for 1 second
      element.style.fontSize = '40px';
      element.style.color = 'white'
      
    }
  }
})();
}