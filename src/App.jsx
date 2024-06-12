import { BrowserRouter as Router } from 'react-router-dom';
import TaskManager from './components/TaskManager'

const App = () => {
  return (
    <div>
      <Router>
        <TaskManager />
      </Router>
    </div>
  );
}

export default App
