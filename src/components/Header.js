import { LOGO } from "../utils/config";

const HeaderComponent = ()=>{
    return(
       <div className="header">
        <img src={LOGO}alt="logo"/>
        
        <ul className="nav-bar">
            <li>Home</li>
            <li>About Me</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
       </div>
    )
  }

  export default HeaderComponent;