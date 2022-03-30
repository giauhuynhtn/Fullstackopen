// import parse from 'html-react-parser'

// const Content = (props) => {
//   const total = 31
//   console.log(total)
//   const content = props.parts.map(v => `<p>${v.name} ${v.exercises}</p>`).join('')
//   return (
//     `<div>
//       <h1>${props.name}</h1>
//       ${content}
//       <p>Number of courses is ${total}</p>
//     </div>`
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
//   const htmlString=Content(course)

//   return (
//     <div>
//       {parse(htmlString)}  
//     </div>
//   )
// }

// export default App

//=============== EX 1.1-1.2
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   const Header = (props) => {
//     return (
//       <h1>
//         {props.course}
//       </h1>
//     )
//   }
// //ex 1.1
//   const Content = (props) => {
//     return (
//       <>
//         <p>
//           {props.part1} {props.exercises1}
//         </p>
//         <p>
//           {props.part2} {props.exercises2}
//         </p>
//         <p>
//           {props.part3} {props.exercises3}
//         </p>
//       </>
//     )
//   }

  
// //ex 1.2
//   const Content1 = (props) => {
//     const Part = (props) => {
//       return (
//         <p>
//           {props.part} {props.exercises}
//         </p>
//       )
//     }
//     return (
//       <div>
//         <Part part={props.part1} exercises={props.exercises1}/>
//         <Part part={props.part2} exercises={props.exercises2}/>
//         <Part part={props.part3} exercises={props.exercises3}/>
//       </div>
//     )
//   }

//   const Total = (props) => {
//     return (
//       <p>
//         Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
//       </p>
//     )
//   }

//   return (
//     <div>
//       <Header course={course}/>
//       <Content1 part1={part1} exercises1={exercises1}
//                part2={part2} exercises2={exercises2}
//                part3={part3} exercises3={exercises3}
//       />
//       <Total exercises1={exercises1}
//              exercises2={exercises2}
//              exercises3={exercises3}/>
//     </div>
//   )
// }

// export default App

//======Ex 1.3-1.5
// EX 1.3 -----

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   const Header = (props) => {
//     console.log(props)
//     return <h1>{props.course}</h1>
//   }

//   const Content = (props) => {
//     const Part = (props) => {
//       return (
//         <p>
//           {props.name} {props.exercises}
//         </p>
//       )
//     };
//     return (
//       <div>
//         <Part name={props.name1} exercises={props.exercises1}/>
//         <Part name={props.name2} exercises={props.exercises2}/>
//         <Part name={props.name3} exercises={props.exercises3}/>
//       </div>
//     )
//   };

//   const Total = (props) => {
//     return (
//       <p>
//         Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
//       </p>
//     )
//   }

//   return (
//     <div>
//       <Header course = {course}/>
//       <Content name1={part1.name} exercises1={part1.exercises}
//                name2={part2.name} exercises2={part2.exercises}
//                name3={part3.name} exercises3={part3.exercises}/>
//       <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/>
//     </div>
//   )
// }

// export default App

//====== Ex 1.4 =====

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    return <h1>{props.course}</h1>
  };

  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  };

  const Content = (props) => {
    
    return (
      <div>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
      </div>
    )
  };

  const Total = (props) => {
    return (
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} 
      </p>
    )
  }


  return (
    <div>
       <Header course = {course}/>
       <Content parts={parts} />
       <Total parts={parts} />    
  </div>
  )
}

export default App

// ==== Ex 1.5 ===

