import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Filter from './components/Filter'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  const { initializeAnecdotes } = props

  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => initializeAnecdotes(anecdotes))
  },[initializeAnecdotes])

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

export default connect(null, { initializeAnecdotes })(App)