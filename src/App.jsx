import { Route, Routes } from 'react-router'
import './global.css'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import StartScreen from './Screens/StartScreen/StartScreen'
import CommandScreen from './Screens/CommandScreen/CommandScreen'
import MissionDetailScreen from './Screens/MissionDetailScreen/MissionDetailScreen'
import GalaxyScreen from './Screens/GalaxyScreen/GalaxyScreen'
import PlanetDetailScreen from './Screens/PlanetDetailScreen/PlanetDetailScreen'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'
import GameLayout from './Components/GameLayout/GameLayout'
import IntroLayout from './Components/IntroLayout/IntroLayout'

export default function App() {
    return (
        <Routes>
            {/* Pantallas de inicio: comparten logo, fondo y música (ver IntroLayout) */}
            <Route element={<IntroLayout />}>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/start' element={<StartScreen />} />
                <Route path='*' element={<NotFoundScreen />} />
            </Route>

            {/* Todas estas rutas necesitan una facción elegida (ver GameLayout) */}
            <Route element={<GameLayout />}>
                <Route path='/command' element={<CommandScreen />} />
                <Route path='/mission/:mission_id' element={<MissionDetailScreen />} />
                <Route path='/galaxy' element={<GalaxyScreen />} />
                <Route path='/planet/:planet_id' element={<PlanetDetailScreen />} />
            </Route>
        </Routes>
    )
}
