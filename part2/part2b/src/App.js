import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(newName)
    const copy = [...persons]
    if (persons.find(element => element.name === newName )) {
      alert(`${newName} is already added to phonebook`)
    } 
    else {
      copy.push({name: newName})
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
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => (<p key={person.name}>{person.name}</p>))}
    </div>
  )
}

export default App