import anecdoteService from '../services/anecdotes'

export const vote = (anecdote) => {
  return async dispatch => {
    const changedAnecdote = {
      ...anecdote, 
      votes: anecdote.votes + 1
    }

    const updatedAnecdote = await anecdoteService.update(changedAnecdote)
    dispatch({
      type: 'VOTE', 
      data: updatedAnecdote
    })
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const reducer = (state = [], action) => {
  switch(action.type)
  {
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      return state.map(anecdote => anecdote.id !== id ? anecdote : action.data)
    default: 
      return state
  }
}

export default reducer