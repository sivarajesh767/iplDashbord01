// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'
const ApiUrl = 'https://apis.ccbp.in/ipl'
class Home extends Component {
  state = {isLoading: true, teamMatchDeails: []}
  componentDidMount() {
    this.getHomePage()
  }
  getHomePage = async () => {
    const response = await fetch(ApiUrl)
    const fetchedData = await response.json()
    const updatedData = fetchedData.teams.map(eachTeamCard => ({
      name: eachTeamCard.name,
      id: eachTeamCard.id,
      teamImageUrl: eachTeamCard.team_image_url,
    }))
    this.setState({teamMatchDeails: updatedData, isLoading: false})
  }
  renderTeamList = () => {
    const {teamMatchDeails} = this.state
    return (
      <ul className="teams-list">
        {teamMatchDeails.map(team => (
          <TeamCard key={team.id} teamCardDetails={team} />
        ))}
      </ul>
    )
  }
  renderLoader = () => (
    <div testid="loader" className="load-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )
  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-co">
        <div className="container">
          <div className="ipl-dashbord-heading">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="iplLog-img"
            />
            <h1 className="iplDashboard-heading">IPL Dashboard</h1>
          </div>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamList()}
      </div>
    )
  }
}
export default Home
