const apiKey = "5dee6703fd0a25d8a41750e81cfb98c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'block';
    } else {
        const data = await response.json();

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == 'Clouds') {
            document.querySelector('.weather-icon').src = 'images/clouds.png';
        } else if (data.weather[0].main == 'Clear') {
            document.querySelector('.weather-icon').src = 'images/clear.png';
        } else if (data.weather[0].main == 'Rain') {
            document.querySelector('.weather-icon').src = 'images/rain.png';
        } else if (data.weather[0].main == 'Drizzle') {
            document.querySelector('.weather-icon').src = 'images/drizzle.png';
        } else if (data.weather[0].main == 'Mist') {
            document.querySelector('.weather-icon').src = 'images/mist.png';
        }

    }
}
searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value);
})