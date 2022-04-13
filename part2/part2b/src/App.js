//part2 ex2.20*
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Confirm'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [confirmMessage, setConfirmMessage] = useState(null)
  const [style, setStyle] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => {
        console.log('fail');
      })
  },[]);
 
  return (
    <div>
      <h1 >Phonebook</h1>
      <Notification message={confirmMessage} style={style}/>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
      <h3>add a new</h3>
      <PersonForm 
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setConfirmMessage={setConfirmMessage}
        setStyle={setStyle}
      />
      <h3>Numbers</h3>
      <Persons 
        newFilter={newFilter} 
        persons={persons} 
        setPersons={setPersons}
        setStyle={setStyle}
        setConfirmMessage={setConfirmMessage}
      />
    </div>
  )
}

export default App;