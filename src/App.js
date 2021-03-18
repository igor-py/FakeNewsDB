import React from "react";
import Header from './components/Header';
import Form from './components/Form';

function App() {
	const name = 'Igor';
	
	return (
		<div>
			<Header />

			<section className="my-0.5 mx-2 self-center">
				<Form/>
			</section>
		</div>
	);
}

export default App;
