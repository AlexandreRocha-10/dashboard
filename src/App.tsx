import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewExpense from './pages/NewExpense';


function App() {
  const loginRoutes = ['/', '/login'];
  
  return (
    <Routes>
      {loginRoutes.map((path) => (
        <Route key={path} path={path} element={<Login />} />
      ))}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/newexpense" element={<NewExpense />} />
    </Routes>
  )
}

export default App;
