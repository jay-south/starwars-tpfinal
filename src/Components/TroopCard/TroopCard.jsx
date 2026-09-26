import { Radar, Rocket, Shield, ShieldHalf, Skull, Swords } from 'lucide-react'
import './TroopCard.css'

/* Relaciona el campo icon de cada tropa con su componente de lucide-react */
const icons = {
    shield: Shield,
    'shield-half': ShieldHalf,
    rocket: Rocket,
    swords: Swords,
    radar: Radar,
    skull: Skull
}

export default function TroopCard({ troop, onSelect }) {
    const Icon = icons[troop.icon]

    return (
        <button type='button' className='troop-card' onClick={() => onSelect(troop)}>
            <span className='troop-card__header'>
                <Icon className='troop-card__icon' size={28} aria-hidden='true' />
                <span className='troop-card__name'>{troop.name}</span>
            </span>
            <ul className='troop-card__stats'>
                <li>Ataque: {troop.attack}</li>
                <li>Defensa: {troop.defense}</li>
                <li>Velocidad: {troop.speed}</li>
                <li>Inteligencia: {troop.intelligence}</li>
            </ul>
        </button>
    )
}
