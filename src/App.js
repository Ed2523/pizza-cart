import './styles/App.css';
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <div className="main-section">
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
