import { createContext, useState, useEffect } from 'react';
import './App.css';
import { NearbyAsteroids } from './components/statefull/NearbyAsteroids';
import { Card } from './components/stateless/ThemeChanger';
import observable from "./patterns/observer/ThemeObserver"

export const ThemeContext = createContext()

function App() {

  useEffect(() =>
    observable.subscribe(themeChanged)
  )

  const themeChanged = (data) => {
    console.log(data)
  }

  const [theme, setTheme] = useState("dark")

  const themes = {
    light: {
      background: "#fff",
      color: "#000"
    },
    dark: {
      background: "#171717",
      color: "#fff"
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    observable.notify("hey, theme has changed")
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme
  }

  return (
    <div className="App">
      <nav style={themes[theme]}>
        <button className='nav__button'>link 1</button>
        <button className='nav__button'>link 2</button>
        <button className='nav__button'>link 3</button>
        <button className='nav__button'>link 4</button>
      </nav>
      <section className="app__theme__section" style={themes[theme]}>
        <ThemeContext.Provider value={providerValue}>
          <Card></Card>
        </ThemeContext.Provider>
      </section>
      <body style={themes[theme]}>
        <h1>my react nasa App</h1>
        <ThemeContext.Provider value={providerValue}>
          <NearbyAsteroids></NearbyAsteroids>
        </ThemeContext.Provider>
      </body>
    </div>
  );
}

export default App;
