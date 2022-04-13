const Notification = ({ message, style }) => {
    if (message === null) {
      return null
    }  
    return (
      <div className='confirm' style={ {color: style} }>
        {message}
      </div>
    )
  }
export default Notification