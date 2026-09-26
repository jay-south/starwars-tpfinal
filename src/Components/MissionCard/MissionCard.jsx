import { Link } from 'react-router'
import { planets } from '../../data/planets-data'
import './MissionCard.css'

export default function MissionCard({ mission }) {
    const planet = planets.find((planet) => planet.id === mission.planet_id)

    return (
        <Link to={'/mission/' + mission.id} className='mission-card'>
            <h3 className='mission-card__name'>{mission.name}</h3>
            <p className='mission-card__meta'>
                {planet.name} · Dificultad: {mission.difficulty}
            </p>
            <p>{mission.objective}</p>
            <p className='mission-card__reward'>Recompensa: {mission.reward}</p>
        </Link>
    )
}
