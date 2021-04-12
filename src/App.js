import ChartDailies from './components/ChartDailies/ChartDailies';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <ChartDailies />
      </main>
    </div>
  );
}

export default App;
