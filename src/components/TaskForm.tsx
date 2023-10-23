import styles from './TaskForm.module.css';
import { PlusCircle } from 'phosphor-react'

export interface TaskType {
    id: number,
    status: boolean,
    description: string
}

export function TaskForm() {


    return (
        <div className={ styles.form }>
            <input 
                type="text" 
                placeholder='Adicione uma nova tarefa'
            />
            <button>
                Criar 
                <PlusCircle />
            </button>
        </div>
    )
}