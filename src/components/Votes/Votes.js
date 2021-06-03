import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function Votes(props){
    // Get id from URL params
    const {question_id} = useParams()

    // Get Question data from redux
    const QuestionData = useSelector(state => state.questions)

    // Get Active User from redux
    const activeUser = useSelector(state => state.activeUser)

    const question = QuestionData[question_id]

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length


    return(
        <div>
            <div>
                <p>{question.optionOne.text}</p>
                <p>{question.optionOne.votes.length} of {totalVotes} votes!</p>
            </div>
            <hr/>
            <div>
                <p>{question.optionTwo.text}</p>
                <p>{question.optionTwo.votes.length} of {totalVotes} votes!</p>
            </div>
        </div>
    )
}
export default Votes