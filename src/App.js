import './App.css';
import logo from './images/full_logo.png';
import spreadable from './images/spreadable_image.jpg';

function App() {
	return (
		<div className="App">
      <img src={logo} alt="Cupeesh Logo" id="logo" />
      <hr className='line'/>
			<div id="lower_section">
				<p id="blurb">
					The team at Cupeesh is currently taking a step back to reevaluate how
					we sell and produce our products. <br />
					<br />
					Thank you for all your support over the last few years! <br />
					<br />
					We hope to be back soon, so stay tuned for updates or join our{' '}
					<a href="https://airtable.com/shrIgxUlW9sNXQ8rp">mailing list</a> to
					be the first to know when we are back!
				</p>
				<img src={spreadable} alt="Cupeesh Jar" id="spreadable" />
			</div>
		</div>
	);
}

export default App;
