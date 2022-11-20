// Our posts is going to be an array which is why we intialized state to be an empty array
// State is renamed to "posts" since we are in the posts reducer
export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return posts;
      break;
    default:
      return posts;
      break;
  }
};
