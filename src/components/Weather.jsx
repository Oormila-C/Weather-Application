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
        })
    }
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-500 via-sky-400 to-cyan-300 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8">

                <h1 className="text-4xl font-extrabold text-white text-center mb-8">
                    🌤 Weather App
                </h1>

                <div className="flex gap-3">
                    <input onChange={handleCity} type="text" placeholder="Enter city name..." className="flex-1 px-4 py-3 rounded-xl bg-white/80 outline-none focus:ring-4 focus:ring-white text-gray-700 placeholder-gray-500"
                    />

                    <button onClick={getweather} className="px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition duration-300">
                        Search
                    </button>
                </div>


                <p className="text-xl text-gray-100 mt-2 font-bold">

                    weather : {weather}
                </p>
                <p className="text-xl text-gray-100 mt-2 font-bold">
                    Temperature : {temperature}
                </p>
                <p className="text-xl text-gray-100 mt-2 font-bold">
                    Description : {desc}

                </p>
            </div>
        </div>
    );
}
export default Weather;