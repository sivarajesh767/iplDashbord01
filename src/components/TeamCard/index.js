// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, id, teamImageUrl} = teamCardDetails
  return (
    <li className="card-list-items">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="img-list" />
        <p className="names-ipl">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
