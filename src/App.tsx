import { RouterProvider } from 'react-router'
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import router from './router'
import { Toaster } from 'react-hot-toast';
import { setRouter } from '@/core/http-servise';
import './index.css'


//  setup react query
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
        {/* react query provider*/}
      <QueryClientProvider client={client}>
        {/*  toast config */}
          <Toaster
            position="top-center"
            reverseOrder={true}
            toastOptions={{ duration: 4000, style: { direction: 'rtl', fontSize: '.9rem' } }}
          />
          {/* routing Project */}
        <RouterProvider router={router} />
        {/* react query dev tool */}
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </>
  )
}

export default App
