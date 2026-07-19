import { useState } from "react";
import axios from "axios";
function Weather() {
    const [city, setcity] = useState("")
    const [weather, setweather] = useState("")
    const [temperature, settemperature] = useState("")
    const [desc, setdesc] = useState("")


    function handleCity(evt) {
        setcity(evt.target.value)
    }
    function getweather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=63460e55368ebf8fc142252e3358df5e&units=metric`);
        weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemperature(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        }).catch(function(failure){
            console.log(failure)
            alert("Please Enter a Valid City Name")
        })

        }
    
    return (
  <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4 py-6">
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">

      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        🌤 Weather App
      </h1>

      <div className="flex flex-col sm:flex-row gap-3">
        <input type="text" placeholder="Enter City Name" onChange={handleCity} className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
        />

        <button onClick={getweather} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Search
        </button>
      </div>

      <div className="mt-8 space-y-4">

        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-lg font-semibold text-blue-900">
            🌥 Weather
          </p>
          <p className="text-gray-700">{weather}</p>
        </div>

        <div className="bg-green-100 rounded-lg p-4">
          <p className="text-lg font-semibold text-green-900">
            🌡 Temperature
          </p>
          <p className="text-gray-700">{temperature}°C</p>
        </div>

        <div className="bg-yellow-100 rounded-lg p-4">
          <p className="text-lg font-semibold text-yellow-900">
            📝 Description
          </p>
          <p className="text-gray-700 capitalize">{desc}</p>
        </div>

      </div>
    </div>
  </div>
)
}
export default Weather;