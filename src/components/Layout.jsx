import { Suspense, useEffect } from "react";
import AppBar from "./AppBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Notify } from "notiflix";

export const Layout = () => {
  useEffect(() => {

    Notify.init({
      fontSize: '16px',
      timeout: 3000,
      clickToClose: true,
      pauseOnHover: false,
      failure: {
        background: '#F8CECE',
        textColor: '#A03729',
        notiflixIconColor: '#A03729',
      }
    });
  
  }, []);

  return (<>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', minHeight: '90vh', color:'#36454F'}}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
    <Footer />
    </>
  );
};
