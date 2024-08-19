import './index.css'

const LatestMatch = props => {
  const {teamBannerURL, latestMatchDetails} = props
  return (
    <div className="team-matches-container">
      <div className="team-banner-container">
        <img
          className="team-banner-img"
          src={teamBannerURL}
          alt="team banner"
        />
      </div>
      <p className="latest-match-heading">Latest Matches</p>
      <div className="latest-match-container">
        <div className="match-details-container">
          <p className="latest-team-name">{latestMatchDetails.competingTeam}</p>
          <p className="match-date">{latestMatchDetails.date}</p>
          <p className="match-venue">{latestMatchDetails.venue}</p>
          <p className="match-result">{latestMatchDetails.result}</p>
        </div>
        <div className="logo-container">
          <img
            className="team-logo"
            alt={`latest match ${latestMatchDetails.competingTeam}`}
            src={latestMatchDetails.competingTeamLogo}
          />
        </div>
        <div className="player-details-container">
          <div className="first-innings-container">
            <p className="first-innings-text">First Innings</p>
            <p className="first-innings-value">
              {latestMatchDetails.firstInnings}
            </p>
          </div>
          <div className="second-innings-container">
            <p className="second-innings-text">Second Innings</p>
            <p className="second-innings-value">
              {latestMatchDetails.secondInnings}
            </p>
          </div>
          <div className="man-of-the-match-container">
            <p className="man-of-the-match-text">Man Of The Match</p>
            <p className="man-of-the-match-value">
              {latestMatchDetails.manOfTheMatch}
            </p>
          </div>
          <div className="umpires-container">
            <p className="umpires-text">Umpires</p>
            <p className="umpires-value">{latestMatchDetails.umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
