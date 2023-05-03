import styles from './menuLink.module.css';
import { Link , useLocation} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function MenuLink({children, to}) {
    //const localizacao = useLocation();

    return (
        <NavLink className= {({isActive}) =>`
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
                `} to={to}> 
                    {children} 
                </NavLink>
    )
}