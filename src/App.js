import { Helmet } from "react-helmet";

import './App.css';
import { Fragment } from "react";

function App() {
  const { title } = window.setup

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="App">
        <header className="App-header">
          {title}
        </header>
      </div>
    </Fragment>
  );
}

export default App;
