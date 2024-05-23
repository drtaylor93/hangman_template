import React from 'react'
import { useState, useEffect } from 'react'
import './Wordbank.css'

function Wordbank() {

//[state ,setter(changes the value of the state) ]
const [word, setWord] = useState('')

useEffect(()=> {
    // Retrieves a single word for the API
    fetch('https://random-word-api.herokuapp.com/word')
    .then(response => response.json())
    .then(data => {
        let upperCase;
        data.map((word)=> {
            upperCase = word.toUpperCase()
        })
        
        setWord(upperCase)
    })

}, [])
// adding the [] prevents the default behavior of rerendering the component
// after every state change
  return (
    <div>
        <div className="Pixel">
           Hangman Word Game
        </div>
        <hr></hr>
        {word}
    </div>
  )
}

export default Wordbank