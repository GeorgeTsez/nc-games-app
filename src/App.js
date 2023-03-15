import './App.css';
import { Route , Routes} from 'react-router-dom';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reviews" element={<Reviews/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
