import { useState } from 'react';
import './LoginStyle.css'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === '') {
      setError('Harap masukkan email');
    } else if (!emailRegex.test(email)) {
      setError('Harap masukkan email yang valid');
    } else if (password.trim() === '') {
      setError('Harap masukkan password');
    } else if (!/^[\w!@#$%^&*]{8,}$/.test(password)) {
      setError('Password harus memiliki minimal 8 karakter');
    } else {
      alert('Sukses! Anda berhasil login');
      setEmail('');
      setPassword('');
      setError('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2 className="login-heading">Form Login</h2>
        {error && <p className="login-error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="login-form-group">
            <label className="login-label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="login-form-group">
            <label className="login-label">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
