
const apiKey = "290fe370eb7a01422ef6eff842be8049";

// search button
document.getElementById('searchButton').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  getWeatherData(city);
});


// Fetch weather data from OpenWeatherMap API
async function getWeatherData(city) {
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    alert(error.message);
  }
}

// Display weather data in the DOM
function displayWeatherData(data) {
  
  document.getElementById('cityName').textContent = `Weather in ${data.name}`;
  document.getElementById('temperature').textContent = `Temperature: ${Math.floor(data.main.temp)}°C`;
   document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
  document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
  
}





