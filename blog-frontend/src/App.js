import './App.css';
import { Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import RegisterPage from './pages/RegisterPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
    <Helmet>
      <title>REACTERS</title>
    </Helmet>
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;