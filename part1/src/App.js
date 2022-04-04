
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
// //-------------ex 1.1-------------
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

  
// // -------------ex 1.2-------------
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

// -------------Ex 1.3 -------------

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

//------------- Ex 1.4 -------------

// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

  // const Header = (props) => {
  //   return <h1>{props.course}</h1>
  // };

  // const Part = (props) => {
  //   return (
  //     <p>
  //       {props.content.name} {props.content.exercises}
  //     </p>
  //   )
  // };

  // const Content = (props) => {
  //   return (
  //     <div>
  //       <Part content={props.p[0]}/>
  //       <Part content={props.p[1]}/>
  //       <Part content={props.p[2]}/>
  //     </div>
  //   )
  // };

  // const Total = (props) => {
  //   return (
  //     <p>
  //       Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} 
  //     </p>
  //   )
  // }


//   return (
//     <div>
//        <Header course = {course}/>
//        <Content p={parts} />
//        <Total parts={parts} />    
//   </div>
//   )
// }

// export default App

// ----------- Ex 1.5 -------------

// const Header = (props) => {
//   return <h1>{props.course.name}</h1>
// };

// const Part = (props) => {
//   return (
//     <p>
//       {props.content.name} {props.content.exercises}
//     </p>
//   )
// };

// const Content = (props) => {
//   return (
//     <div>
//       <Part content={props.course.parts[0]}/>
//       <Part content={props.course.parts[1]}/>
//       <Part content={props.course.parts[2]}/>
//     </div>
//   )
// };

// const Total = (props) => {
//   return (
//     <p>
//       Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} 
//     </p>
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



//   return (
//     <div>
//       <Header course = {course}/>
//       <Content course = {course}/>
//       <Total course = {course} />
//     </div>
//   )
// }

//--------Ex1.11---------

// import {useState} from 'react'

// const StatisticTable = ({value}) => {
//   const {good, neutral, bad} = value
//   let total = good + bad + neutral
//   let average = (good + bad)/total
//   let positive = good/total
//   console.log(total)
//   let result = <p>no feedback</p>
//   if (total > 0) {result = (
//       <table>
//         <tbody>
//           <tr>
//             <td>good</td>
//             <td>{good}</td>
//           </tr>
//           <tr>
//             <td>neutral</td>
//             <td>{neutral}</td>
//           </tr>
//           <tr>
//             <td>bad</td>
//             <td>{bad}</td>
//           </tr>
//           <tr>
//             <td>all</td>
//             <td>{total}</td>
//           </tr>
//           <tr>
//             <td>average</td>
//             <td>{average}</td>
//           </tr>
//           <tr>
//             <td>positive</td>
//             <td>{positive} %</td>
//           </tr>
//         </tbody>
//       </table>
//   )}
  
//   return result
// }
// const Button = ({text, onclick}) => <button onClick={onclick}>{text}</button>

// const App = () => {
 
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const goodHandler = () => {
//     console.log('Customer chooses good')
//     setGood(good + 1)
//   }
//   const neutralHandler = () => {
//     console.log('Customer chooses neutral')
//     setNeutral(neutral + 1)
//   }
//   const badHandler = () => {
//     console.log('Customer chooses bad')
//     setBad(bad + 1)
//   }
  
//   let value = {good, neutral, bad}

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <StatisticTable value ={value} />
//       <p>
//         <Button onclick={goodHandler} text='good'/>
//         <Button onclick={neutralHandler} text='neutral'/>
//         <Button onclick={badHandler} text='bad'/>
//       </p>
      
//     </div>
//   )
// }

// export default App

// ------- 1.14 * ------------
import {useState} from 'react'

const getRandomInt = (max) => Math.floor(Math.random() * max)

const MostVoted = ({votedArray,anecdotes}) => {
  const indexOfMostVoted = (element) => element === Math.max(...votedArray)
  let index = votedArray.findIndex(indexOfMostVoted)
  return <p>{anecdotes[index]}</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(new Uint8Array(7))
  
  const votedHandle = () => {
    const copy = [...voted]
    copy[selected] += 1
    console.log('voted list', copy)
    setVoted(copy)
  }

  const selectHandle = () => {
    let number = getRandomInt(anecdotes.length)
    if (number === selected) {number = getRandomInt(anecdotes.length)}
    else (setSelected(number))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}<br/>has {voted[selected]} votes.</p>
      <button onClick={selectHandle}>next anecdote</button>
      <button onClick={votedHandle}>vote</button>
      <h2>Anecdote with most votes</h2>
      <MostVoted votedArray={voted} anecdotes={anecdotes}/>
    </div>
  )
}

export default App
