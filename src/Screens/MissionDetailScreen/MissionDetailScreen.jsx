import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { missions } from '../../data/missions-data'
import { troops } from '../../data/troops-data'
import TroopCard from '../../Components/TroopCard/TroopCard'
import useFaction from '../../hooks/useFaction'

export default function MissionDetailScreen() {
    const { mission_id } = useParams()
    const { faction } = useFaction()

    const [selectedTroop, setSelectedTroop] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)

    /* Solo se puede jugar una misión del propio bando */
    const mission = missions.find(
        (mission) => mission.id === Number(mission_id) && mission.faction === faction
    )

    if (!mission) {
        return (
            <>
                <h1 className='page-title'>Misión no encontrada</h1>
                <Link to='/command' className='button'>Volver al comando</Link>
            </>
        )
    }

    const faction_troops = troops.filter((troop) => troop.faction === faction)

    return (
        <>
            <h1 className='page-title'>{mission.name}</h1>
            <p className='page-subtitle'>{mission.objective}</p>

            {/* Paso 1: elegir tropa */}
            {
                !selectedTroop && (
                    <section>
                        <h2 className='section-title'>Elegí la unidad a enviar</h2>
                        <div className='card-grid'>
                            {
                                faction_troops.map((troop) => (
                                    <TroopCard key={troop.id} troop={troop} onSelect={setSelectedTroop} />
                                ))
                            }
                        </div>
                    </section>
                )
            }

            {/* Paso 2: tomar una decisión */}
            {
                selectedTroop && !selectedOption && (
                    <section className='panel'>
                        <h2 className='section-title'>Unidad enviada: {selectedTroop.name}</h2>
                        <p>{mission.situation}</p>
                        <div className='button-group'>
                            {
                                mission.options.map((option) => (
                                    <button
                                        key={option.label}
                                        type='button'
                                        className='button'
                                        onClick={() => setSelectedOption(option)}
                                    >
                                        {option.label}
                                    </button>
                                ))
                            }
                        </div>
                    </section>
                )
            }

            {/* Paso 3: cierre de la misión */}
            {
                selectedOption && (
                    <section className='panel'>
                        <h2 className='section-title'>Informe de misión</h2>
                        <p>{selectedOption.ending}</p>
                        <Link to='/command' className='button'>Volver al comando</Link>
                    </section>
                )
            }
        </>
    )
}
