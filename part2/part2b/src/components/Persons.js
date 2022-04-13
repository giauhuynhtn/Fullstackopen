import React from 'react'
import personService from '../services/persons'


const Persons = ({newFilter, persons, setPersons}) => {

  const handleClick = (id) => {
    const thisPerson = persons.find(p => p.id === id )
    if (window.confirm(`Delete ${thisPerson.name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          return setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => console.log('fail'))
      } else {console.log('You cancelled to delete.')}
  }

  if (newFilter==='') {
    return persons.map(person => {
      return (
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={()=> handleClick(person.id)}>delete</button>
        </p>
      )})
  }
  else {
    return persons
      .filter(person=>person.name.toLowerCase().includes(newFilter.toLowerCase()))
      .map(person => {
        return (
            <p key={person.id}>
              {person.name} {person.number}
              <button onClick={()=> handleClick(person.id)}>delete</button>
            </p>
        )
      })
  }
}
export default Persons