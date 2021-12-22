import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Journal from './pages/Journal/Journal';
import SleepTracker from './pages/SleepTracker/SleepTracker';
import MealTracker from './pages/MealTracker/MealTracker';
import TodoList from './pages/TodoList/TodoList';
import JournalDashboard from './pages/JournalDashboard/JournalDashboard';
import { Routes, Route, useLocation } from 'react-router-dom';
import CreateJournal from './pages/CreateJournal/CreateJournal';
import JournalDescription from './pages/JournalDescription/JournalDescription';

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <Header props={location.pathname} />
      {location.pathname === '/' || location.pathname === '/create' ? null : <NavBar />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/journal" element={<Journal />} />
        <Route exact path="/sleep-tracker" element={<SleepTracker />} />
        <Route exact path="/meal-tracker" element={<MealTracker />} />
        <Route exact path="/todos" element={<TodoList />} />
        <Route exact path="/journaldashboard" element={<JournalDashboard />} />
        <Route exact path="/create" element={<CreateJournal />} />
        <Route exact path="/journaldetails" element={<JournalDescription />} />
      </Routes>
    </div>
  );
}

export default App;
