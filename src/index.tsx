import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import { checkAuthAction, fetchFavoritesAction } from './store/api-actions';
import { ErrorMessage } from './components/error-message';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());
store.dispatch(fetchFavoritesAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ErrorMessage />
    </Provider>
  </React.StrictMode>
);
