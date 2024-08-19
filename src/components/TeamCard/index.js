import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

export default class TeamCard extends Component {
  state = {
    teams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonResponse = await response.json()
    const formattedData = jsonResponse.teams.map(item => ({
      id: item.id,
      name: item.name,
      teamImageURL: item.team_image_url,
    }))
    this.setState({teams: formattedData, isLoading: false})
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="Oval" color="#000" height={80} width={80} />
          </div>
        ) : (
          <ul className="teams-list">
            {teams.map(team => (
              <Link
                to={`/team-matches/${team.id}`}
                className="team-link"
                key={team.id}
              >
                <li className="team-card">
                  <img
                    src={team.teamImageURL}
                    alt={team.name}
                    className="team-img"
                  />
                  <p className="team-name">{team.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    )
  }
}
