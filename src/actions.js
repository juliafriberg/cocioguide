var firebase = require('firebase');

/*
 * action types
 */

export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'
export const SET_INITIAL_CATEGORY = 'SET_INITIAL_CATEGORY'

/*
 * action creators
 */
function requestData() {
  return {type: REQUEST_DATA}
}

function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data: data,
    receivedAt: Date.now()
  }
}

export function setSelectedCategory(category) {
  return {
    type: SET_SELECTED_CATEGORY,
    category: category
  }
}

export function setInitialCategory(category) {
  console.log(category);
  return {
    type: SET_INITIAL_CATEGORY,
    category: category
  }
}

export function fetchData() {
  return function (dispatch) {
    dispatch(requestData())
    return firebase.database().ref().on('value', function(snapshot) {
        var data = snapshot.val()
        var category = Object.keys(data['categories'])[0]
        dispatch(setInitialCategory(category))
        dispatch(receiveData(data))


    })
  }
}
