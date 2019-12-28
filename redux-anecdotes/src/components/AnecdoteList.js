import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const anecdotes = props.store.getState().anecdotes
  const filter = props.store.getState().filter
  const anecdotesToShow = filter === '' ? anecdotes : anecdotes.filter(anecdote => anecdote.content.includes(filter))

  const voteFor = (anecdote) => {
    props.store.dispatch(vote(anecdote.id))
    props.store.dispatch(setNotification("voted for anecdote '" + anecdote.content + "'"))
    setTimeout(() => props.store.dispatch(removeNotification()), 5000)
  }
   
  return (
    <div>
      {anecdotesToShow
        .sort((a,b) => b.votes - a.votes)
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => voteFor(anecdote)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}  
    
export default AnecdoteList