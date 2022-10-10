import observable from "../../patterns/observer/ThemeObserver"
import { ThemeContext } from "../../App"
import { useContext, useEffect } from "react"
import "../../styles/ThemeChanger.css"

export const Card = () => {

    const theme = useContext(ThemeContext)

    return (
        <>
            <div>
                <h5 className="themechanger__h5">change theme</h5>
                <input type="checkbox" className="themechanger__checkbox" style={theme.theme} onClick={theme.toggleTheme} />
            </div>

        </>
    )
}