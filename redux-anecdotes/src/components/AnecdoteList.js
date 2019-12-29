import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {

  const voteFor = (anecdote) => {
    props.vote(anecdote)
    props.setNotification("voted for anecdote '" + anecdote.content + "'", 5)
  }
   
  return (
    <div>
      {props.visibleAnecdotes
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  return filter === '' ? anecdotes : anecdotes.filter(anecdote => anecdote.content.includes(filter))
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state),
    filter: state.filter
  }
}

export default connect(mapStateToProps, { removeNotification, setNotification, vote })(AnecdoteList)
