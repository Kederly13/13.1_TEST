import AppContent from 'components/AppContent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';



const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
        <AppContent />
    </Provider>
    </BrowserRouter>
  );
}

export default App;
