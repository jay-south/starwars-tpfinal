import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { FactionContextProvider } from './Context/FactionContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <FactionContextProvider>
            <App />
        </FactionContextProvider>
    </BrowserRouter>
)
