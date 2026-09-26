import { Navigate, Outlet } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import './GameLayout.css'
import useFaction from '../../hooks/useFaction'

/* 
Envuelve todas las pantallas del juego:
- Si no hay facción elegida (por ejemplo, al recargar), vuelve al inicio.
- Muestra el Sidebar al costado de cada pantalla.
*/
export default function GameLayout() {
    const { faction } = useFaction()

    if (!faction) {
        return <Navigate to='/' />
    }

    return (
        <div className='game-layout'>
            <Sidebar />
            <main className='game-layout__content'>
                <Outlet />
            </main>
        </div>
    )
}
