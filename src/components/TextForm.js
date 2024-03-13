import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){

    const handleClickUpper = () => {
        console.log("Uppercase was clicked" )
        let newTExt = text.toUpperCase()
        setText(newTExt)
    }

    const handleClickLower = () => {
        console.log("Lowercase was clicked" )
        let newTExt = text.toLowerCase()
        setText(newTExt)
    }

    const handleOnChange = (event) => {
        console.log("New")
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter the text here")
    return(
        <>

        <div className="mb-3">
                <h1>
                <label htmlFor="text" className="form-label">{props.heading}</label>
                </h1>
                
                <textarea className="form-control" id="text" rows="10" value = {text} onChange={handleOnChange}></textarea>
                </div>
                <div>
                <button className="btn btn-primary mx - 4" onClick={handleClickUpper}>
                    TO upper case
                </button>
            
                <button className="btn btn-primary" onClick={handleClickLower}>
                    TO lower case
                </button>
        </div>

        <div className="container">
            <h1>Your text Summary here</h1>
            <p> {text.split(" ").length} words and{text.length} characters</p>
            <p> {0.1 *text.split(" ").length}  s to read the document</p>
            <p>{text.toLowerCase()}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps ={
    heading: 'Text'
}