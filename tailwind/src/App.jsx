import React from 'react'
import Section1 from './Components/Page1/Section1'

const App = () => {
  const Users = [
        {bgimg:"https://plus.unsplash.com/premium_photo-1678916732633-7b0cca1a1e1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
            intro:"",
            tag:"Satisfied"
        },
        {bgimg:"https://plus.unsplash.com/premium_photo-1722349512829-af804401baf0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
            intro:"",
            tag:"Well-Planned"
        },
        {bgimg:"https://plus.unsplash.com/premium_photo-1661775190861-2dc4e2c223fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
            intro:"",
            tag:"Planning"
        },
        {bgimg:"https://plus.unsplash.com/premium_photo-1693035338994-e9188522b0ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600",
            intro:"",
            tag:"Underbanked"
        },
        {bgimg:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
            intro:"",
            tag:"Countinious"
        },
    ]
  return (
    <div >
      <Section1 Users={Users}/>
    </div>
  )
}

export default App