document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeatherAsync(city);
    } else {
        alert('Please enter a city name');
    }
});

function getWeatherWithPromise(city) {
    const apiKey = '054ae333c5d38e0aaede72b6d69500a0';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    console.log('Fetching data from URL:', url);

    return fetch(url)
        .then(response => {
            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error(`Unable to fetch data: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

async function getWeatherAsync(city) {
    try {
        console.log('Fetching weather data for:', city);
        const data = await getWeatherWithPromise(city);
        console.log('Weather data received:', data);
        displayWeather(data);
    } catch (error) {
        console.error('Error in getWeatherAsync:', error);
        alert('Error fetching weather data. Please try again.');
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    if (data) {
        const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p><img src="${weatherIcon}" alt="Weather icon"></p>
            <p><strong>Temperature:</strong> ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            <p><strong>Feels Like:</strong> ${(data.main.feels_like - 273.15).toFixed(2)} °C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
            <p><strong>Wind Speed:</strong> ${(data.wind.speed * 3.6).toFixed(2)} km/h</p>
            <p><strong>Visibility:</strong> ${(data.visibility / 1000).toFixed(2)} km</p>
        `;
    } else {
        weatherResult.innerHTML = '<p>No weather data available.</p>';
    }
}
