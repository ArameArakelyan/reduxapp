import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Search from './pages/SearchPage/page';
import Likes from './pages/Likes/page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Search />} />
          <Route path='/likes' element={<Likes/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
