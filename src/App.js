import logo from './logo.svg';
import './App.css';
// import Theme, { ThemeContext } from "./components/Theme"
import{useContext} from 'react'
import {ThemeContext}from './context/Theme'

function App() {
  const [{theme,isDark},toggleTheme]= useContext(ThemeContext)
  console.log("theme",theme);
  return (
    <div className="App" style={{backgroundColor:theme.backgroundColor,color:theme.color}}>
      <div className='text'>It's a {isDark? 'Dark':'Light'} theme</div>
      {/* <Theme/> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
