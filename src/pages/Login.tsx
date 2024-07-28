import React, { useEffect } from 'react';
import { loginBg } from "../assets";
import { auth } from '../firebase/firebase-config';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const uiConfig = {
            signInOptions: [
                {
                    provider: EmailAuthProvider.PROVIDER_ID,
                },
                {
                    provider: GoogleAuthProvider.PROVIDER_ID,
                    clientId:
                        "853512018584-lef5pad6v5puihn08a54is1g6kh3c77a.apps.googleusercontent.com",
                },
            ],
            callbacks: {
                signInSuccessWithAuthResult: () => {
                    navigate(-1);
                    return false
                },
            },
        };

        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
        ui.start('#firebaseui-auth-container', uiConfig);

    }, []);

    return (
        <div className="my-10 flex h-screen">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white bg-opacity-50 shadow-lg">
                <h1 className="text-3xl font-bold mb-8">Welcome back!</h1>
                <div className="w-full max-w-xs">
                    <div id="firebaseui-auth-container"></div>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2 object-contain">
                <img src={loginBg} alt="Log in background" className="h-full" />
            </div>
        </div>
    );
};

export default Login
