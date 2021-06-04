import { Link, useLocation } from "react-router-dom"
import './navbar.sass'
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from "../../store/actionCreator"

function Navbar(){
    const dispatch = useDispatch()

    const activeUser = useSelector(state => state.activeUser)

    const handleLogout = ()=>{
        dispatch(logoutAction())
    }

    // Get URL path
    const location = useLocation().pathname;

    return(
        <div className='navbar'>
            <div className='nav-userInfo'>
                <img className='nav-avatar' src={activeUser.avatarURL} alt='user avatar'/>
                <p>hello, {activeUser.name}</p>
            </div>

            <div className="nav-links">
                <Link to='/' className={(location === '/' ? 'active' : '' )+ ' link-item'}> Home </ Link>
                <Link to='/leaderboard' className={(location === '/leaderboard' ? 'active' : '' )+ ' link-item'}> Leaderboard </Link>
                <Link to='/add' className={(location === '/add' ? 'active' : '' )+ ' link-item'}>New Question</Link>
            </div>

            <Link className='remove-deco' to='/' onClick={handleLogout}>
                <div className='logout-button'>
                    Logout
                </div>
            </Link>


        </div>
    )
}

export default Navbar