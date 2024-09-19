// Write your code here
import {Component} from 'react'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import Loader from 'react-loader-spinner'
import './index.css'

const teamMatchApiUrl = 'https://apis.ccbp.in/ipl'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchesDetails: {}}
  componentDidMount() {
    this.getMatches()
  }
  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInning: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
    date: data.date,
  })
  getMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchApiUrl} ${id}`)
    const fetchedData = await response.json()
    const formattedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatch: this.getFormattedData(fetchedData.latest_match_details),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamMatchesDetails: formattedData, isloading: false})
  }
  renderReactMatchesList = () => {
    const {teamMatchesDetails} = this.state
    const {recentMatches} = teamMatchesDetails
    return (
      <ul>
        {recentMatches.map(eachMatch => (
          <MatchCard key={eachMatch.id} recentTeamMatchDetails={eachMatch} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchesDetails} = this.state
    const {teamBannerUrl, latestMatch} = teamMatchesDetails
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatchData={latestMatch} />
        {this.renderReactMatchesList()}
      </div>
    )
  }
  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'

      case 'KKR':
        return 'kkr'

      case 'CSK':
        return 'csk'

      case 'RR':
        return 'rr'

      case 'MI':
        return 'mi'

      case 'SH':
        return 'sh'

      case 'DC':
        return 'dc'

      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className=`team-matches-container ${this.getRouteClassName()}`
    return (
      <div className={className}>
      {isLoading ? this.renderLoader() : this.renderTeamMatches()}</div>
    )
  }
}
export default TeamMatches
