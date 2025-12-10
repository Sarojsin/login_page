import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './index.css';

function App() {
  const [activeForm, setActiveForm] = useState('signin');

  return (
    <div className="app-container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={`toggle-btn ${activeForm === 'signin' ? 'active' : ''}`}
            onClick={() => setActiveForm('signin')}
          >
            Sign In
          </button>
          <button
            className={`toggle-btn ${activeForm === 'signup' ? 'active' : ''}`}
            onClick={() => setActiveForm('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeForm === 'signin' ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}

export default App;
