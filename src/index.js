import React from 'react';
import ReactDOM from 'react-dom/client';
import BaiTapHomeLayout from './components/BaiTapHomeLayout/BaiTapHomeLayout';
import Header from './components/Header';
import Product from './components/Product';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './State/DemoState';
//nhúng css
import './assets/css/style.css';
import RenderList from './RenderList/RenderList';
import ExRenderFilms from './RenderList/ExRenderFilms';
import DemoProps from './Props/DemoProps/DemoProps';
import ShoesApp from './Props/ShoesApp/ShoesApp';
import BaiTapXemChiTiet from './State/BaiTapXemChiTiet/BaiTapXemChiTiet';
import ExerciseCarStore from './Props/ExerciseCarStore/ExerciseCarStore';
import DemoChildrenProps from './Props/DemoChidrenProps/DemoChildrenProps';
//setup react router dom
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HomeTemplate from './templates/HomeTemplate';
import BaiTapGioHang from './pages/BaiTapGioHang/BaiTapGioHang';
import Page404 from './pages/Page404/Page404';
import FormCreateProduct from './pages/Form/FormCreateProduct';
import Lifecycle from './pages/Lifecycle/Lifecycle';
import Store from './pages/StoreAPI/Store';
//setup redux store
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import ReduxDemo from './pages/ReduxDemo/ReduxDemo';
import BaiTapGameXucXac from './pages/BaiTapGameXucXac/BaiTapGameXucXac';
import BTForm from './BTForm-validation/BTForm';



const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* localhost:3000 */}
          <Route path='' element={<HomeTemplate />}>
            <Route index element={<Home />} />
            {/* localhost:3000/home */}
            <Route path='home' element={<Home />} />
            {/* localhost:3000/login */}
            <Route path='login' element={<Login />} />
            {/* localhost:3000/register */}
            <Route path='register' element={<Register />} />
            {/* localhost:3000/excarstore */}
            <Route path='excarstore' element={<ExerciseCarStore />} />
            <Route path='btgiohang' element={<BaiTapGioHang />} />
            <Route path='page404' element={<Page404 />} />
            <Route path='form' element={<FormCreateProduct />} />
            <Route path="lifecycle" element={<Lifecycle />} />
            <Route path="store" element={<Store />} />
            <Route path='reduxdemo' element={<ReduxDemo />} ></Route>
            <Route path='bt-game' element={<BaiTapGameXucXac />} ></Route>
            <Route path='bt-form' element={<BTForm />} ></Route>
            {/* <Route path='*' element={<Navigate to="/page404" />} /> */}
            <Route path='*' element={<Navigate to="/" />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
)