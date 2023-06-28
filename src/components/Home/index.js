// Write your code here

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount = () => {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch(teamsApiUrl)
    const fetchData = await response.json()
    console.log(fetchData)
    const updatedData = fetchData.teams.map(eachData => ({
      name: eachData.name,
      imageUrl: eachData.team_image_url,
      id: eachData.id,
    }))
    console.log(updatedData)
    this.setState({teamsData: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
    </div>
  )

  renderTeamsList = () => {
    const {teamsData} = this.state
    return (
      <ul className="team-list-item">
        {teamsData.map(team => (
          <TeamCard key={team.id} teamData={team} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo"
              alt="ipl logo"
            />
            <h1 className="header-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
