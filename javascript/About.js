async function getWeather(){

    const weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m&timezone=auto";
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