import styles from './EmptyList.module.css';

import clipboard  from '../assets/Clipboard.svg';


export function EmptyList() {


    return (
        <div className = { styles.emptyList }>
            <img src={ clipboard } alt="Prancheta" />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}