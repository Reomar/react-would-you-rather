import { useParams } from "react-router-dom"

function QuestionPage(){
    let {question_id} = useParams()

    return(
        <div>
            This is Question  {question_id}
        </div>
    )
}

export default QuestionPage