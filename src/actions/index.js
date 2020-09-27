import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return function() {
        const promise = jsonPlaceholder.get('/posts');

        return {
            type: 'FETCH_POSTS',
            payload: response
        };
    };
};