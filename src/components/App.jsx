import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout';
import NotFound from 'pages/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/selectors';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())  
  },[dispatch])

  return isRefreshing ? 'Refreshing' : (<Routes>
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />}></Route>
      <Route path='/contacts' element={<PrivateRoute component={ContactsPage } redirectTo='/login' />}></Route>
      <Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo='/contacts'/>}></Route>
      <Route path='/register' element={<RestrictedRoute component={RegisterPage} redirectTo='/contacts'/>}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Route>
  </Routes>)
}
