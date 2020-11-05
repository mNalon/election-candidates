const CandidateDetails = ({ candidate, handleBack }) => (
  <div>
    { candidate.name }
    <br />
    <button onClick={handleBack}>Voltar</button>
  </div>
)

export {
  CandidateDetails
}