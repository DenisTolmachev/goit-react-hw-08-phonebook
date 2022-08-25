import { SharedLayout } from 'layout/SharedLayout';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoaderSpinner } from 'components/common/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StartPage from 'pages/StartPage/StartPage';

//const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<StartPage/>} />
          </Route>
        </Routes>
      </Suspense>

      {/* <Contacts /> */}

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
