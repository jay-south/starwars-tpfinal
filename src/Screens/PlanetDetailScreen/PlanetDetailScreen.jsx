import { Link, useParams } from 'react-router'
import { factions } from '../../data/factions-data'
import { missions } from '../../data/missions-data'
import { planets } from '../../data/planets-data'
import './PlanetDetailScreen.css'
import useFaction from '../../hooks/useFaction'

/* Pantalla informativa: las misiones se lanzan desde el centro de comando */
export default function PlanetDetailScreen() {
    const { planet_id } = useParams()
    const { faction } = useFaction()

    const planet = planets.find((planet) => planet.id === Number(planet_id))

    if (!planet) {
        return (
            <>
                <h1 className='page-title'>Planeta no encontrado</h1>
                <Link to='/galaxy' className='button'>Volver al mapa</Link>
            </>
        )
    }

    const planet_missions = missions.filter(
        (mission) => mission.planet_id === planet.id && mission.faction === faction
    )

    return (
        <>
            <h1 className='page-title'>{planet.name}</h1>
            <p className='page-subtitle'>{planet.description}</p>

            <section className='panel planet-detail__panel'>
                <img className='planet-detail__image' src={planet.image} alt={'Planeta ' + planet.name} />

                <p>Clima: {planet.climate}</p>
                <p>Controlado por: {factions[planet.controlled_by].name}</p>
                <p>Misiones de tu bando en este planeta: {planet_missions.length}</p>

                <p className='control-bar__label'>
                    Control imperial {planet.imperial_control}% · Control rebelde {100 - planet.imperial_control}%
                </p>
                <div className='control-bar'>
                    <div className='control-bar__imperial' style={{ width: planet.imperial_control + '%' }}></div>
                </div>
            </section>

            <Link to='/galaxy' className='button'>Volver al mapa</Link>
        </>
    )
}
