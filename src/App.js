import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Helmet } from "react-helmet";

import { Fragment, useState } from "react";

import { Header } from './components/Header'
import { CandidateList } from './components/CandidateList'
import { CandidateDetails } from './components/CandidateDetails'

function App() {
  const { title, candidates } = window.setup

  const [selectedCandidate, selectCandidate] = useState(null)

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header title={title} />
      <div className='App-Body'>
        {selectedCandidate
          ? <CandidateDetails handleBack={() => selectCandidate(null)} candidate={selectedCandidate} />
          : <CandidateList candidates={candidates} handleCandidateSelection={selectCandidate} />
        }
      </div>
    </Fragment>
  );
}

export default App;
