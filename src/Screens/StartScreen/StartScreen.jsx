import FactionForm from '../../Components/FactionForm/FactionForm'

/* El logo y el fondo vienen de IntroLayout */
export default function StartScreen() {
    return (
        <>
            <h1 className='visually-hidden'>Nueva partida</h1>
            <FactionForm />
        </>
    )
}
