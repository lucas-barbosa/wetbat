import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ArcElement, CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { ToastContainer } from 'react-toastify';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { HomePage } from './pages/Home';
import { queryClient } from './services/queryClient';

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, LineElement, PointElement);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Menu />
      <HomePage />
      <ToastContainer position="bottom-center" />
    </QueryClientProvider>
  );
}

export default App;