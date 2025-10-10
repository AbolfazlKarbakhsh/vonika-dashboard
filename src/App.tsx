import { RouterProvider } from 'react-router'
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './router'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { setRouter } from '@/core/http-servise';


const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: true,
    }
  }
});

function App() {
 
  setRouter(router);
  
  return (
    <>
      <QueryClientProvider client={client}>
          <Toaster
            position="top-center"
            reverseOrder={true}
            toastOptions={{ duration: 4000, style: { direction: 'rtl', fontSize: '.9rem' } }}
          />
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
