import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { useDispatch } from 'react-redux';

function App() {
const dispatch = useDispatch()
  

  return (
    <div className="App">
      <AddTodo/>
      <ListTodo/>
    </div>
  );
}

export default App;
