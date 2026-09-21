export const missions = [
    {
        id: 1,
        faction: 'rebelde',
        name: 'Robar planos imperiales',
        planet_id: 2,
        difficulty: 'Alta',
        objective: 'Infiltrarse en un archivo de Coruscant y copiar los planos de una nueva estación.',
        reward: '800 créditos',
        situation: 'Una patrulla imperial se acerca al archivo mientras la descarga va por la mitad.',
        options: [
            { label: 'Cortar la descarga y escapar', ending: 'Tu equipo escapa con parte de los planos. No es todo, pero es un comienzo.' },
            { label: 'Esperar a que termine', ending: 'La descarga termina justo a tiempo. Los planos completos ya viajan hacia la Alianza.' }
        ]
    },
    {
        id: 2,
        faction: 'rebelde',
        name: 'Rescatar prisioneros',
        planet_id: 1,
        difficulty: 'Media',
        objective: 'Liberar a un grupo de rebeldes retenidos en un puesto imperial de Tatooine.',
        reward: '10 tropas',
        situation: 'Los prisioneros están custodiados por dos guardias y un droide de seguridad.',
        options: [
            { label: 'Atacar de frente', ending: 'El combate es rápido. Los prisioneros vuelven a la base sanos y salvos.' },
            { label: 'Crear una distracción', ending: 'Los guardias abandonan su puesto y el rescate se hace sin disparar un tiro.' }
        ]
    },
    {
        id: 3,
        faction: 'rebelde',
        name: 'Defender una colonia',
        planet_id: 1,
        difficulty: 'Baja',
        objective: 'Proteger a los colonos de Tatooine de un ataque de mercenarios.',
        reward: '5 de influencia',
        situation: 'Un convoy de mercenarios aparece en el horizonte.',
        options: [
            { label: 'Emboscarlos en las dunas', ending: 'La emboscada funciona y los mercenarios se retiran.' },
            { label: 'Fortificar la colonia', ending: 'Las defensas resisten el ataque. La colonia sigue en pie.' }
        ]
    },
    {
        id: 4,
        faction: 'imperio',
        name: 'Capturar rebeldes',
        planet_id: 1,
        difficulty: 'Media',
        objective: 'Encontrar y detener a una célula rebelde escondida en Tatooine.',
        reward: '600 créditos',
        situation: 'Un informante asegura saber dónde se esconden los rebeldes.',
        options: [
            { label: 'Confiar en el informante', ending: 'La pista era buena. La célula rebelde queda desarticulada.' },
            { label: 'Rastrear por tu cuenta', ending: 'Tardás más, pero encontrás el escondite sin depender de nadie.' }
        ]
    },
    {
        id: 5,
        faction: 'imperio',
        name: 'Proteger información',
        planet_id: 2,
        difficulty: 'Alta',
        objective: 'Evitar que espías rebeldes accedan a los archivos de Coruscant.',
        reward: '10 de influencia',
        situation: 'Detectás un acceso no autorizado en los servidores del archivo.',
        options: [
            { label: 'Cortar la energía del edificio', ending: 'Los espías quedan a oscuras y la información está a salvo.' },
            { label: 'Dejarlos entrar y rodearlos', ending: 'La trampa funciona. Los espías son capturados con las manos en la masa.' }
        ]
    },
    {
        id: 6,
        faction: 'imperio',
        name: 'Controlar un planeta',
        planet_id: 1,
        difficulty: 'Alta',
        objective: 'Establecer una guarnición imperial permanente en Tatooine.',
        reward: '20 tropas',
        situation: 'Los clanes locales se niegan a aceptar la presencia imperial.',
        options: [
            { label: 'Negociar con los clanes', ending: 'Los clanes aceptan un acuerdo. La guarnición se instala sin conflicto.' },
            { label: 'Imponer la ley marcial', ending: 'La guarnición se instala, aunque los clanes no lo van a olvidar.' }
        ]
    }
]
