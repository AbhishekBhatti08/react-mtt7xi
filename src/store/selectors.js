import { createSelector } from 'reselect';

export const getPosts = (state) => state.auth.posts;
export const getFilter = (state) => state.auth.filter;

export const getPost = () =>
    createSelector([getPostById], 
        (post) => { return post});

export const getActivePosts = createSelector(
    [getPosts, getFilter],
    (posts, filter) => {
        switch (filter) {
            case 'SHOW_ACTIVE':
                return posts.filter((post) => post.isActive);
            case 'SHOW_INACTIVE':
                return posts.filter((post) => !post.isActive);
            default:
                return posts;
        }
    },
);