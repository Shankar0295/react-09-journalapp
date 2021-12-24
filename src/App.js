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
import SignUp from './components/SignUp/SignUp'
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  let location = useLocation();
  if (location.pathname === '/') {
    sessionStorage.clear()
  }
  return (
    <div className="App">
      <Header props={location.pathname} />
      {location.pathname === '/' || location.pathname === '/create' || location.pathname === '/signup' ? null : <NavBar />}
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/journal" element={<ProtectedRoute>
            <Journal />
          </ProtectedRoute>} />
          <Route exact path="/sleep-tracker" element={<ProtectedRoute>
            <SleepTracker />
          </ProtectedRoute>} />
          <Route exact path="/meal-tracker" element={<ProtectedRoute>
            <MealTracker />
          </ProtectedRoute>} />
          <Route exact path="/todos" element={<ProtectedRoute>
            <TodoList />
          </ProtectedRoute>} />
          <Route exact path="/journaldashboard" element={<ProtectedRoute>
            <JournalDashboard />
          </ProtectedRoute>} />
          <Route exact path="/create" element={<ProtectedRoute>
            <CreateJournal />
          </ProtectedRoute>} />
          <Route exact path="/journaldetails" element={<ProtectedRoute>
            <JournalDescription />
          </ProtectedRoute>} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
