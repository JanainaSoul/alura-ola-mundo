import styles from './Menu.module.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={styles.link} to="/"> 
                Inicio
                </Link>
                <Link className={styles.link} to="/sobremim"> 
                Sobre Mim
                </Link>
            </nav>
        </header>
    )
}