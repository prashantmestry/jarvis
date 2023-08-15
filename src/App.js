import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { AppContextProvider } from './AppContext';

function App() {
  return (
    <div className="App">
      <div>
       Navigation will come here
      </div>
      <AppContextProvider>
      <Home />
    </AppContextProvider>
    </div>
  );
}

export default App;
