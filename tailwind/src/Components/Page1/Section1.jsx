import HomeContant from "./HomeContant"
import Navbar from "./Navbar"


const Section1 = (props) => {

  return (
    <div>
        <Navbar/>
        <HomeContant Users={props.Users}/>
    </div>
  )
}

export default Section1