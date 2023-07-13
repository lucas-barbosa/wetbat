import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { ArcElement, CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { ToastContainer } from 'react-toastify';
import { HomePage } from './pages/Home';
import { queryClient } from './services/queryClient';
import { Layout } from './components/Layout';

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, LineElement, PointElement);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
      <HomePage />
      <ToastContainer position="bottom-center" />
    </QueryClientProvider>
  );
}

export default App;