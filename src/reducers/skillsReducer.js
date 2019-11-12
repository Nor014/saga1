const initState = {
  items: [],
  loading: false,
  error: null,
  search: ''
}

export default function skillsReducer(state = initState, action) {
  if (action.type === 'CHANGE_SEARCH_FIELD') {
    return { ...state, search: action.payload, error: null }
  }

  if (action.type === 'START_SKILLS_REQUEST') {
    return { ...state, loading: true, error: null, items: [] }
  }

  if (action.type === 'SET_SKILLS') {

    return { ...state, loading: false, error: null, items: action.payload }
  }

  if (action.type === 'SET_ERROR') {
    return { ...state, loading: false, error: action.payload }
  }

  if (action.type === 'RETURN_INIT_STATE') {
    return initState
  }


  return state
}