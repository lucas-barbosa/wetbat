import { logger } from 'src/infra/logger';
import { setupApp } from './config/app';

const app = setupApp();
const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  const message = `Server running at http://localhost:${port}`;
  logger.info(`${message} - ${new Date()}`);
  console.log(message);
});
