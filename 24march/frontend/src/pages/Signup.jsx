import { useState } from 'react'
import axios from 'axios'

function Signup({ onGoHome, onGoLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')

 const handleSubmit = async (event) => {
  event.preventDefault()
  try {
    const response = await axios.post("http://localhost:3000/api/auth/register", {
      email,
      password
    },{
        withCredentials:true
    })
    console.log(response.data)
    setMessage('Signup successful')
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setShowPassword(false)

   
  } catch (error) {
    setMessage("Error registering user")
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
            <p className="eyebrow">Signup</p>
            <h1>Create account</h1>
            <p>Register your account using this UI. Backend API is not connected here.</p>
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
                  placeholder="Create password"
                  autoComplete="new-password"
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
            <button type="submit" className="primary-btn full-width"
            onClick={handleSubmit}
            >
              Create account
            </button>

            {message ? <p className="status-text">{message}</p> : null}

            <p className="switch-text">
              Already have account?{' '}
              <button type="button" className="text-link" onClick={onGoLogin}>
                Go to login
              </button>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Signup
