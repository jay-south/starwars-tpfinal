import { Link } from 'react-router'
import { factions } from '../../data/factions-data'
import './PlanetCard.css'

export default function PlanetCard({ planet }) {
    return (
        <Link to={'/planet/' + planet.id} className='planet-card'>
            <img
                className='planet-card__image'
                src={planet.image}
                alt={'Planeta ' + planet.name}
            />
            <h3 className='planet-card__name'>{planet.name}</h3>
            <p className='planet-card__owner'>Controlado por: {factions[planet.controlled_by].name}</p>
        </Link>
    )
}
