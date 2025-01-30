//When user is logged in, we want to redirect them to the store page
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //set up context for authentication so that we can see and tell which user is present in the firebase 
  // const [email, setEmail] = useState('sam@gmail.com');
  // const [password, setPassword] = useState('123456789');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwU5zxtzpVyUmBs3_cIVt7rlHwM-mARzc',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        const errorMessage =
          data.error?.message || 'Authentication failed. Please try again.';
        throw new Error(errorMessage);
      }

      // Saved token and email in context and local storage
      authCtx.login(data.idToken, data.email);

      // Redirected to store page
      navigate('/store');
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;