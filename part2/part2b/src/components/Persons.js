import React from 'react'

const Persons = ({newFilter, setNewFilter, persons}) => {
    if (newFilter==='') {
      return persons.map(person => (<p key={person.name}>{person.name} {person.number}</p>))
    }
    else {
      return persons
      .filter(person=>person.name.toLowerCase().includes(newFilter.toLowerCase()))
      .map(person => (<p key={person.name}>{person.name} {person.number}</p>))
    }
  }
export default Persons