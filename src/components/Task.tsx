import styles from './Task.module.css';
import { TaskType } from './TaskForm';

import { CheckCircle, Circle, Trash   } from 'phosphor-react'

interface TaskProps {
    task: TaskType,
    onDeleteTask: ( id: string ) => void;
    onCheckTask: ( id: string ) => void;
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps ) {

    function handleDeleteTask() {
        onDeleteTask( task.id );
    }

    function handleCheckTask() {
        onCheckTask( task.id );
    }

    return (
        <div className = { styles.task }>
            {
                task.status ? 
                    <button 
                        className = { styles.checkedIcon }
                        onClick = { handleCheckTask }
                    > 
                        <CheckCircle /> 
                    </button>
                : 
                    <button 
                        className = { styles.uncheckedIcon }
                        onClick = { handleCheckTask }
                    > 
                        <Circle /> 
                    </button>
            }
            <p className = { task.status ? styles.doneTask : styles.todoTask }>{ task.description }</p>
            <button className = { styles.deleteButton } onClick = { handleDeleteTask }>
                <Trash />
            </button>
        </div>
    )
}