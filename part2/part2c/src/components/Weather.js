import axios from 'axios'
import {useState, useEffect} from 'react' 

const Weather = ({capital,api}) => {
    const [weather, setWeather] = useState('')

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${api}`)
        .then(response => {
            setWeather(response.data)
        })
    },[])
    console.log(weather);
    return (
        <>
            <h2>Weather in {capital}</h2>
            <p>temperature {weather?.main?.temp} Celcius</p>
            <img src={`http://openweathermap.org/img/wn/${weather?.weather?.[0].icon}@2x.png`}
                alt="weather-icon"
                width="120"
                height="auto"
            />
            <p>wind {weather?.wind?.speed} m/s</p>
        </>
    )
}

export default Weather