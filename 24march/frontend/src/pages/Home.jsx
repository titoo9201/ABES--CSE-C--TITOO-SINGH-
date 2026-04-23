function Home({ onGoLogin, onGoSignup }) {
	return (
		<main className="home-shell">
			<section className="home-card">
				<div className="home-copy">
					<p className="eyebrow">Home</p>
					<h1>Basic Auth UI for checking the login and signup </h1>
					
					<div className="home-actions">
						<button type="button" className="primary-btn" onClick={onGoLogin}>
							Open Login
						</button>
						<button type="button" className="secondary-btn" onClick={onGoSignup}>
							Open Signup
						</button>
					</div>
				</div>

				
			</section>
		</main>
	)
}

export default Home
