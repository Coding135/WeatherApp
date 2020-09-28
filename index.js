const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');

const spitOutCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return kelvin;
}

updateWeatherApp = (city) => {
    console.log(city);
     cityName.textContent = city.name;
     cardBody.innerHTML = `
     <div class="card-mid row">
     <div class="col-8 text-center temp">
         <span>${spitOutCelcius(city.main.temp)}&deg;F</span>
     </div>
     <div class="col-4 condition-temp">
         <p class="condition">${city.weather[0].description}</p>
         <p class="high">${spitOutCelcius(city.main.temp_max)}&deg;F</p>
         <p class="low">${spitOutCelcius(city.main.temp_min)}&deg;F</p>
     </div>
 </div>

 <div class="icon-container card shadow mx-auto">
     <img src="img/cloud.svg" alt="">
 </div>

<div class="card-button px-5 py-4 row">
<div class="col text-center">
<p>${spitOutCelcius(city.main.feels_like)}&deg;F</p>
<span>Feels Like</span>
</div>
<div class="col text-center">
<p>${spitOutCelcius(city.main.humidity)}%</p>
<span>Humidity</span>
</div>
</div>
     `
     

}



//Add An Event Listner To The Form
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
    searchForm.reset();

    requestCity(citySearched)
     .then((data) => {
        updateWeatherApp(data);
    })
     .catch((error) => { console.log(error) })



})