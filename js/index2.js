/*Documentación 
    - API weatherstack
    https://weatherstack.com/documentation
    - Uso de funcion asincrona y await con fetch 
    https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp
    -  Mapa: 
    https://leafletjs.com/examples/quick-start/
    */
function success(position) {
    const latitude=position.coords.latitude;
    const longitude= position.coords.longitude;
    console.log(latitude + "........"+ longitude);   
    setWeather(latitude, longitude);
   // setMapa(latitude,longitude);
}
function error (err) {
    console.log("no se ha podido alcanzar tu localizaion.Error: "+err.code+"mensaje: "+err.message);   
}
if (!navigator.geolocation){
    console.log("no soporta geolocalizacion tu navegador");
}else{
    console.log("localizando");
    navigator.geolocation.getCurrentPosition(success, error);
}
// function setMapa(latitude, longitude) {
   
// }
function setWeather(latitude, longitude) {
    const api_url= 'http://api.weatherstack.com/current?access_key='+openweatherKey+'&query='+latitude+","+longitude+'&units=m'; 
    async function getData(){
        const mymap = L.map('mapid').setView([latitude, longitude], 13);
        const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = L.tileLayer(tileUrl, { attribution });
         //marcadores 
         var marker = L.marker([latitude, longitude]).addTo(mymap);
         //39.870505 -4.020073 latitud y longitud de tekne 3d
         var marker2 = L.marker([39.870505, -4.020073]).addTo(mymap);
          marker2.bindPopup("<b>Tekne 3d</b><br> se encuentra aquí.").openPopup();
          marker.bindPopup("<b>¡Hola!</b><br>Usted se encuentra aquí.").openPopup();
         tiles.addTo(mymap);
        //data tenemos el resultado de la peticion api weatherstack  en formato json
        const response =await fetch (api_url);
        const data= await response.json();
        console.log(data);  
        document.getElementById("brand").innerHTML=data.location.name+"   "+data.current.temperature+"&#0176 C <br>";
       document.getElementById("parrafo").innerHTML="Viento : "+data.current.wind_speed+"km/h <br> <br>"+data.current.observation_time+"<br> <br> Humedad : "+data.current.humidity+" %  <br> <br>";
        document.getElementById("icon").src=data.current.weather_icons;
        console.log(data.location.name);
    }
    getData();
    //setMapa(latitude, longitude);
}

