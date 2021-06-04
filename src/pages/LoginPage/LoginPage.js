import './loginPage.sass'
import logo from '../../assets/logo.svg'
import SelectUser from '../../components/SelectUser'

function LoginPage(){
    return(
        <div className='login-Container'>
            <h1 className='would-you-rather'>Would You Rather?</h1>
            <img src={logo} className='login-logo' alt='app logo'/>

            < SelectUser />
        </div>
    )
}

export default LoginPage