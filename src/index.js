import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*
لو فى اى حاجة وقفة معايا اقدر اتفرج على الفديو الخاص للروتر
انا لسة حاططهم من موقع دول بخطهم اما بجى اعمل روتر 

https://reactrouter.com/en/main/start/tutorial

عموما هو معلم على الحجات الخضراء انا باخد الحجات الخضراء واحطها هنا

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

وبعدها 

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


وبعدها 

<RouterProvider router={router} />
بحطها فى 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

وبعد كدة
Home انت لو تاخد بالك انا عامل فى كل كلمة اول حرف كابيتل زاى 
import Home from './page/home';
import Html from './page/html';
import Css from './page/css';
import Javascript from './page/javascript';

*/ 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './page/home';
import Html from './page/html';
import Css from './page/css';
import Javascript from './page/javascript';

const router = createBrowserRouter([
  // اهى دى مش محتاجة ان انا اعملها مسار الصفحة الرئيسية
  // http://localhost:3001
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <Home/>,
    errorElement: <h1>sorry</h1>, // دا لو دخل على صفحة غلط يطلعلو الايرور دا
  },
// http://localhost:3001/html اهو المسار اهو 
  {
    path: "/html", // دا المسار انا كنت شارحو فى اللرافال
    // element: <div>Hello world!</div>,
    element: <Html/>,
  },

  {
    path: "/css",
    // element: <div>Hello world!</div>,
    element: <Css/>,
  },

  {
    path: "/javascript",
    // element: <div>Hello world!</div>,
    element: <Javascript/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
                          {/* انا المفروض همسح الى فوقى دى 
                            واحط دى بدلها
                            <RouterProvider router={router} />
                          */}

<RouterProvider router={router} />
  </React.StrictMode>
);

 
