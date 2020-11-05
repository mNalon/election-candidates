import CardColumns from 'react-bootstrap/CardColumns'

import { CandidateCard } from './CandidateCard'

const CandidateList = ({ candidates, handleCandidateSelection }) => (
  <CardColumns>
    {candidates.map(
      (candidate) => 
        <div onClick={() => handleCandidateSelection(candidate)}>
          <CandidateCard 
            key={candidate.name} 
            candidate={candidate}         
          />
        </div>
    )}
  </CardColumns>
)

export { CandidateList }