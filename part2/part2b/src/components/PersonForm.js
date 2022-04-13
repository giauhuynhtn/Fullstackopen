import React from 'react'
import personService from '../services/persons'


const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
  const handleSubmit = (event) => {
      event.preventDefault()

      if (persons.find(element => element.name === newName )) {
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with anew one?`)) {
        const thisPerson = persons.find(p => p.name === newName)
        const changedPerson = {...thisPerson, number: newNumber}
        personService
          .update(thisPerson.id, changedPerson)
          .then( returnedPerson => {
            setPersons(persons.map(p => p.id !== thisPerson.id ? p : changedPerson))
          })
          .catch(error => {
            console.log('failed');
          })
      } else {console.log('You cancelled to update phone number.');}}
      else {
        const personObject = {
          name: newName,
          number: newNumber,
        }
        personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
          }) 
          .catch(error => console.log('fail'))
      }
  }
  return (
      <form>
          <div>
          name: <input 
          type="text" 
          value={newName} 
          onChange={(e)=>setNewName(e.target.value)}
              />
          </div>
          <div>
          number: <input
              type="text"
              value={newNumber}
              onChange={(e)=>setNewNumber(e.target.value)}
              />
          </div>
          <div>
              <button type="submit" onClick={handleSubmit}>add</button>
          </div>
      </form>
  )
}

export default PersonForm