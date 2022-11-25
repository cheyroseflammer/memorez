// Our posts is going to be an array which is why we intialized state to be an empty array
// State is renamed to "posts" since we are in the posts reducer
/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (posts = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
};
