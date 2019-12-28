const initialState =  ''

export const setNotification = (notification) => {
  return {
    type: 'SET', 
    data: notification
  }
}

export const removeNotification = () => {
  return {
    type: 'UNSET'
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type)
  {
    case 'SET':
      return action.data
    case 'UNSET':
      return ''
    default: 
      return state
  }
}

export default reducer