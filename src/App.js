import './App.css';
//  before add home.js , we do here header and maincomponent code with import 
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Home';
import DashboardPage from './Pages/Dashboard'; 
import CoinPage from './Pages/Coinpage';
import WatchList from './Pages/Watchlistpage'; 
import ComparePage from './Pages/Comparepage';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/dashboard" element={<DashboardPage/>}/>
     <Route path="/coin/:id" element={<CoinPage/>}/>
     
     { /* <Route path="compare" element={<ComparePage/>}/> 
  <Route path="watchlist" element={<WatchList/>}/> */}

     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
