import Weather from "./Weather";
const ShowCountries = ({countries, setCountries, api}) => {
    if (countries.length === 250) {return <p>Please input a few characters for searching ...</p>}
    else if (countries.length > 10) {return <p>Too many matches, specify another filter</p>
    } else if (countries.length === 1) {
        return countries.map((country) => {return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h2>languages:</h2>
                <div>
                    {Object.values(country.languages).map((v, i) => { return <li key={i}>{v}</li>; })}
                </div>
                <br />
                <img src={country.flags.png} alt="flag" width="150" height="auto"/>
                <Weather api={api} capital={country.capital}/>                
            </div>
            )})
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