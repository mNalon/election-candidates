import Media from 'react-bootstrap/Media'
import { Fragment } from 'react'

import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

import { BsChevronLeft } from 'react-icons/bs'

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
  const { name, img, description } = candidate

  return (
    <Fragment>
      <Button className='vertical-gap-5' variant="secondary" onClick={handleBack}>
        <BsChevronLeft />
      </Button> 
      <div className='vertical-gap-5'>
        <Media>
          <img
            className="mr-3"
            src={img}
            alt={`Foto ${name}`}
          />
          <Media.Body>
            <h5 className='font-weight-bold'>{ name }</h5>
            <p>
              { description }
            </p>
          </Media.Body>
        </Media>
      </div>
      <CandidateInfo candidate={candidate} />
      <div>
        <h5 className='font-weight-bold'>PROPOSTAS</h5>
      </div>
    </Fragment>
  )
}

export {
  CandidateDetails
}