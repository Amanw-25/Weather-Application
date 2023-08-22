const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '29995d8819msh0d9e7ac5c4a2d50p19fea9jsnc01c8787e654',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{

	cityname.innerText= city ;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)
		// cloud_pct.innerText = response.cloud_pct 
		temp.innerText = response.temp
		temp1.innerText = response.temp
		feels_like.innerText = response.feels_like
		humidity.innerText = response.humidity
		humidity1.innerText = response.humidity
		min_temp.innerText = response.min_temp
		max_temp.innerText = response.max_temp
		wind_speed.innerText = response.wind_speed 
		wind_speed1.innerText = response.wind_speed 
		wind_degrees.innerText = response.wind_degrees 
		sunrise.innerText = response.sunrise
		sunset.innerText = response.sunset



	})
	.catch(err => console.error(err));

}

let submit=document.querySelector("#submit");
submit.addEventListener("click",(e)=>{
	e.preventDefault();		// TO PREVENT RELOADING OF THE PAGE.
	getWeather(city.value);

})

getWeather("Mumbai");

let btn=document.querySelector("delhi");
console.log(btn);
btn.addEventListener("",getWeather("Indore"));

// let btn=document.getElementsByClassName("1mumbai");
// console.log(btn);

