import 'react-toastify/dist/ReactToastify.css';
import { ArcElement, CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { ToastContainer } from 'react-toastify';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { HomePage } from './pages/Home';

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, LineElement, PointElement);

function App() {
  return (
    <>
      <Header />
      <Menu />
      <HomePage />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;