const apiKey="#yourApi";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&&q=";

let searchBar=document.querySelector(".search input");
let searchBt=document.querySelector(".search button");
let weatherIc=document.querySelector(".weather-icon");

async function getWeather(city) {
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    if(response.status==404 || city==""){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".details").style.display="none";

    }
    else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main=="Clouds"){
        weatherIc.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIc.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIc.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIc.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIc.src="images/mist.png";
    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
        document.querySelector(".details").style.display="flex";
    }
}

searchBt.addEventListener("click",()=>{
    getWeather(searchBar.value);
});

getWeather("delhi");

