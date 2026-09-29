import { planets } from '../../data/planets-data'
import PlanetCard from '../../Components/PlanetCard/PlanetCard'

export default function GalaxyScreen() {
    return (
        <>
            <h1 className='page-title'>Mapa galáctico</h1>
            <p className='page-subtitle'>Elegí un planeta para ver su estado.</p>

            <div className='card-grid'>
                {
                    planets.map((planet) => (
                        <PlanetCard key={planet.id} planet={planet} />
                    ))
                }
            </div>
        </>
    )
}
