import styles from './Header.module.css';

import rocketLogo from '../assets/rocket.svg';

export function Header() {

    return (
        <header className={ styles.header }>
            <img src={ rocketLogo } alt="Logo da lista de tarefas" />
            <h2>to<span>do</span></h2>
        </header>
    )
}