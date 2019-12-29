export const vote = (id) => {
  return {
    type: 'VOTE', 
    data: { id }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data,
  }
}

export const initializeAnecdotes = (notes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: notes,
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
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
    default: 
      return state
  }
}

export default reducer