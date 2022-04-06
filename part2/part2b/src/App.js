import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const copy = [...persons]
    if (persons.find(element => element.name === newName )) {
      alert(`${newName} is already added to phonebook`)
    } 
    else {
      copy.push({
        name: newName,
        number: newNumber
      })
      setPersons(copy)
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
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
      <h2>Numbers</h2>
        {persons.map(person => (<p key={person.name}>{person.name} {person.number}</p>))}
    </div>
  )
}

export default App