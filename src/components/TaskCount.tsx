import styles from './TaskCount.module.css';



interface TaskCountProps {
    totalTasks: number,
    completedTasks: number
}

export function TaskCount( { totalTasks, completedTasks }: TaskCountProps ) {


    return (
        <div className = { styles.taskCount }>
            <div className = { styles.total }>
                <p>
                    Tarefas criadas 
                    <span className = { styles.numbers }>{ totalTasks }</span>
                </p>
            </div>
            <div className = { styles.done }>
                <p>
                    Concluídas
                    <span className = { styles.numbers }>
                        { completedTasks } de { totalTasks }
                    </span>
                </p>
            </div>
        </div>
    )
}