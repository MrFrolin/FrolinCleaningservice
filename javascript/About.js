async function getWeather(){

    const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=58.4667&longitude=14.3&current=temperature_2m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto";
    const response = await fetch(weatherUrl);
    const results = await response.json();

    const weatherTitle = document.querySelector("#weatherTitle");
    const weatherText = document.querySelector("#weatherText");

    let currentTime = results.current.time;
    let newTime = currentTime.replace("T", " ");

    weatherTitle.innerText = newTime;
    weatherText.innerText = results.current.temperature_2m + " C";
}

getWeather();