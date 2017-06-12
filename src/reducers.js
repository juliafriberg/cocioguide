import { combineReducers } from 'redux'
import {
  REQUEST_DATA,
  RECEIVE_DATA,
  SET_SELECTED_CATEGORY,
  SET_INITIAL_CATEGORY,
  SET_SELECTED_PAGE
} from './actions.js'


function data(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function allData(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
    case REQUEST_DATA:
      return Object.assign({}, state,
        data(state, action)
      )
    default:
      return state
  }
}

function selectedCategory(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return Object.assign({}, state, {
          selectedCategory: action.category
        })
    case SET_INITIAL_CATEGORY:
      if(state['selectedCategory'] == null) {
        return Object.assign({}, state, {
            selectedCategory: action.category
          })
      } else {
        return state
      }
    default:
      return state
  }
}


function selectedPage(state = {
  selectedPage: "About"
}, action) {
  switch (action.type) {
    case SET_SELECTED_PAGE:
      return Object.assign({}, state, {
          selectedPage: action.page
        })
    default:
      return state
  }
}


const rootReducer = combineReducers({
  allData, selectedCategory, selectedPage
})

export default rootReducer
