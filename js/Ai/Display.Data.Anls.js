
//This is function use for Display The All Weather Cast report in Graphical form
function displayWeatherGraph(data) {
    
    const {
        feellike = 0,
        ground_level = 0,
        humidity = 0,
        pressure = 0,
        sea_level = 0,
        temp = 0,
        temp_min = 0,
        temp_max = 0,
        wind_speed = 0,
        gust = 0,
        swell = 0,
        wave = 0
    } = data;

    // Analyze the data (basic normalization for visualization)
    const labels = [
        'Feel Like', 'Ground Level', 'Humidity', 'Pressure', 
        'Sea Level', 'Temperature', 'Min Temp', 'Max Temp', 
        'Wind Speed', 'Gust', 'Swell', 'Wave'
    ];

    const values = [
        feellike, ground_level, humidity, pressure, 
        sea_level, temp, temp_min, temp_max, 
        wind_speed, gust, swell, wave
    ];

    // Create a canvas for the chart
    const answerDiv = document.getElementById('Answer');
    const canvas = document.createElement('canvas');
    canvas.id = 'weatherChart';
    answerDiv.innerHTML = ''; // Clear previous chart if any

    canvas.width = 800; // Width in pixels
    canvas.height = 500; // Height in pixels
    answerDiv.appendChild(canvas);

    // Generate the graph using Chart.js
    new Chart(canvas, {
        type: 'bar', // Bar chart
        data: {
            labels: labels,
            datasets: [{
                label: 'Weather Data Analysis',
                data: values,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(201, 203, 207, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(201, 203, 207, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Example usage
const sampleData = {
    feellike: 32,
    ground_level: 950,
    humidity: 65,
    pressure: 1013,
    sea_level: 1020,
    temp: 30,
    temp_min: 25,
    temp_max: 35,
    wind_speed: 10,
    gust: 15,
    swell: 2,
    wave: 3
};


