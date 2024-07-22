import Board from "./components/Board";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App bg-primary h-[100vh] flex justify-center items-center flex-col">
			<Board />
			<Footer />
		</div>
	);
}

export default App;
