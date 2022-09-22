import { useState, useEffect } from 'react'
import './App.css'
import Hechizos from './Components/Hechizos'

function App() {
  const [hechizo, setHechizo] = useState()
  const [isClick, setIsClick] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = "https://fedeperin-harry-potter-api.herokuapp.com/db"
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
      const fetchHechizos = res?.hechizos
      let totalHechizos = fetchHechizos?.length
      const randomIndex = Math.random() * totalHechizos | 0
      setLoading(false)
      setHechizo(fetchHechizos?.[randomIndex])
    })
    .catch(err=>console.error(err))
  }, [isClick])

  const changeHechizo = () => {
    setIsClick(!isClick)
    setLoading(true)
  }

  return (
    <div className="App">
      {
      loading ? 
      "loading..." 
      : 
      <Hechizos hechizo={hechizo} btn={changeHechizo}/>
      }
        
    </div>
  )
}

export default App
