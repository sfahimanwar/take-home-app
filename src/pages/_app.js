import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const theme = createTheme({
  fontFamily: 'Helvetica Now, sans-serif',
  colors: {
    // Define a custom color palette
    'light-blue': ['#e0f2fe', '#bae6fd', '#7dd3fc', '#38bdf8', '#0ea5e9', '#0284c7', '#0369a1', '#075985', '#0c4a6e', '#0a3a5e'],
  },
  primaryColor: 'light-blue',
  other: {
    backgroundColor: '#e0f7fa' // Light blue background
  }

});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        {pageProps.isLoading ? (
          <Center style={{ height: '150vh', width: '150vw', position: 'fixed', top: 0, left: 0 }}>
            <Loader />
          </Center>
        ) : (
          <Component {...pageProps} />
        )}
      </MantineProvider>
    </QueryClientProvider>
  );
}
