import React from 'react'

import { vote } from './reducers/anecdoteReducer'
import NewAnecdote from './components/NewAnecdote'

const App = (props) => {
  const anecdotes = props.store.getState()

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => props.store.dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <NewAnecdote store={props.store}/>
    </div>
  )
}

export default App