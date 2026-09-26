import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router'
import { Volume2, VolumeX } from 'lucide-react'
import StarWarsLogo from '../StarWarsLogo/StarWarsLogo'
import './IntroLayout.css'

/* 
Envuelve las pantallas de inicio (/ y /start): fondo de estrellas, logo girando y música.
Como el layout no se desmonta al pasar de / a /start, el logo y la música siguen sin cortes:
solo cambia lo que se muestra en el <Outlet />.
Al entrar al juego (/command) este layout se desmonta y la música se corta sola.
*/
/* El archivo arranca con medio segundo de silencio: lo salteamos */
const MUSIC_START = 0.45

export default function IntroLayout() {
    const audioRef = useRef(null)
    const [muted, setMuted] = useState(false)

    useEffect(() => {
        const audio = audioRef.current
        audio.volume = 0.4

        function play() {
            audio.currentTime = MUSIC_START
            return audio.play()
        }

        /* Los navegadores bloquean el audio hasta que el usuario interactúa con la página:
           si no puede arrancar sola, arranca con el primer click o la primera tecla */
        function playOnFirstInteraction() {
            play().catch(() => {})
        }

        play().catch(() => {
            window.addEventListener('pointerdown', playOnFirstInteraction, { once: true })
            window.addEventListener('keydown', playOnFirstInteraction, { once: true })
        })

        /* En vez del atributo loop: al terminar vuelve a empezar salteando el silencio */
        audio.addEventListener('ended', playOnFirstInteraction)

        return () => {
            window.removeEventListener('pointerdown', playOnFirstInteraction)
            window.removeEventListener('keydown', playOnFirstInteraction)
            audio.removeEventListener('ended', playOnFirstInteraction)
        }
    }, [])

    function toggleMute() {
        audioRef.current.muted = !muted
        setMuted(!muted)
    }

    return (
        <main className='intro-layout'>
            <audio ref={audioRef} src='/music/starw-theme.mp3' preload='auto' />
            <button
                type='button'
                className='intro-layout__mute'
                onClick={toggleMute}
                aria-label={muted ? 'Activar música' : 'Silenciar música'}
            >
                {muted ? <VolumeX size={20} aria-hidden='true' /> : <Volume2 size={20} aria-hidden='true' />}
            </button>
            <StarWarsLogo />
            {/* Altura mínima para que el logo quede en el mismo lugar en los 3 pasos */}
            <div className='intro-layout__content'>
                <Outlet />
            </div>
        </main>
    )
}
