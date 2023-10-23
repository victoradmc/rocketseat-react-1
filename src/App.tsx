import { Header } from './components/Header';
import { TaskForm  } from './components/TaskForm';
import { TaskType } from './components/TaskForm';
import { Task } from './components/Task';
import { TaskCount } from './components/TaskCount';
import {  useState } from 'react';


import './global.css'
import styles from './App.module.css';
import { EmptyList } from './components/EmptyList';

/* const task: TaskType[] = [
  {
    id: 1,
    status: false,
    description: 'Teste'
  }
] */

function App() {

  const [ tasks, setTasks ] = useState<TaskType[]>([]);

  /* const [ completedTasks, setCompletedTasks ] = useState( 0 ); */


  function handleNewTask( newTask: TaskType ) {
    setTasks([ ...tasks, newTask ]);
  }

  function deleteTask( idToDelete: string ) {
    const tasksWithoutDeletedOne = tasks.filter( task => {
      return task.id != idToDelete;
    })

    setTasks( tasksWithoutDeletedOne );
  }

  function checkTask( idToCheck: string ) {
    const updatedTasks = tasks.map( task => {
      if ( task.id === idToCheck ) {
        return {
          id: task.id,
          description: task.description,
          status: !task.status
        } ;
      } else {
        return task;
      }
    });

    setTasks( updatedTasks );
  }

  const tasksCompleted = tasks.reduce(( amount, task ) => {
    if ( task.status ) {
      return amount + 1
    }
     return amount;
  }, 0);


  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <div className={ styles.form }>
          <TaskForm onCreateNewTask={ handleNewTask } />
        </div>
        <main>
          <TaskCount 
            totalTasks = { tasks.length }
            completedTasks = { tasksCompleted }
          />
          <div className = { styles.taskList }>
            {
              tasks.length > 0 ? 
                tasks.map( task => {
                  return (
                    <Task 
                      key = { task.id }
                      task = { task }
                      onDeleteTask = { deleteTask }
                      onCheckTask = { checkTask }
                    />
                  )
                })
              :
              <EmptyList />
            }
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
