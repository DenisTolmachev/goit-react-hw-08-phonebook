import { SharedLayout } from 'layout/SharedLayout';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoaderSpinner } from 'components/common/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import StartPage from 'pages/StartPage/StartPage';


const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const Home = lazy(() => import('pages/Home/Home'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'))

export const App = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home/>} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='contacts' element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>

      {/* <ContactsPage /> */}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
