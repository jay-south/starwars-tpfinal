import { Link } from 'react-router'
import '../HomeScreen/HomeScreen.css'

/* El logo y el fondo vienen de IntroLayout */
export default function NotFoundScreen() {
    return (
        <>
            <h1 className='home__title'>404</h1>
            <p className='home__intro'>Esta no es la página que estás buscando.</p>
            <Link to='/' className='button'>Volver al inicio</Link>
        </>
    )
}
