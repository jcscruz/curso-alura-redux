import styles from './Navbar.module.scss'
import { ReactComponent as Logo} from '../../assets/logo.svg'
import classNames from 'classnames'
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import Busca from '../Busca'

const iconeProps = {
    color: 'white',
    size: 24
}

export default function Navbar(){
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <div>
                    <a href='/' className={classNames(styles.links, {
                        [styles.selected]: window.location.pathname === '/'
                    })}>
                        Página inicial
                    </a>
                </div>
            </div>
            <div className={styles.busca}>
                <Busca/>
            </div>
            <div className={styles.icontes}>
                <a href="/carrinho">
                    {window.location.pathname === '/carrinho'
                        ? <RiShoppingCartFill {...iconeProps} />
                        : <RiShoppingCart2Line {...iconeProps} />
                    }
                </a>
            </div>
        </nav>
    )
}