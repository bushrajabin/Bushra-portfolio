import { NavLinks } from "../../common/common"
import "./Nav.css"
const Nav=()=>{
return(
<div className="mainConatiner">
    <div className="logo">
        <h2>BJ</h2>
    </div>
    <div className="navLinks">
        <a href="">{NavLinks}</a>
    </div>
</div>
)
}

export default Nav;