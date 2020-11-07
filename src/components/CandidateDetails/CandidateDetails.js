import Media from 'react-bootstrap/Media'

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

import { BsChevronLeft, BsFileEarmarkText } from 'react-icons/bs'

import './CandidateDetails.css'

const CandidateInfo = ({ candidate }) => {
  const { 
    name, 
    fullName,
    number,
    party,
    vice,
    currentOcupation,
    educationLevel,
    birthMunicipality
  } = candidate

  return (
    <Table className='CandidateDetails-Table' borderless>
      <tbody>
        <tr>
          <td className='font-weight-bold'>Nome completo:</td>
          <td>{ fullName }</td>
        </tr>
        <tr>
          <td className='font-weight-bold'>Nome na urna:</td>
          <td>{ name }</td>
        </tr>
        <tr>
          <td className='font-weight-bold'>Número:</td>
          <td><Badge pill variant='warning'>{ number }</Badge></td>
        </tr>
        <tr>
          <td className='font-weight-bold'>Partido:</td>
          <td><Badge pill variant='warning'>{ party }</Badge></td>
        </tr>
        <tr>
          <td className='font-weight-bold'>Vice:</td>
          <td>{ vice }</td>
        </tr>
        <tr>
          <td className='font-weight-bold'>Ocupação:</td>
          <td>{ currentOcupation }</td>
        </tr>
        <tr>
          <td className='font-weight-bold'>Grau de instrução:</td>
          <td>{ educationLevel }</td>
        </tr>
        <tr>
          <td className='font-weight-bold'>Município de nascimento:</td>
          <td> { birthMunicipality } </td>
        </tr>
      </tbody>
    </Table>
  )
}

const CandidateDetails = ({ candidate, handleBack }) => {
  const { name, img, description, proposalLinks } = candidate

  return (
    <div className='body-container'>
      <Button className='vertical-gap-5' variant="secondary" onClick={handleBack}>
        <BsChevronLeft />
      </Button> 
      <div className='vertical-gap-5'>
        <Media>
          <img
            className="mr-3 img-avatar"
            src={img}
            alt={`Foto ${name}`}
          />
          <Media.Body>
            <h3 className='font-weight-bold'>{ name }</h3>
            <p>
              { description }
            </p>
            <h5 className='font-weight-bold text-warning'>PROPOSTAS</h5>
            <p> 
              {proposalLinks.map((proposalLink) => (
                <a href={ proposalLink } target='_blank' rel='noreferrer'>
                  <BsFileEarmarkText size={ 40 } />
                </a>
              ))}
            </p>
          </Media.Body>
        </Media>
      </div>
      <CandidateInfo candidate={candidate} />
    </div>
  )
}

export {
  CandidateDetails
}