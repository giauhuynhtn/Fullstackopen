
const ShowCountries = ({countries, setCountries}) => {
    if (countries.length === 250) {return <p>Please input a few characters to search</p>}
    else if (countries.length > 10) {return <p>Too many matches, specify another filter</p>
    } else if (countries.length === 1) {
        console.log(countries);
        return countries.map((country) => {return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h2>languages:</h2>
                <div>
                    {Object.values(country.languages).map((v, i)=> {return <li key={i}>{v}</li>})}
                </div>
                <br/>
                <img src={country.flags.png}/>
            </div>)})
    } else if (countries.length < 10) {
        return countries.map((country, index) => {
            return (
                <li key={index}>
                    {country.name.common}
                    <button onClick={()=>{
                    setCountries([country])}}>
                    show {country.name.common}</button>
                </li>
                )
            })
                        
        } 
}

export default ShowCountries