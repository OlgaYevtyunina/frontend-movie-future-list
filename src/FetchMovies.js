import axios from "axios";

const getAllMovies = ( setMovie ) => {
    axios.get("https://movies-fututre-list.onrender.com")
    .then(({ data }) =>{
        console.log( data )
        setMovie(data)
    })
}


const addMovie = ( title, setTitle, setMovie) => {
    axios.post("https://movies-fututre-list.onrender.com/saveMovie", { title })
    .then(( data ) =>{
        console.log( data )
        setTitle("");
        getAllMovies(setMovie)
    })
}

const editMovie  = (movieId, title, setMovie, setTitle, setEditing) => {
    axios.put("https://movies-fututre-list.onrender.com/editMovie", { _id: movieId, title })
    .then(( data ) =>{
        console.log( data )
        setTitle("")
        setEditing( false )
        getAllMovies(setMovie)
    })
}

const deleteMovie  = (_id, setMovie) => {
    axios.post("https://movies-fututre-list.onrender.com/deleteMovie", { _id })
    .then(( data ) =>{
        console.log( data )
        getAllMovies(setMovie)
    })
}



export { getAllMovies, addMovie, editMovie, deleteMovie }