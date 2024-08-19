import TeamCard from '../TeamCard'
import './index.css'

const Home = () => (
  <div className="bg-container">
    <div className="home-container">
      <div className="ipl-heading-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          className="ipl-logo"
          alt="ipl logo"
        />
        <h1 className="main-heading"> IPL Dashboard</h1>
      </div>
      <TeamCard />
    </div>
  </div>
)

export default Home
