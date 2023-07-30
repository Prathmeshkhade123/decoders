
import './App.css';
import Card from './Component/Cards/Card';
import Feature from './Component/Features/Feature';
import Navbar from './Component/Navbar/Navbar';
import Tab from './Component/Tabs/Tab';
import Task from './Component/Tasks/Task';
import Community from './Component/Community/Community';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Tab/>
      <Card/>
      <Task/>
      <Feature/>
      <Community/>
    </div>
  );
}

export default App;
