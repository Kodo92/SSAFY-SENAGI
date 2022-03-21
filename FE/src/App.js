import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { Global } from '@emotion/react';

import Home from './components/pages/Home';
import NavBar from './components/UI/organisms/NavBar';
import Welcome from './components/pages/OnBoarding/Welcome';
import MyPage from './components/pages/MyPage';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import commonStyles from './styles/commonStyles';

export default function App() {
  return (
    <div>
      <Global styles={commonStyles} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="nav" element={<NavBar />}>
          <Route path="home" element={<Home />} />
          <Route path="mypage" element={<MyPage />} />

          {/* 404 Not Found*/}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

// 404 Not Found
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
