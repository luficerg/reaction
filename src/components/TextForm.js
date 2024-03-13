import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){

    const handleClick = () => {
        console.log("Uppercase was clicked" )
        let newTExt = text.toUpperCase()
        setText(newTExt)
    }

    const handleOnChange = (event) => {
        console.log("New")
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter the text here")
    return(
        <div>
            <div className="mb-3">
                <h1>
                <label htmlFor="text" className="form-label">{props.heading}</label>
                </h1>
                
                <textarea className="form-control" id="text" rows="10" value = {text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>
                    Submit
                </button>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps ={
    heading: 'Text'
}