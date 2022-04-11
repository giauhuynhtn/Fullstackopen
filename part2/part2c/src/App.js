// ex 2.12* Data for countries, step1

import { useState, useEffect } from 'react' 
import axios from 'axios'
import Filter from './components/Filter'
import ShowCountries from './components/ShowCountries'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        console.log(response.data);
      })
  }, [])

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter}/>
      <ShowCountries filter={filter} countries={countries}/>
    </div>
  )
}

export default App