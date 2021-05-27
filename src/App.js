import './App.css';
import Item from './Item'

const App = props => (
  <div className='container m-auto p-10'>
      <div className="h-100 w-full flex items-center justify-center font-sans">
        <div className="bg-gray-800 text-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <Item/>
        </div>
      </div>
  </div>
)

export default App;
