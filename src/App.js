import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Journal from './pages/Journal/Journal';
import SleepTracker from './pages/SleepTracker/SleepTracker';
import MealTracker from './pages/MealTracker/MealTracker';
import TodoList from './pages/TodoList/TodoList';
// import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Header />
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/journal" element={<Journal />} />
        <Route exact path="/sleep-tracker" element={<SleepTracker />} />
        <Route exact path="/meal-tracker" element={<MealTracker />} />
        <Route exact path="/todos" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
