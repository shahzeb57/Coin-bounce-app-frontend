import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import styles from "./App.module.css";
import Protected from "./components/proctector/protected";
import Error from "./pages/Error/error";
import Login from './pages/Login/Login'
import { useSelector } from "react-redux";
import Signup from "./pages/Signup/Signup";
import Crypto from "./pages/Crypto/crypto";
import Blog from "./pages/Blogs/Blog";
import SubmitBlog from "./pages/SubmitBlog/SubmitBlog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";
import useAutoLogin from "./hooks/useAutoLogin";

import Loader from "./components/loader/loader";
function App() {
  const isAuth=useSelector((state)=> state.user.auth);
  const loading = useAutoLogin();

  return loading ? (
    <Loader der text="..." /> 
  ) : (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Navbar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />

            {/*  crypto page************************** */}
            <Route
              path="crypto"
              exact
              element={<div className={styles.main}><Crypto /></div>}
            />

            {/*  blogs page************************** */}
            <Route
              path="blogs"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>
                    <Blog />
                  </div>
                </Protected>
              }
            />

            <Route
              path="blog/:id"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>
                    <BlogDetails />
                  </div>
                </Protected>
              }
            />

            <Route
              path="blog-update/:id"
              exact
              element={
                <Protected isAuth={isAuth}>
                  <div className={styles.main}>
                    <UpdateBlog />
                  </div>
                </Protected>
              }
            />

            {/*  submit page************************** */}
            <Route
              path="submit"
              exact
              element={
                <Protected isAuth={isAuth}>
              <div className={styles.main}><SubmitBlog /></div>
              </Protected>
              }
            />

            {/* signup  page************************** */}
            <Route
              path="signup"
              exact
              element={
                
              <div className={styles.main}><Signup /></div>
          
              }
            />

            {/* login  page************************** */}
            <Route
              path="login"
              exact
              element={
                
              <div className={styles.main}><Login /></div>
             
              }
            />
 
{/* error page  */}

             <Route
              path="*"
        
              element={
                
              <div className={styles.main}><Error /></div>
             
              }
            />


            
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
