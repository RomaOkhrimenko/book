import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { horror } from "./features/genrePage/horror";
import { auth } from "./firebase/firebase";
import { useTypesSelector } from "./hooks/useTypesSelector";
import AuthorPage from "./page/AuthorPage/AuthorPage";
import BookPage from "./page/BookPage/BookPage";
import HomePage from "./page/HomePage/HomePage";
import GenresPage from "./page/GenrePage/GenrePage";
import LoginPage from "./page/LoginPage/LoginPage";
import { loginUser, logoutUser } from "./state/actions/userAction";
import ProfilePage from "./page/ProfilePage/ProfilePage";
import { fantastik } from "./features/genrePage/fantastika";
import { roman } from "./features/genrePage/roman";
import Bestseller from "./page/Bestseller/Bestseller";
import { detective } from "./features/genrePage/detective";

function App() {
  const [navbarPhone, setNavbarPhone] = useState(false)
  const dispatch = useDispatch();

  const { user } = useTypesSelector((state) => state.user);
  
  const navPhone = () => setNavbarPhone(prev => !prev)
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth: any) => {
      if (userAuth) {
        dispatch(
          loginUser({
            uid: userAuth.uid,
            email: userAuth.email,
            name: userAuth.displayName
          })
        );
        
        
      } else {
        dispatch(logoutUser);
      }
    })

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar navPhone={navPhone} navbarPhone={navbarPhone} />
        <div className="content">
          <div className="content-container">
            
            {!user ? <Header /> : <Header title={user.name} navPhone={navPhone} />}
            {!user ? (
              <LoginPage />
            ) : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="/author" element={<AuthorPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                {/* Genres */}
                <Route
                  path="/horror"
                  element={<GenresPage title="Ужасы Мистика" data={horror} />}
                />
                <Route
                  path="/fantasy"
                  element={<GenresPage title="Фантастика, фэнтези" data={fantastik} />}
                />
                <Route
                  path="/roman"
                  element={<GenresPage title="Романы" data={roman} />}
                />
                <Route
                  path="/bestseller"
                  element={<Bestseller />}
                />
                <Route
                  path="/detective"
                  element={<GenresPage title="Романы" data={detective} />}
                />

              </Routes>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
