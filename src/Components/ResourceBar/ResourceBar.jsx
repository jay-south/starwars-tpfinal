import './ResourceBar.css'

/* 
resources: lista de { label, value }
*/
export default function ResourceBar({ resources }) {
    return (
        <ul className='resource-bar'>
            {
                resources.map((resource) => (
                    <li key={resource.label} className='resource-bar__item'>
                        <span className='resource-bar__value'>{resource.value}</span>
                        <span className='resource-bar__label'>{resource.label}</span>
                    </li>
                ))
            }
        </ul>
    )
}
