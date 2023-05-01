import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export default function App() {

  return <Routes>
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />}></Route>
      <Route path='contacts' element={<ContactsPage/>}></Route>
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='register' element={<RegisterPage />}></Route>
      <Route path='not-found' element={ <NotFound/>}></Route>
    </Route>
  </Routes>
}
