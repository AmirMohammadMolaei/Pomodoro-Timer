import { Provider } from "react-redux";
import MainLayout from "../components/layouts/MainLayout";
import App from "./App";
import { store } from "../redux/store";

const ProviderApp = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        <App />
      </MainLayout>
    </Provider>
  );
};

export default ProviderApp;
