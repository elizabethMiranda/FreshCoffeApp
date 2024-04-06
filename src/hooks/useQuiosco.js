import { useContext } from "react"
import { FreshCofeeContext } from "../context/FreshCoffeProvider"

export const useQuiosco = () => {
  return useContext(FreshCofeeContext)
}

//export default useQuiosco;
