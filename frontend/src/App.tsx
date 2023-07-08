import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { HomePage } from './pages/Home';

ChartJS.register(ArcElement, Tooltip);

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