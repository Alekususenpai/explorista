import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../firebase/firebase-config';
import { login, logout, setLoading } from '../features/auth/authSlice';
import { addUser } from '../features/users/userSlice';
import { RootState } from '../app/store';
import { User } from '../types/user';

export const AuthUI = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state: RootState) => state.auth.currentUserId);
  const currentUser = useSelector((state: RootState) => state.user.byId[currentUserId || '']);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch(setLoading(true));
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        const userData: User = {
          uid,
          email: email || "",
          displayName: displayName || "",
          photoURL: photoURL || "",
          bio: "No bio yet",
          isHost: false,
          eventsHosted: [],
          eventsAttending: [],
        };
        dispatch(addUser(userData));
        dispatch(login(uid));
      } else {
        dispatch(logout());
      }
      dispatch(setLoading(false));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      {currentUser ? (
        <Link to={`/profile/${currentUser.uid}`}>My Profile</Link>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </div>
  );
};

export const SignOut = () => {
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.auth.currentUserId);
  const handleClick = () => {
    auth.signOut();
    navigate('/')
  }

  return (
    <div>
      {user && (
        <button onClick={handleClick} className="text-red-900 text-decoration underline">
          Sign Out
        </button>
      )}
    </div>
  );
};
