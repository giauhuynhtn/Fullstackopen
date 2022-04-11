const ShowCountries = ({filter, countries}) => {
    if (filter!=='') {
        if (countries.filter((country)=>{return country.name.common.toLowerCase().includes(filter)}).length > 10) {
            return <p>Too many matches, specify another filter</p>
        } else if (countries.filter((country)=>{return country.name.common.toLowerCase().includes(filter)}).length < 10) {
            return countries
                        .filter((country)=>{return country.name.common.toLowerCase().includes(filter)})
                        .map((country, index) => {return <li key={index}>{country.name.common}</li>})
                        
        }
    }
}

export default ShowCountries