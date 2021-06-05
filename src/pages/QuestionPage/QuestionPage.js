import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useParams } from "react-router-dom"
import QuestionBox from '../../components/QuestionBox'

function QuestionPage(){
    // Get id from URL params
    const {question_id} = useParams()

    // Get Question from redux
    const QuestionData = useSelector(state => state.questions)

    // Get Active User from redux
    const activeUser = useSelector(state => state.activeUser)

    // Check if question is answered
    const isAnswered = question_id in activeUser.answers

    // Get the Question
    const question = QuestionData[question_id]

    if(!question){
        return < Redirect to="/not-found" />
    }

    return(
        <div>
            < QuestionBox question={question} key={question_id} page={ isAnswered ? 'answeredQuestion' : 'notAnsweredQuestion'}/>
        </div>
    )
}

export default QuestionPage