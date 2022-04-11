const Filter = ({filter, setFilter})=> { 
    return (
        <form>
            <div>
                find countries <input 
                type="text" 
                value={filter} 
                onChange={(e)=>setFilter(e.target.value)}/>
            </div>
        </form>
    )
}
export default Filter