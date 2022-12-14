import * as React from "react";
import PropTypes from "prop-types";
import PageProvider from "../helpers/PageProvider";
import "../styles/global.css";
import {store} from "../redux/store"
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PageProvider>
        <Component {...pageProps} />
      </PageProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
