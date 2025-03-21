import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { login} from "../services/auth";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { login } from "../store/authSlice";
//import { useState } from "react";

export default function LoginPage(){
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector((state) => state.auth.isAuth)

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const navigate = useNavigate();

    function handleSubmit(e: React.FocusEvent<HTMLFormElement>){
        e.preventDefault();
        if(username === "admin" && password === "admin"){
            localStorage.setItem("token", "mytoken")
            dispatch(login("mytoken"))
            //login();
            navigate("/private")
        } else{
            alert("Неправильный логин или пароль")
        }
    }



    return(
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Логин</span>
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required                    
                    >                                        
                    </input>
                </label>
                <label>
                    <span>Пароль</span>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required                    
                    >                                        
                    </input>
                </label>
                <button type="submit">
                    Войти
                </button>
            </form>
        </div>
    )
}