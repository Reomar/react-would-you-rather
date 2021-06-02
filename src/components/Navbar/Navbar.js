import { Link } from "react-router-dom"
import './navbar.sass'
import img from '../../assets/avatars/a1.png'
import { useDispatch, useSelector } from "react-redux"
import { logoutAction } from "../../store/actionCreator"

function Navbar(){
    const dispatch = useDispatch()

    const activeUser = useSelector(state => state.activeUser.activeUserReducer)

    const handleLogout = ()=>{
        dispatch(logoutAction())
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

            <Link className='logout-button' to='/' onClick={handleLogout}>
                Logout
            </Link>


        </div>
    )
}

export default Navbar