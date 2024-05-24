import Footer from '../Footer'
import Navbar from '../Navbar'
import styles from './PaginaPadrao.module.scss'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao(){
    return (
        <div className={styles.container}>
            <Navbar/>
            <div className={styles['container-outlet']}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}