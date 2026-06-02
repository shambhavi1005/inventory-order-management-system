
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Producers from './pages/Producers';
import Sales from './pages/Sales';
import Stock from './pages/Stock';
import Prices from './pages/Prices';

export default function App(){
return <BrowserRouter><Layout><Routes>
<Route path='/' element={<Dashboard/>}/>
<Route path='/products' element={<Products/>}/>
<Route path='/categories' element={<Categories/>}/>
<Route path='/producers' element={<Producers/>}/>
<Route path='/sales' element={<Sales/>}/>
<Route path='/stock' element={<Stock/>}/>
<Route path='/prices' element={<Prices/>}/>
</Routes></Layout></BrowserRouter>
}
