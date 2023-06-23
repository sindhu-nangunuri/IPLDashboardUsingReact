// Write your code here
import Component from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    console.log(teamData)
    const {name, imageUrl} = teamData
    return (
      <li className="team-card">
        <img className="team-card-image" src={imageUrl} alt={`${name}`} />
        <p className="team-card-name">{name}</p>
      </li>
    )
  }
}

export default TeamCard
