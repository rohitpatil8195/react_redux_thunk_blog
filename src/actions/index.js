import JsonPlaceholder from '../apis/JsonPlaceholder';
export const fetchPosts=()=>
     async function(dispatch){
  const response = await JsonPlaceholder.get('./posts');
  dispatch({type:'FETCH_POSTS',payload:response})
};
