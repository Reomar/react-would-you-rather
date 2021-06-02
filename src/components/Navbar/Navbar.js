import { Link } from "react-router-dom"
import './navbar.sass'
import img from '../../assets/avatars/a1.png'
import { useSelector } from "react-redux"

function Navbar(){

    const activeUser = useSelector(state => state.activeUser.activeUserReducer)

    const handleLogout = ()=>{

    }

    return(
        <div className='navbar'>
            <div className='nav-userInfo'>
                {/* FIXME : fix img path in _data   */}
                <img className='nav-avatar' src={img}/>
                <p>hello, {activeUser.name}</p>
            </div>

            <div className="nav-links">
                <Link to='/' className='link-item'> Home </ Link>
                <Link to='/leaderboard' className='link-item'> Leaderboard </Link>
                <Link to='/add' className='link-item'>New Question</Link>
            </div>

            <Link className='logout-button' to='/'>
                Logout
            </Link>


        </div>
    )
}

export default Navbar