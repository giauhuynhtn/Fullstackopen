// ex 2.3*
import Content from './components/Content'

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <h1>Half Stack application development</h1>
      {course.parts.map(part => (
        <Content key={part.id} part={part} />
      ))}
      <p>
        Total of {course.parts.reduce((acc, part) => {return acc + part.exercises},0)} exercises
      </p>
    </div>
  )
}

export default App