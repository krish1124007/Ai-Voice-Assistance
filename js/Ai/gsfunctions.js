
const WeatherOverAllData =
{
    feellike:'',
    ground_level:'',
    humadity:'',
    pressure:'',
    see_level:'',
    temp:'',
    temp_min:'',
    temp_max:'',
    wind_speed:'',
    gust:'',
    swell:'',
    Wave:''
}

function analyzeWeather(data) {
    const { 
        feellike, ground_level, humadity, pressure, see_level, 
        temp, temp_min, temp_max, wind_speed, gust, swell, Wave 
    } = data;

    let assessment = {
        beach: "Safe",
        city: "Safe",
        reasons: []
    };

    // Analyze temperature
    if (temp < 20 || temp > 35) {
        assessment.reasons.push("Temperature is not comfortable for outdoor activities.");
        assessment.beach = "Not Safe";
        assessment.city = "Not Safe";
    }

    // Analyze humidity
    if (humadity > 80) {
        assessment.reasons.push("High humidity levels may cause discomfort.");
    }

    // Analyze wind speed
    if (wind_speed > 20) {
        assessment.reasons.push("Wind speed is too high.");
        assessment.beach = "Not Safe";
    }

    // Analyze gusts
    if (gust > 40) {
        assessment.reasons.push("Strong gusts can cause safety issues.");
        assessment.beach = "Not Safe";
        assessment.city = "Not Safe";
    }

    // Analyze swell and wave height
    if (swell > 2 || Wave > 2) {
        assessment.reasons.push("High swell or wave height makes beach visits unsafe.");
        assessment.beach = "Not Safe";
    }

    // Analyze pressure
    if (pressure < 1010 || pressure > 1025) {
        assessment.reasons.push("Pressure levels indicate unstable weather conditions.");
    }

    // Final assessment
    if (assessment.reasons.length === 0) {
        assessment.reasons.push("All conditions are within safe limits.");
    }

    return assessment;
}
async function GetAllDataValue (message)
{
    let city_name = '';
    if(message.includes('is safe to visit'))
    {
    city_name = message.toLowerCase().replace('is safe to visit' , '')
    }
    else if(message.includes('give me weather report of'))
    {
      city_name = message.toLowerCase().replace('give me weather report of','');  
    }
    else if(message.includes('give me graphical weather report of'))
    {
        city_name = message.toLowerCase().replace('give me graphical weather report of','');
    }
    console.log(city_name)
    const location = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=e8fb36349a63fa7ef54625a9d8dedf70`)
  

    console.log(location.data);
    let lat = location.data[0].lat;
    let lon = location.data[0].lon;
    // let place = location.data[0].name;
    const WeatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=e8fb36349a63fa7ef54625a9d8dedf70`);
    const WaveData = await axios.get(`https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lon}&current=swell_wave_height,wave_height&timezone=auto`)
    
    

    const data = WeatherData.data;
    const unit = WaveData.data.current_units.wave_height
     WeatherOverAllData.feellike = data.main.feels_like;
     WeatherOverAllData.ground_level = data.main.grnd_level;
     WeatherOverAllData.humadity = data.main.humidity;
     WeatherOverAllData.pressure = data.main.pressure;
     WeatherOverAllData.see_level = data.main.sea_level;
     WeatherOverAllData.temp = data.main.temp;
     WeatherOverAllData.temp_min = data.main.temp_min;
     WeatherOverAllData.temp_max = data.main.temp_max;
     WeatherOverAllData.wind_speed = data.wind.speed;
     WeatherOverAllData.gust = data.wind.gust;
    WeatherOverAllData.swell =WaveData.data.current.swell_wave_height + unit;
    WeatherOverAllData.Wave = WaveData.data.current.wave_height + unit;
}

const GsFuntcion = {
            isSafe: async function(message)
            {
                
                GetAllDataValue(message)
                console.log(WeatherOverAllData)
                const Data = analyzeWeather(WeatherOverAllData)
                DisplayIsSafe(Data)
                speck(Data.reasons)

            },
            WeatherData: async function(message) {
                await GetAllDataValue(message)
                DisplayWeather(WeatherOverAllData)
                speck('Weather Data is');
            },
            WeatherDataGraphMode: async function(message)
            {
                await GetAllDataValue(message)
                displayWeatherGraph(WeatherOverAllData)
            }

}


