import { useState } from 'react'
import axios from 'axios'
function Login({ onGoHome, onGoSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit =  async(event) => {
    event.preventDefault()
  try{
    const response =  await axios.post("http://localhost:3000/api/auth/login", {
      email,
      password
    },{
        withCredentials:true
    })
    console.log(response.data)
    alert("Login successful")

    setMessage('Login successful')
    setEmail('')
    setPassword('')
    setRememberMe(false)
    setShowPassword(false)
  }catch(error){
    console.error(error)

  }
 
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <button type="button" className="back-link" onClick={onGoHome}>
          Back to home
        </button>

        <div className="auth-layout">
          <div className="auth-copy">
            <p className="eyebrow">Login</p>
            <h1>Welcome back</h1>
            <p>Use your credentials to sign in. This page contains no backend logic.</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="field-group">
              <span>Email address</span>
              <input
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>

            <label className="field-group">
              <span>Password</span>
              <div className="password-row">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </label>

            <div className="form-row">
              <label className="checkbox-field">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button type="button" className="text-link">
                Forgot password?
              </button>
            </div>

            <button type="submit" className="primary-btn full-width">
              Sign in
            </button>

            {message ? <p className="status-text">{message}</p> : null}

            <p className="switch-text">
              New user?{' '}
              <button type="button" className="text-link" onClick={onGoSignup}>
                Go to signup
              </button>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Login
