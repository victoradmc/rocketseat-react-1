import { Header } from './components/Header';
import { TaskForm  } from './components/TaskForm';
import { TaskType } from './components/TaskForm';


import './global.css'
import styles from './App.module.css';

const tasks: TaskType[] = [
  {
    id: 1,
    status: false,
    description: 'Teste'
  }
]

console.log( tasks );

function App() {

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <div className={ styles.form }>
          <TaskForm />
        </div>
        <main>
          
        </main>
      </div>
    </div>
  )
}

export default App
