import { combineReducers } from "redux"

/** Reducers */
import users from "./user.reducer"

export default combineReducers({ user: users })
