import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Helmet } from "react-helmet";

import { Fragment, useState } from "react";

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CandidateList } from './components/CandidateList'
import { CandidateDetails } from './components/CandidateDetails'
import { generateAssetURI } from './utils';

const { title, relatedTSEUrl: sourceUrl, candidates } = window.setup

const builtCandidates = candidates.map((candidate) => ({
  ...candidate,
  img: generateAssetURI(candidate.img)
}))

function App() {
  const [selectedCandidate, selectCandidate] = useState(null)

  const backHome = () => selectCandidate(null)

  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header onClick={backHome} title={title} />
      {selectedCandidate
        ? <CandidateDetails handleBack={backHome} candidate={selectedCandidate} />
        : <CandidateList candidates={builtCandidates} handleCandidateSelection={selectCandidate} />
      }
      <Footer sourceUrl={sourceUrl} />
    </Fragment>
  );
}

export default App;
