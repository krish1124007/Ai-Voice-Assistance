function TakeCommand(message) {
    //Animated button
    animated_button.setAttribute('src', '../images/stater.png');

   
    if(message.includes('is safe to visit')){GsFuntcion.isSafe(message);}
   
    else if(message.includes('give me weather report of')){GsFuntcion.WeatherData(message)}
    
    else if(message.includes('give me graphical weather report of')){GsFuntcion.WeatherDataGraphMode(message)}

}




