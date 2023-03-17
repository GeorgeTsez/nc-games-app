import './App.css';
import { Route , Routes} from 'react-router-dom';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview/>}></Route>
        <Route path="/reviews/:review_id/comments" element={<Comments/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
