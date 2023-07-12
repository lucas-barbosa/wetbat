import { setupApp } from './config/app';

const app = setupApp();
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
