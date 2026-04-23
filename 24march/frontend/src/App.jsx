import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
	const [view, setView] = useState('home')

	if (view === 'login') {
		return <Login onGoHome={() => setView('home')} onGoSignup={() => setView('signup')} />
	}

	if (view === 'signup') {
		return <Signup onGoHome={() => setView('home')} onGoLogin={() => setView('login')} />
	}

	return <Home onGoLogin={() => setView('login')} onGoSignup={() => setView('signup')} />
}

export default App
