import classes from './UserProfile.module.css';
import { useState } from 'react';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getActivePosts } from '../store/selectors';
import { counterActions } from '../store/counterSlice'

const UserProfile = (props) => {

  const activePosts = useSelector((state) => getActivePosts(state));
  const count = useSelector((state) => state.count.counter)
  const dispatch = useDispatch();
  // console.log(useDispatch((state)=>state.count.increment()))
  const increment = () => {
    dispatch(counterActions.increment())
  }
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <h1>Posts</h1>
      {activePosts.map((post) => {
        return <div key={post.id}
          style={{
            marginLeft: '0px',
            backgroundColor: 'beige',
            border: '1px solid black',
            marginBottom: '5px'
          }}>
          {post.title}
        </div>
      })}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => increment()}>Likes</button>
        <div style={{
          padding: '10px',
          fontSize: '20px',
          fontFamily: 'sans-serif',
          fontStyle: 'initial'
        }}> {count}
        </div>
      </div>
    </main>
  );
};

export default UserProfile;