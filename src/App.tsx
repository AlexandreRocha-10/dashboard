import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  const loginRoutes = ['/', '/login'];
  
  return (
    <Routes>
      {loginRoutes.map((path) => (
        <Route key={path} path={path} element={<Login />} />
      ))}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App;
