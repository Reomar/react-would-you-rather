import './loginPage.sass'
import logo from '../../assets/logo.svg'
import SelectUser from '../../components/SelectUser'
import { fetchQuestionsAction } from "../../store/actionCreator"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'


function LoginPage(){
        const dispatch = useDispatch()
        
        // Get Questions from API
        useEffect(()=>{
            dispatch(fetchQuestionsAction())
        })


    return(
        <div className='login-Container'>
            <h1 className='would-you-rather'>Would You Rather?</h1>
            <img src={logo} className='login-logo' alt='app logo'/>

            < SelectUser />
        </div>
    )
}

export default LoginPage