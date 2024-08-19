import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

export default class TeamMatches extends Component {
  state = {
    teamBannerURL: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonResponse = await response.json()
    const {team_banner_url, latest_match_details, recent_matches} = jsonResponse
    const {
      id: latestMatchId,
      competing_team,
      competing_team_logo,
      date,
      man_of_the_match,
      match_status,
      result,
      first_innings,
      second_innings,
      umpires,
      venue,
    } = latest_match_details
    const recentMatches = recent_matches.map(match => ({
      id: match.id,
      competingTeam: match.competing_team,
      competingTeamLogo: match.competing_team_logo,
      date: match.date,
      manOfTheMatch: match.man_of_the_match,
      matchStatus: match.match_status,
      result: match.result,
      firstInnings: match.first_innings,
      secondInnings: match.second_innings,
      umpires: match.umpires,
      venue: match.venue,
    }))
    const latestMatchDetails = {
      id: latestMatchId,
      competingTeam: competing_team,
      competingTeamLogo: competing_team_logo,
      date,
      manOfTheMatch: man_of_the_match,
      matchStatus: match_status,
      result,
      firstInnings: first_innings,
      secondInnings: second_innings,
      umpires,
      venue,
    }
    this.setState({
      teamBannerURL: team_banner_url,
      latestMatchDetails: latestMatchDetails,
      recentMatches: recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerURL, latestMatchDetails, recentMatches, isLoading} =
      this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              teamBannerURL={teamBannerURL}
            />
            <ul className="match-card-grid">
              {recentMatches.map(match => (
                <MatchCard match={match} key={match.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
