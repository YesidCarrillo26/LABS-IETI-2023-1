import { createContext } from "react"

const homeContext = { lights:[false, false, false] }

export const SmartHomeContext = createContext(homeContext)