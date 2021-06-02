import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestionsAction } from "../../store/actionCreator"

function HomePage(){
    const dispatch = useDispatch()

    // Selected questions internal state
    const [display, setDisplay] = useState('notAnswered')

    // Get Questions from API
    useEffect(()=>{
        dispatch(fetchQuestionsAction())
    })

    // Get questions data from redux store
    const questionsData = useSelector(state => state.questions)

    // Get user data from redux store
    const activeUser = useSelector(state => state.activeUser.activeUserReducer)

    const notAnswered = []
    const answered= []

    Object.keys(questionsData).map(qId => {
        if(qId in activeUser.answers){
            answered.push(questionsData[qId])
        }else{
            notAnswered.push(questionsData[qId])
        }
    })

    console.log('answered' , answered)
    console.log('notAnswered', notAnswered)

    return(
        <div className='homepage-container'>
            HomePage
        </div>
    )
}
export default HomePage