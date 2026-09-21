import { createContext, useState } from "react";

export const FactionContext = createContext()

export function FactionContextProvider({ children }) {
    const [commander, setCommander] = useState('')
    const [faction, setFaction] = useState(null)

    function startGame(name, faction_id) {
        setCommander(name)
        setFaction(faction_id)
    }

    const provider_values = {
        commander: commander,
        faction: faction,
        startGame: startGame
    }

    return (
        <FactionContext.Provider value={provider_values}>
            {children}
        </FactionContext.Provider>
    )
}
