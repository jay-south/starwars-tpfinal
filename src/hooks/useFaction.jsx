import { useContext } from "react"
import { FactionContext } from "../Context/FactionContext"

/* 
Custom hook: evita repetir useContext(FactionContext) en cada componente.
Devuelve el comandante, la facción elegida y la función para empezar la partida.
*/
function useFaction() {
    return useContext(FactionContext)
}

export default useFaction
