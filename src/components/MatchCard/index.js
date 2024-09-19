// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentTeamMatchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} =
    recentTeamMatchDetails
  const getMatchesStatusClassName = status =>
    status === 'Won' ? 'Match-Won' : 'Match-Lost'
  const matchStatusClassName = `match-status ${getMatchesStatusClassName(
    matchStatus,
  )}`
  return (
    <li>
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
