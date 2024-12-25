function DisplayIsSafe(data)
{
const AnsContiner = document.getElementById('Answer');
const Container = document.createElement('div')
const SafeorNot = document.createElement('div')
const Discription = document.createElement('div')
AnsContiner.innerHTML ='';
//Container styling
Container.style.display='flex'
Container.style.flexDirection ='row'
Container.style.height ='100%'
Container.style.justifyContent ='space-around'

//safeornot styling
SafeorNot.style.width ="30%"
SafeorNot.innerHTML = data.beach;
SafeorNot.style.border='1px solid transparent'
SafeorNot.style.borderRadius ='30px'
SafeorNot.style.fontSize='20px'
SafeorNot.style.background='red';

//Discription styling
Discription.style.width = "60%"
Discription.innerHTML = data.reasons;
Discription.style.border='1px solid transparent'
Discription.style.borderRadius ='30px'
Discription.style.fontSize='15px'
Discription.style.background='rgb(41, 149, 200)';
Discription.style.color = 'black'
Discription.style.padding ='10px '
Container.appendChild(SafeorNot)
Container.appendChild(Discription)
AnsContiner.appendChild(Container)
}