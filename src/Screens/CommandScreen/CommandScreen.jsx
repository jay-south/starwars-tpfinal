import { factions } from '../../data/factions-data'
import { missions } from '../../data/missions-data'
import { planets } from '../../data/planets-data'
import ResourceBar from '../../Components/ResourceBar/ResourceBar'
import MissionCard from '../../Components/MissionCard/MissionCard'
import useFaction from '../../hooks/useFaction'

export default function CommandScreen() {
    const { faction } = useFaction()

    const faction_info = factions[faction]
    const faction_missions = missions.filter((mission) => mission.faction === faction)
    const controlled_planets = planets.filter((planet) => planet.controlled_by === faction)

    const resources = [
        { label: 'Créditos', value: faction_info.credits },
        { label: 'Tropas', value: faction_info.troops },
        { label: 'Planetas', value: controlled_planets.length },
        { label: 'Misiones', value: faction_missions.length }
    ]

    return (
        <>
            <h1 className='page-title'>Centro de comando</h1>
            <p className='page-subtitle'>{faction_info.motto}</p>

            <ResourceBar resources={resources} />

            <h2 className='section-title'>Misiones disponibles</h2>
            <div className='card-grid'>
                {
                    faction_missions.map((mission) => (
                        <MissionCard key={mission.id} mission={mission} />
                    ))
                }
            </div>
        </>
    )
}
