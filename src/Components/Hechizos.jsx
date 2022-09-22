import React from 'react'

const Hechizos = ({hechizo, btn}) => {
    
    // console.log(hechizo)
  return (
    <article style={{}}>
        <p><strong>{hechizo?.hechizo}</strong></p>
        <p>{hechizo?.uso}</p>
        <button onClick={btn}>Click me</button>
    </article>
  )
}

export default Hechizos