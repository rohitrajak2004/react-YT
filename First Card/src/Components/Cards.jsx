import '../Card.css'

const Cards = ({ profile }) => {
  return (
    <div className="Main">
      <div className="image">
        <img src={profile.profileImageUrl} alt={profile.name} className="profile-image"/>
      </div>
      <div className="Content">
        <div className="first">
          <h3>{profile.name}</h3>
          <h4>{profile.post}</h4>
          <h5>{profile.followers} Followers | {profile.project} | {profile.city}</h5>
          <p>{profile.about}</p>
        </div>
        <div className="middle">
          <h5>{profile.skill1}</h5>
          <h5>{profile.skill2}</h5>
          <h5>{profile.skill3}</h5>
          <h5>{profile.skill4}</h5>
          <h5>{profile.skill5}</h5>
        </div>
        <div className="last">
          <button>Download CV</button>
          <button>Hire Me</button>
        </div>
      </div>
    </div>
  )
}

export default Cards