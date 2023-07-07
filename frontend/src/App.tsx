import { ArcElement, Chart as ChartJS } from 'chart.js';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { HomePage } from './pages/Home';

ChartJS.register(ArcElement);

function App() {
  return (
    <>
      <Header />
      <Menu />
      <HomePage />
    </>
  );
}

export default App;