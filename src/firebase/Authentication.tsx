import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from './firebase-config';
import { login, logout } from '../features/auth/authSlice';
import { RootState } from "../app/store";

export const AuthUI = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.currentUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(login({
                    uid,
                    email: email || "",
                    displayName: displayName || "",
                    photoURL: photoURL || ""
                }));
            } else {
                dispatch(logout());
            }
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch]);

    return (
        <div>
            {user ? (
                <Link to={`/profile/${user.uid}`}>My Profile</Link>
            ) : (
                <Link to="/login">Log In</Link>
            )}
        </div>
    );
}

export const SignOut = () => {
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.currentUser);
    const handleClick = () => auth.signOut();

    // useEffect(() => {
    //     navigate('/')
    // }, [])

    return (
        <div>
            {user && (
                <button onClick={handleClick} className="text-red-900 text-decoration underline">
                    Sign Out
                </button>
            )}
        </div>
    );
}
