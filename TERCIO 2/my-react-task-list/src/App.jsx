import './App.css'
import { TaskList } from './components/TaskList'
import Header from './components/Header'


const taskArray = [
  {name: "Buy a new gaming laptop"},
  {name: "Complete a previous task"},
  {name: "Create video for Youtube"},
  {name: "Create a new portafolio site"}
]


function App() {

  return (
    <div className="App">
      <Header title="Todo APP"></Header>
      <TaskList tasks={taskArray}></TaskList>
    </div>
  )
}

export default App
