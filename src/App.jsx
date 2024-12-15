import productData from './data/full-products';
import { Route, Routes} from 'react=router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import Singleview from './components/Singleview';
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<singleView data={productData} />} />
        </Routes>

    </div>
  );
}

export default App;
