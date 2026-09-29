import { Link } from 'react-router'
import './HomeScreen.css'

/* El logo y el fondo vienen de IntroLayout */
export default function HomeScreen() {
    return (
        <>
            {/* El título sigue existiendo para lectores de pantalla, visualmente lo reemplaza el logo */}
            <h1 className='visually-hidden'>Galactic Command</h1>
            <p className='home__intro'>Una guerra por el control galáctico</p>
            <Link to='/start' className='button'>Comenzar</Link>
        </>
    )
}
