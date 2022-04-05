import React from 'react'


const Total = ({part}) => {
  return (
    <p>total of {part.reduce((acc,part)=>{return acc + part.exercises},0)} exercises</p>
  )
}

export default Total