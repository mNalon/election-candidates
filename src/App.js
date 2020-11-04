import { Helmet } from "react-helmet";

import { Fragment } from "react";

import { Header } from './components/Header'

function App() {
  const { title } = window.setup

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} />
    </Fragment>
  );
}

export default App;
