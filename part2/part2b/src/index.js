import { createRoot } from 'react-dom/client';
import App from './App'
import axios from 'axios'


axios.get('http://localhost:3003/persons').then(response => {
  const persons = response.data
  console.log(persons);
  const container = document.getElementById('root')
  const root = createRoot(container)
  root.render(<App persons={persons}/>)
})
