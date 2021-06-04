import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { saveAnswerAction } from "../../store/actionCreator"
import './selectAnswer.sass'

function SelectAnswer(props){
    const dispatch = useDispatch()

    const [selectedOption, setSelectedOption] = useState('')

    const {question} = props

    const activeUser = useSelector(state => state.activeUser)

    const handleButton = () => {
        let authedUser = activeUser.id
        let qid = question.id
        let answer = selectedOption
        dispatch(saveAnswerAction({authedUser, qid, answer}))
    }
    return(
        <div className='select-answer-container' >

                <div onClick={() => setSelectedOption('optionOne')}>
                    <input
                        type='radio'
                        name='answer' id='option1'
                        value='optionOne'
                        checked={selectedOption === 'optionOne'}
                        onChange={() => setSelectedOption('optionOne')}
                        ></input>

                    <label htmlFor='option1'>{question.optionOne.text}</label>
                </div>

                <div onClick={() => setSelectedOption('optionTwo')}>
                    <input
                        type='radio'
                        name='answer'
                        id='option2'
                        value='optionTwo'
                        checked={selectedOption === 'optionTwo'}
                        onChange={() => setSelectedOption('optionTwo')}
                        />
                    <label htmlFor='option2'>{question.optionTwo.text}</label>
                </div>


            <Link to={'/questions/'+question.id} onClick={handleButton} className='remove-deco'>
               <div className='accent-button'>
                    Save Answer
               </div>
            </Link>
        </div>

    )
}
export default SelectAnswer