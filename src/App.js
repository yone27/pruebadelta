import {AppRouter} from './AppRouter';
import EntriesProvider from './context/EntriesProvider';

function App() {
	return (
		<EntriesProvider>
			<AppRouter />
		</EntriesProvider>
	);
}

export default App;
