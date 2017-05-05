var firebase = require('firebase');


  export function initializeDatabase() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDTHEvIGMJw0zuJT_m_TjUvxOYuomznSp0",
      authDomain: "cocoguide-a5938.firebaseapp.com",
      databaseURL: "https://cocoguide-a5938.firebaseio.com",
      projectId: "cocoguide-a5938",
      storageBucket: "cocoguide-a5938.appspot.com",
      messagingSenderId: "287153470147"
    };

    firebase.initializeApp(config);
  }


  export function getGuidelinesForCategory(data, selectedCategory) {
    var guidelines = data['guidelines']
    var guidelineKeys = data['categories'][selectedCategory]
    var comments = data['comments']
    return Object.keys(guidelineKeys).map(function(key) {
      var guideline = guidelines[key]
      var commentsForGuideline = comments[guideline['number']]

      var commentsArray = Object.keys(commentsForGuideline).map(function(key) {
        return commentsForGuideline[key]
      })

      guideline['comments']= commentsArray



      return guideline
    })

  }


export function addNewComment(guidelineKey, author, text) {
  // A comment entry.
  var commentData = {
    author: author,
    text: text,
    date: (new Date).getTime()
  };

  // Get a key for a new comment.
  var newCommentKey = firebase.database().ref().child('comments/' + guidelineKey).push().key;

  var updates = {};
  updates['/comments/' + guidelineKey + "/" + newCommentKey] = commentData;

  return firebase.database().ref().update(updates);
}


export function changeVotes(guidelineKey, votes) {

  var updates = {};
  updates['/guidelines/' + guidelineKey + "/" + 'votes'] = votes;

  return firebase.database().ref().update(updates);
}
