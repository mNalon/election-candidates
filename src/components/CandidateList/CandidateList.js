import CardColumns from 'react-bootstrap/CardColumns'

import { CandidateCard } from './CandidateCard'

const CandidateList = ({ candidates, handleCandidateSelection }) => (
  <div className='body-container'>
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
  </div>
)

export { CandidateList }