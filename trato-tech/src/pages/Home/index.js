import style from './Home.module.scss'
import Header from '../../components/Header'
import relogio from '../../assets/inicial.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Home (){
    const navigate = useNavigate()
    const categorias = useSelector(state => state.categorias)
    return(
        <div>
            <Header
                titulo='Classificados Tech'
                descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
                imagem={relogio}
                className={style.header}
            />
            <div className={style.categorias}>
                <div className={style['categorias-title']}>
                    <h1>
                        Categorias
                    </h1>
                </div>
                <div className={style['categorias-container']}>
                    { categorias.map((categoria, index) => (
                        <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>                                      
                            <img src={categoria.thumbnail} alt={ categoria.nome }/>
                            <h1>{categoria.nome}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}