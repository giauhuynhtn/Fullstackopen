import React from 'react'

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {

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