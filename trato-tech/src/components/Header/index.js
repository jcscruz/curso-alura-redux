import style from './header.module.scss'

export default function Header({titulo, descricao, className = '', imagem}){
    return (
        <header className={`${style.header} ${className}`}>
            <div className={style['header-texto']}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            <div className={style['header-imagem']}>
                <img
                    alt={titulo}
                    src={imagem}
                />
            </div>
        </header>
    )
}