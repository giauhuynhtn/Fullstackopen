import { useState } from 'react'

const ShowNumbers = ({newFilter, persons}) => {
  if (newFilter==='') {
    return persons.map(person => (<p key={person.name}>{person.name} {person.number}</p>))
  }
  else {
    return persons
    .filter(person=>person.name.toLowerCase().includes(newFilter.toLowerCase()))
    .map(person => (<p key={person.name}>{person.name} {person.number}</p>))
  }
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
      <h1>Phonebook</h1>
      <form>
        <div>
          filter shown with <input 
          type="text" 
          value={newFilter} 
          onChange={(e)=>setNewFilter(e.target.value)}/>
        </div>
      </form>
      <h2>add a new</h2>
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
      <ShowNumbers newFilter={newFilter} persons={persons}/>
    </div>
  )
}

export default App