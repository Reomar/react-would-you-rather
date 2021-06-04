import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import './votes.sass'
import ProgressBar from "@ramonak/react-progress-bar";


function Votes(props){
    // Get id from URL params
    const {question_id} = useParams()

    // Get Question data from redux
    const QuestionData = useSelector(state => state.questions)

    // Get Active User from redux
    const activeUser = useSelector(state => state.activeUser)

    const question = QuestionData[question_id]

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

    const userAnswer = activeUser.answers[question_id]

    return(
        <div>
            <div className={userAnswer === 'optionOne' ? 'voted' : ''}>
                <p>{question.optionOne.text}</p>
                <div className='progbar'>
                    <ProgressBar
                        completed={Math.floor(question.optionOne.votes.length / totalVotes * 100)} 
                        bgColor={'#fdca40'}
                    />
                </div>
                <p>{question.optionOne.votes.length} of {totalVotes} votes!</p>
            </div>

            <div className={userAnswer === 'optionTwo' ?'voted' : ''}>
                <p>{question.optionTwo.text}</p>
                <div className='progbar'>
                    <ProgressBar
                        completed={Math.floor(question.optionTwo.votes.length / totalVotes * 100)} 
                        bgColor={'#fdca40'}
                    />
                </div>
                <p>{question.optionTwo.votes.length} of {totalVotes} votes!</p>
            </div>
        </div>
    )
}
export default Votes