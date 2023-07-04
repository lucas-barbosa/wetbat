import { FastForward } from '@phosphor-icons/react';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

function App() {
  return (
    <>
      <Header />
      <Menu />
      
      <section className="mx-auto max-w-sm">
        <Card
          icon={<FastForward />}
          title="Quick Quote">
          Teste
        </Card>
      </section>
    </>
  );
}

export default App;