import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
//import Layout from './components/Home'
import  WelcomePage from './features/Welcome/WelcomePage';
import Login from './features/Auth/Login';
import Signup from './features/Auth/Signup';
import  ViewTargets from './features/Home/ViewTargets';
import SetTargets from './features/Home/SetTargets'

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

         {/*  WelcomePage */}
                <Route path='/' element={<WelcomePage/>} />
                <Route path='/login' element={!user ? <Login /> : <Navigate to="/home/view" />} />
                  <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/home/view"/>} />
          
         {/*  homepage */}
              <Route path='/home/view' element={user ? <ViewTargets />: <Navigate to="/login" />} />
              <Route path='/home/set' element={user ? <SetTargets /> : <Navigate to="/login" />} />
         
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
