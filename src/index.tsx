import { createRoot } from 'react-dom/client';
import { GlobalRouter } from './router/AppModernRouter';

createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalRouter />,
);
