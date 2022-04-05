import React from 'react'

const Content = ({ part }) => {
  return (
    <li>{part.name} {part.exercises}</li>
  )
}

export default Content