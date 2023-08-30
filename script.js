// const url = 'https://the-weather-api.p.rapidapi.com/api/weather/mumbai';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e712a098e4msh2a54d10ebeadb89p1d50a9jsned9daaa6f8aa',
// 		'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
// 	}

// };

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e712a098e4msh2a54d10ebeadb89p1d50a9jsned9daaa6f8aa',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


function getWeather(city) {
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
		.then(response => response.json())
		.then((response) => {
			let text = response.current.condition.text
			document.getElementById("city").innerHTML = response.location.name
			document.getElementById("update").innerHTML = response.current.last_updated
			document.getElementById("weather").innerHTML = response.current.condition.text
			document.getElementById("humidity").innerHTML = response.current.humidity
			document.getElementById("temp").innerHTML = response.current.temp_c
			document.getElementById("expected_temp").innerHTML=response.current.temp_f
			document.getElementById("uv_index").innerHTML = response.current.uv
			document.getElementById("wind").innerHTML = response.current.wind_kph
			document.getElementById("visibility").innerHTML=response.current.cloud
			document.getElementById("country").innerHTML=response.location.country
			document.getElementById("region").innerHTML=response.location.region

			
			document.getElementById("wait").innerHTML=""
			
			switch (text) {
				case "Sunny" : document.getElementById("img1").src ="sun.png"
				break;
				case "Clear"||"Fair"||"Sunny" : document.getElementById("img1").src ="sun.png"
					break;
				case "Mist"|| "Partially_Cloudy": document.getElementById("img1").src ="weather.png"
					break;
				case "Thunder_Storm": document.getElementById("img1").src ="storm.png"
					break;
				case "Rainy": document.getElementById("img1").src ="rainy.png"
					break;
			}
		})
		.catch(err => console.error(err));
}
function submit1() {
	getWeather(cityi.value)
	document.getElementById("wait").innerHTML = "Please wait result will be display soon...";
	
}

getWeather("mumbai")







document.getElementById("cityi")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});