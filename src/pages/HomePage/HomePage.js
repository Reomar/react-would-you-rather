import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestionsAction } from "../../store/actionCreator"
import './homepage.sass'

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

    const handleFilter = (filter) =>{
        setDisplay(filter)
    }

    return(
        <div className='homepage-container'>
            <div className='question-list-container'>
                <div className='buttons-container'>
                    <div className='filter-button-left  button active-button'>
                        Not Answered Questions
                    </div>

                    <div className='filter-button-right button'>
                        Answered Questions
                    </div>
                </div>

                <div>Hello</div>

            </div>
        </div>
    )
}
export default HomePage