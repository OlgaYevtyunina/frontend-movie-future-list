import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export const MyMovies = ({ text, updatingInInput, deleteMovie}) => {
    return(
        <div>
        <p><img src="https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"alt="new" />{text}</p>
            <AiFillEdit class="icon-edit" onClick={ updatingInInput }></AiFillEdit>
            <AiFillDelete class="icon-delete" onClick={ deleteMovie }></AiFillDelete>
        </div>
    )
}