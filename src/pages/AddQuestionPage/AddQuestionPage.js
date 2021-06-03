import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addQuestionAction } from "../../store/actionCreator"

function AddQuestionPage(){
    const dispatch = useDispatch()
    const [optionOneText, setOptionOne] = useState('')
    const [optionTwoText, setOptionTwo] = useState('')

    const author = useSelector(state => state.activeUser.id)


    const handleAddQuestion = () => {
        dispatch(addQuestionAction({optionOneText, optionTwoText, author}))
    }

    return(
        <div>
            <div className='add-question-Container'>
                <div className='add-question-header'>
                    Add a new question
                </div>
                <div className='add-question-body'>
                    <p>Would you rather...</p>
                    <input type='text' placeholder='Option one' value={optionOneText} onChange={(e) => setOptionOne(e.target.value)}/>
                    <p>or</p>
                    <input type='text' placeholder='Option one' value={optionTwoText} onChange={(e) => setOptionTwo(e.target.value)}/>
                </div>

                <Link to='/' onClick={handleAddQuestion}>Add Question</Link>

            </div>
        </div>
    )
}
export default AddQuestionPage