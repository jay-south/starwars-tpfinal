import { useState } from 'react'
import { useNavigate } from 'react-router'
import { factions } from '../../data/factions-data'
import './FactionForm.css'
import useFaction from '../../hooks/useFaction'

/* 
Formulario en 2 pasos:
1. Nombre del comandante
2. Elegir bando y comenzar la partida
*/
export default function FactionForm() {
    const { startGame } = useFaction()
    const navigate = useNavigate()

    const [step, setStep] = useState(1)
    const [name, setName] = useState('')
    const [faction, setFaction] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        if (step === 1) {
            if (name.trim() === '') {
                setError('Ingresá tu nombre para continuar.')
                return
            }
            setError('')
            setStep(2)
            return
        }

        if (faction === '') {
            setError('Elegí un bando para comenzar la partida.')
            return
        }

        startGame(name.trim(), faction)
        navigate('/command')
    }

    function handleBack() {
        setError('')
        setStep(1)
    }

    return (
        <form className='faction-form' onSubmit={handleSubmit}>
            {
                step === 1 && (
                    <>
                        <label className='faction-form__label' htmlFor='commander'>Nombre del comandante</label>
                        <input
                            id='commander'
                            className='faction-form__input'
                            type='text'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder='Ej: Leia'
                            maxLength={20}
                            autoFocus
                        />
                    </>
                )
            }

            {
                step === 2 && (
                    <fieldset className='faction-form__options'>
                        <legend className='faction-form__label'>
                            La galaxia está en guerra, comandante {name.trim()}. Elegí tu bando.
                        </legend>
                        {
                            Object.values(factions).map((option) => (
                                <label
                                    key={option.id}
                                    className={'faction-option' + (faction === option.id ? ' faction-option--selected' : '')}
                                >
                                    <input
                                        className='faction-option__radio'
                                        type='radio'
                                        name='faction'
                                        value={option.id}
                                        checked={faction === option.id}
                                        onChange={(event) => setFaction(event.target.value)}
                                    />
                                    <span className='faction-option__header'>
                                        <img className='faction-option__icon' src={option.icon} alt='' />
                                        <span className='faction-option__name'>{option.name}</span>
                                    </span>
                                    <span className='faction-option__motto'>{option.motto}</span>
                                    <span className='faction-option__description'>{option.description}</span>
                                </label>
                            ))
                        }
                    </fieldset>
                )
            }

            {error && <p className='faction-form__error' role='alert'>{error}</p>}

            <div className='button-group'>
                {
                    step === 2 && (
                        <button className='button button--secondary' type='button' onClick={handleBack}>Volver</button>
                    )
                }
                <button className='button' type='submit'>
                    {step === 1 ? 'Siguiente' : 'Comenzar partida'}
                </button>
            </div>
        </form>
    )
}
