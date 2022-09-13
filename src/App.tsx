import { ApolloProvider } from '@apollo/client';
import { client } from './service/apolloClient';
import { Home } from "./pages/home";
import { ModalProvider } from './contexts/modalContext';

function App() {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Home />
      </ModalProvider>
    </ApolloProvider>
  );
}

export default App;