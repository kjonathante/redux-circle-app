import { combineReducers } from 'redux'
// import itemsReducer from '../features/items/itemsSlice'
import circleReducer from '../features/circles/circlesSlice'

export default combineReducers({
  // items: itemsReducer,
  circles: circleReducer,
})
