import './index.css'

const MatchCard = props => {
  const {match} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = match
  const resultColor = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card">
      <img
        className="competing-team-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`match-status ${resultColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
