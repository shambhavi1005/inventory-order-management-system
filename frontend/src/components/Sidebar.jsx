
import {Link} from 'react-router-dom';
export default function Sidebar(){
return <div className='sidebar bg-dark text-white p-3'>
<h4>Inventory</h4><hr/>
<Link className='d-block text-white mb-2' to='/'>Dashboard</Link>
<Link className='d-block text-white mb-2' to='/products'>Products</Link>
<Link className='d-block text-white mb-2' to='/categories'>Categories</Link>
<Link className='d-block text-white mb-2' to='/producers'>Producers</Link>
<Link className='d-block text-white mb-2' to='/sales'>Sales</Link>
<Link className='d-block text-white mb-2' to='/stock'>Stock</Link>
<Link className='d-block text-white' to='/prices'>Prices</Link>
</div>}
