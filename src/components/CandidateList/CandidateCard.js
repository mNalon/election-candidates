import './CandidateCard.css'

import Card from 'react-bootstrap/Card'

const CandidateCard = ({ candidate }) => {
  const { name, img, party, number } = candidate

  return (
    <Card className="text-center Candidate-Card">
      <Card.Img className='Candidate-Avatar' src={ img } />
      <Card.Body>
        <Card.Title>{ name }</Card.Title>
        <Card.Text>
          <span className='Candidate-Card-Info'>{ party }</span> 
          <span className='Candidate-Card-Info'>{ number }</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export { CandidateCard }