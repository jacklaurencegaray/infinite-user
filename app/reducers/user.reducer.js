export default function(state = {}, action) {
  switch (action.type) {
    case "USER:SET_INITIAL_PAGE":
      return {
        ...state,
        page: 1
      }
    case "USER:SET_TOTAL_PAGES":
      return {
        ...state,
        totalPages: action.payload
      }
    case "USER:INCREMENT_PAGE":
      return {
        ...state,
        page: state.page + 1
      }
    case "USER:DECREMENT_PAGE":
      return {
        ...state,
        page: state.page - 1
      }
    case "USER:START_LOADING":
      return {
        ...state,
        loading: true
      }
    case "USER:DONE_LOADING":
      return {
        ...state,
        loading: false
      }
    case "USER:ADD_USERS":
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }
    case "USER:TRIGGER_ERROR":
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}
