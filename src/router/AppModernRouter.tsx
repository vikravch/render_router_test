import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TabsPage } from '../pages/TabsPage';
import { PageNotFound } from '../pages/PageNotFound';
import { App } from '../App';
import { TabContentPage } from '../pages/TabContentPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'tabs',
        element: <TabsPage />,
        children: [
          {
            path: ':id',
            element: <TabContentPage />,
          },
        ],
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export const GlobalRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

// https://localhost:3000/index.html
// https://localhost:3000/tabs.html ???
// https://localhost:3000/* => https://localhost:3000/index.html

// https://localhost:3000/#/tabs?q=search_text
// https://localhost:3000?q=search_text#tabs

// https://example.com?userName=John&age=23
// https://example.com/John/23

// https://example.com/phones/samsung/2334-42342-34234
// https://example.com?category=phones&manufacturer=samsung&id=2334-42342-34234

// https://www.google.com/search?q=cat&sca_esv=d2b59b7238d5f6ec&sxsrf=AE3TifNU6EnM9hleKLBMvDnoI_0P6MOXYQ%3A1757402512198&source=hp&ei=kNW_aMzTCfaJ7NYP8LSMyA0&iflsig=AOw8s4IAAAAAaL_joNyFzRbiWNA_q8xVJ0tVK16gVQFI&ved=0ahUKEwjM29vDksuPAxX2BNsEHXAaA9kQ4dUDCBc&uact=5&oq=cat&gs_lp=Egdnd3Mtd2l6IgNjYXQyDRAjGPAFGIAEGCcYigUyBBAjGCcyChAjGIAEGCcYigUyBRAuGIAEMgUQLhiABDILEC4YgAQY0QMYxwEyBRAuGIAEMgUQLhiABDIFEAAYgAQyBRAAGIAESIANUABY_wNwAHgAkAEAmAHFAaABoQSqAQMwLjO4AQPIAQD4AQGYAgOgAq4EwgIMECMYgAQYExgnGIoFwgIKEAAYgAQYQxiKBcICEBAuGIAEGNEDGEMYxwEYigWYAwCSBwUwLjIuMaAHhyayBwUwLjIuMbgHrgTCBwUwLjEuMsgHCQ&sclient=gws-wiz
