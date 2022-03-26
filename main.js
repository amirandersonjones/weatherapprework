//TRYING THIS USING THE FETCH METHOD
//fetch takes in one required parameter which is the url
//you can also pass in an init options object as the second argument
//promise will not reject/or return on a fetch which is one of the benefits even if the response is 404 or 500.
//the response will be an empty response
function getData() {
    let cityname = document.querySelector("#cityname").value;
    let zipcode = document.querySelector("#zipcode").value;
    console.log(cityname, zipcode)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname},${zipcode}&appid=86640f6ca230f0a1f80485532a1d8763`)
    .then(response => response.json())
    .then(weatherdata => {
        console.log(weatherdata)
        //City
        let name = weatherdata['name'];
        console.log(name)
        document.querySelector(`#card-text-0`).innerHTML=name
       //High
        let temp_max = Math.floor(weatherdata['main']['temp_max']-273)* 9/5 + 32 ;
        console.log(temp_max)
        // function temperatureConverter(temp_max) {
        //     fahrenheit = parseFloat((temp_max-32)/1.8)+273.15;
        //     document.querySelector(`#card-text-1`).innerHTML=temp_max
        // }
        document.querySelector(`#card-text-1`).innerHTML=temp_max
       //Low
       let temp_min = Math.floor(weatherdata['main']['temp_min']- 273.15)  * 9/5 + 32;
        console.log(temp_min)
       document.querySelector(`#card-text-2`).innerHTML=temp_min
       let forecast = weatherdata['weather'][0]['main'];
       console.log(forecast)
       document.querySelector(`#card-text-3`).innerHTML=forecast
       //Humidity 
       let humidity = weatherdata['main']['humidity'];
       console.log(humidity)
       document.querySelector(`#card-text-4`).innerHTML=humidity
       //Image Data
       let image = weatherdata['weather'][0].icon;
       console.log(image)
       document.querySelector(`#img`).innerHTML=`<src="http://openweathermap.org/img/wn/${image}.png">`
       
    //   
    // //    document.getElementById("img" +(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    //    document.querySelector(`#img`).innerHTML=`<src="http://openweathermap.org/img/wn/${image}.png">`
    })

}
// document.querySelector(`#img`).innerHTML=`<src="http://openweathermap.org/img/wn/">`+ weatherdata.weather[0].icon+".png";