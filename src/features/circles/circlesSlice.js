// Actions
// const LOAD = 'my-app/items/LOAD'
const CREATE = 'my-app/circles/CREATE'
// const UPDATE = 'my-app/items/UPDATE';
const REMOVE = 'my-app/circles/REMOVE'
const initialState = {
  ids: [],
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  // console.log('circlesSlice', action)
  switch (action.type) {
    // do reducer stuff
    case CREATE:
      return { ids: [...state.ids, action.payload.id] }
    case REMOVE:
      return {
        ids: state.ids.filter((e) => e !== action.payload.id),
      }
    default:
      return state
  }
}

// Action Creators
// export function loadItems() {
//   return { type: LOAD }
// }
// export const loadItems = () => ({ type: LOAD })

// export function createItem(item) {
//   return { type: CREATE, item };
// }
export const createCircle = (payload) => {
  return { type: CREATE, payload }
}

// export function updateItem(item) {
//   return { type: UPDATE, item };
// }

// export function removeItem(item) {
//   return { type: REMOVE, item };
// }
export const removeCircle = (payload) => {
  return { type: REMOVE, payload }
}

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getItem () {
//   return dispatch => get('/item').then(item => dispatch(updateItem(item)))
// }
