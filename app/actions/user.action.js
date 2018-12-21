import axios from "axios"
import { API_SERVER } from "react-native-dotenv"

export const initializeUser = () => (dispatch, getState) => {
  dispatch(startLoading())
  dispatch(setInitialPage())
  axios
    .get(`${API_SERVER}/users?page=${getState().user.page}`)
    .then(response => response.data)
    .then(response => {
      dispatch({
        type: "USER:ADD_USERS",
        payload: response.data
      })
      dispatch({
        type: "USER:SET_TOTAL_PAGES",
        payload: response.total_pages
      })
      dispatch(doneLoading())
    })
    .catch(() => dispatch(triggerError()))
}

export const loadMoreUsers = () => (dispatch, getState) => {
  const { page, totalPages } = getState().user
  if (page < totalPages) {
    dispatch(startLoading())
    dispatch(nextPage())
    axios
      .get(`${API_SERVER}/users?page=${getState().user.page}`)
      .then(response => response.data)
      .then(response => {
        dispatch({
          type: "USER:ADD_USERS",
          payload: response.data
        })
        dispatch(doneLoading())
      })
      .catch(() => dispatch(triggerError()))
  }
}

export const triggerError = () => ({
  type: "USER:TRIGGER_ERROR"
})

export const setInitialPage = () => ({
  type: "USER:SET_INITIAL_PAGE"
})

export const nextPage = () => ({
  type: "USER:INCREMENT_PAGE"
})

export const startLoading = () => ({
  type: "USER:START_LOADING"
})

export const doneLoading = () => ({
  type: "USER:DONE_LOADING"
})
