// ex 2.13* Data for countries, step1

import { useState, useEffect } from 'react' 
import axios from 'axios'
import ShowCountries from './components/ShowCountries'

const App = () => {
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {setCountries(response.data)})
  }, [])

  const handleFilter = (event) => {
    event.preventDefault()
    const filterCountries = countries.filter(country => (
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
    setCountries(filterCountries)
  };  

  console.log(countries);

  return (
    <div>
      <div>
        find countries <input onChange={handleFilter}/>
      </div>
      <ShowCountries countries={countries} setCountries={setCountries}/>
    </div>
  )
}

export default App