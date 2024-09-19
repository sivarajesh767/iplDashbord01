// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {competingTeam, date, venue, result, competingTeamLogo, firstInnings, secondInnings, manOfTheMatch, umpires} =
    latestMatchData

  return (
    <div>
      <h1>Latest Match</h1>
      <div>
        <div>
          <div>
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <hr className="separator" />

        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>man of the match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
