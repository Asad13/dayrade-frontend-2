import UserProvider from './contexts/UserContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utilities/queryClient';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';

const Provider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </UserProvider>
    </ReduxProvider>
  );
};

export default Provider;
