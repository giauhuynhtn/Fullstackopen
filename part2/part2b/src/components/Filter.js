import React from 'react'

const Filter = ({newFilter, setNewFilter}) => {
  
    return (
        <form>
            <div>
                filter shown with <input 
                type="text" 
                value={newFilter} 
                onChange={(e)=>setNewFilter(e.target.value)}/>
            </div>
        </form>
    )
}

export default Filter