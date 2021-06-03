import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import QuestionBox from '../../components/QuestionBox'

function QuestionPage(){
    // Get id from URL params
    const {question_id} = useParams()

    // Get Question from redux
    const QuestionData = useSelector(state => state.questions)

    // Get Active User from redux
    const activeUser = useSelector(state => state.activeUser.activeUserReducer)

    // Check if question is answered
    const isAnswered = `${question_id in activeUser.answers}`

    // Get the Question
    const question = QuestionData[question_id]

    return(
        <div>
            < QuestionBox question={question} key={question.id} page={isAnswered? 'answeredQuestion' : 'notAnsweredQuestion'}/>
        </div>
    )
}

export default QuestionPage