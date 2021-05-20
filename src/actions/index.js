import _ from 'lodash';
import JsonPlaceholder from '../apis/JsonPlaceholder';

export const fetchPostsAndUsers=()=>async (dispatch,getState)=>{
  console.log('Above Fetched posts');
  await dispatch(fetchPosts());
  const userIds =_.uniq(_.map(getState().posts,'userId'));
   userIds.forEach(id=>dispatch(fetchUser(id)));
 // console.log('Fetched posts',userIds); 
};
export const fetchPosts=()=>
     async function(dispatch){
  const response = await JsonPlaceholder.get('/posts');
  dispatch({type:'FETCH_POSTS',payload:response.data});
};

// export const fetchUser=id=>dispatch=>{
//     _fetchUser(id,dispatch);
//   }
//   const _fetchUser =_.memoize(async(id,dispatch)=>{
//     const response = await JsonPlaceholder.get('/users/'+id);
//     dispatch({type:'FETCH_USER',payload:response.data});
//   });


  export const fetchUser=id=>async dispatch=>{
 
    const response = await JsonPlaceholder.get('/users/'+id);
    dispatch({type:'FETCH_USER',payload:response.data});
  };




// export const fetchUser=function(id){
// return _.memoize(async function(dispatch){
//   const response = await JsonPlaceholder.get('/users/'+id);
//   dispatch({type:'FETCH_USER',payload:response.data});
// });
// };