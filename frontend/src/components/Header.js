import React from "react";
import logoPath from "../images/logo.svg";
import { Routes, Route, useNavigate, Link} from "react-router-dom";

function Header({email}) {
  const navigate = useNavigate()
  function onSignOut(){
    localStorage.removeItem('jwt')
    navigate("/sign-in")
  }
  return (
    <header className="header">
      <img className="logo" src={logoPath} alt="логотип" />
<div className="header__wrap">
      <Routes>
        <Route path="/sign-in" element={<Link className="header__text" to ="/sign-up">Регистрация</Link>}/>
        <Route path="/sign-up" element={<Link className="header__text" to ="/sign-in">Войти</Link>}/>
        <Route path="/" element={
        <>
        <span className="header__text">{email}</span>
        <button className="header__button" onClick={onSignOut}>Выйти</button>
        </>
        }
        />
      </Routes>
      </div>
    </header>
  );
}

export default Header;
