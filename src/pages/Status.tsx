import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo',
    'Olha, faz sentido!',
  ])
  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers ])
    setNewAnswer('')
  }
  
  return(
    <main className="status">
    <Header title="Tweet"/>
    <Tweet content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur voluptatibus modi nulla maxime illum sed dolor minima! Sunt mollitia, voluptatibus illo magni consequatur recusandae distinctio impedit voluptatem maxime molestias eum!
"/>  
   
    <Separator/>

  <form onSubmit={createNewAnswer} className="answer-tweet-form">
    <label htmlFor="tweet">
      <img src="https://github.com/teiryandev.png" alt="Ryan Teixeira" />
      <textarea id='tweet' 
      placeholder="Tweet your answer"
      value={newAnswer}
      onChange={(event) => {
        setNewAnswer(event.target.value)
      }}/>
    </label>
    <button type='submit'>Answer</button>
  </form>



  {answers.map(answers => {
      return(
        <Tweet key={answers} content={answers}/>
      )
  })}
  

   </main>
  )
}