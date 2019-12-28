import React from 'react'
import Filter from './components/Filter'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h1>Programming anecdotes</h1>
      <Filter />
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default App