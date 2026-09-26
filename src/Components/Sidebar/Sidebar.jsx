import { Link, NavLink } from 'react-router'
import { LayoutDashboard, Orbit, LogOut } from 'lucide-react'
import { factions } from '../../data/factions-data'
import './Sidebar.css'
import useFaction from '../../hooks/useFaction'

export default function Sidebar() {
    const { commander, faction } = useFaction()

    return (
        <aside className='sidebar'>
            <Link to='/command' className='sidebar__logo'>
                <img src='/star-wars-logo.svg' alt='Star Wars - Galactic Command' />
            </Link>

            <div className='sidebar__commander'>
                <img className='sidebar__faction-icon' src={factions[faction].icon} alt='' />
                <div className='sidebar__commander-info'>
                    <span className='sidebar__commander-label'>Comandante</span>
                    <strong className='sidebar__commander-name'>{commander}</strong>
                    <span className='sidebar__faction'>{factions[faction].name}</span>
                </div>
            </div>

            <nav className='sidebar__nav'>
                <NavLink to='/command' className='sidebar__link'>
                    <LayoutDashboard size={18} aria-hidden='true' /> Comando
                </NavLink>
                <NavLink to='/galaxy' className='sidebar__link'>
                    <Orbit size={18} aria-hidden='true' /> Galaxia
                </NavLink>
            </nav>

            {/* Sale de la partida: al volver al inicio se pierde la facción elegida */}
            <Link to='/' className='sidebar__link sidebar__exit'>
                <LogOut size={18} aria-hidden='true' /> Salir
            </Link>
        </aside>
    )
}
