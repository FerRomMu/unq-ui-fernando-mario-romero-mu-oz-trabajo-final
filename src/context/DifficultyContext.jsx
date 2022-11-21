import { createContext, useState } from "react";

const DifficultyContext = createContext()
export default DifficultyContext

export const DifficultyProvider = ({ children }) => {
    const [difficulty, setDifficultyContext] = useState(null);

    const resetDifficultyContext = () => setDifficultyContext(null)
    return (
        <DifficultyContext.Provider value={{ difficulty, setDifficultyContext, resetDifficultyContext }}>
            {children}
        </DifficultyContext.Provider>
    )
}