import store from "@/redux/store";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { purple } from "@ant-design/colors";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
