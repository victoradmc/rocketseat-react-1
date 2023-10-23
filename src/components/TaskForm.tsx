import { ChangeEvent, useState } from 'react';
import styles from './TaskForm.module.css';
import { PlusCircle } from 'phosphor-react'

export interface TaskType {
    id: string,
    status: boolean,
    description: string
}

interface TaskProps {
    onCreateNewTask: ( task: TaskType ) => void;
}

export function TaskForm({ onCreateNewTask }: TaskProps ) {

    const [ newTaskText, setNewTaskText ] = useState('');

    function handleNewTaskChange( event: ChangeEvent<HTMLInputElement> ) {
        setNewTaskText( event.target.value );
    }

    function generateRandomIdHash() {
        return Math.floor( Math.random() * Date.now()).toString(12)
    }

    function handleCreateNewTask() {
        const newTask: TaskType = {
            id: generateRandomIdHash(),
            description: newTaskText,
            status: false
        }
        onCreateNewTask( newTask );

        setNewTaskText('');
    }


    return (
        <div className={ styles.form }>
            <input 
                type = "text" 
                placeholder = 'Adicione uma nova tarefa'
                value = { newTaskText }
                onChange = { handleNewTaskChange }
            />
            <button onClick={ handleCreateNewTask }>
                Criar 
                <PlusCircle />
            </button>
        </div>
    )
}