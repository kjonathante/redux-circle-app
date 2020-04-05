// Actions
// const LOAD   = 'my-app/items/LOAD'
// const CREATE = 'my-app/items/CREATE';
// const UPDATE = 'my-app/items/UPDATE';
// const REMOVE = 'my-app/items/REMOVE';
const initialState = [
  {
    id: 1,
    attribute: 'value',
  },
]

// Reducer
export default function reducer(state = initialState, action = {}) {
  console.log('itemsSlice', action)
  switch (action.type) {
    // do reducer stuff
    default:
      return state
  }
}

// Action Creators
// export function loadItems() {
//   return { type: LOAD }
// }

// export function createItem(item) {
//   return { type: CREATE, item };
// }

// export function updateItem(item) {
//   return { type: UPDATE, item };
// }

// export function removeItem(item) {
//   return { type: REMOVE, item };
// }

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getItem () {
//   return dispatch => get('/item').then(item => dispatch(updateItem(item)))
// }
