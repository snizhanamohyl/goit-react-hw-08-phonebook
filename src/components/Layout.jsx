import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export const Layout = () => {
  return (<>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', minHeight: '90vh'}}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </div>
    <Footer />
    </>
  );
};
