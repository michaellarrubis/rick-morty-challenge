import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { store } from "./store/index.ts"
import { Provider } from "react-redux"

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const host = import.meta.env.VITE_API_HOST;

const httpLink = createHttpLink({ uri: host });
const client = new ApolloClient({ cache: new InMemoryCache(), link: httpLink });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
