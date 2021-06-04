import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestionsAction } from "../../store/actionCreator"
import  QuestionBox  from '../../components/QuestionBox'
import './homepage.sass'
import { Link } from "react-router-dom"

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
    const activeUser = useSelector(state => state.activeUser)

    const notAnswered = []
    const answered= []

    Object.keys(questionsData).map(qId => {
        if(qId in activeUser.answers){
            answered.push(questionsData[qId])
        }else{
            notAnswered.push(questionsData[qId])
        }
        // to turn off warring
        return 0
    })

    // Handle change in display
    const handleDisplay = (filter) =>{
        setDisplay(filter)
    }

    return(
        <div className='homepage-container'>
            <div className='question-list-container'>
                <div className='buttons-container'>
                    <div className={[display === 'notAnswered' ? 'active-button' : ''] +' filter-button-left button'}  onClick={()=>handleDisplay('notAnswered')}>
                        Not Answered Questions
                    </div>

                    <div className={[display === 'answered' ? 'active-button' : ''] +' filter-button-right button'} onClick={()=>handleDisplay('answered')}>
                        Answered Questions
                    </div>
                </div>

                {!notAnswered.length &&

                    <h3 className='feedback-text'>All questions are answered 🥳</h3>
                }

                {display=== 'notAnswered' && notAnswered.map(question => (
                    <Link to={'/questions/'+question.id} className='remove-deco' key={question.id}>
                        < QuestionBox question={question}  page='home'/>
                    </Link>
                ))}

                {display=== 'answered' && 
                    answered.map(question => (
                        <Link to={'/questions/'+question.id} className='remove-deco' key={question.id}>
                            < QuestionBox question={question}  page='home'/>
                        </Link>
                    ))
                }


            </div>
        </div>
    )
}
export default HomePage