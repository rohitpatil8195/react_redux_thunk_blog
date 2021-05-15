import JsonPlaceholder from '../apis/JsonPlaceholder';
export const fetchPosts=()=>{
   const promise =  JsonPlaceholder.get('/posts')
    return {
        type:'FETCH_POSTS',
        payload:promise 
    };
}; 