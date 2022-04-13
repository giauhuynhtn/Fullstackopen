
import React from 'react'
import personService from '../services/persons'

const Persons = ({newFilter, persons, setPersons, setConfirmMessage, setStyle}) => {
  

  const handleClick = (id) => {
    const thisPerson = persons.find(p => p.id === id )
    if (window.confirm(`Delete ${thisPerson.name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          setConfirmMessage(`Deleted ${thisPerson.name}`)
          setStyle("red")
          setTimeout(() => {
            setConfirmMessage(null)
          }, 5000)

          return setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error =>  console.log(error))
      } else {console.log('You cancelled to delete.')}
  }


  if (newFilter==='') {
    return persons.map(person => {
      return (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={()=> handleClick(person.id)}>delete</button>
        </li>
      )})
  }
  else {
    return persons
      .filter(person=>person.name.toLowerCase().includes(newFilter.toLowerCase()))
      .map((person, index) => {
        return (
            <li key={person.id}>
              {person.name} {person.number}
              <button onClick={()=> handleClick(index)}>delete</button>
            </li>
        )
      })
  }
}
export default Persons