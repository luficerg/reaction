import React , {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){

    const handleClickUpper = () => {
        
        let newTExt = text.toUpperCase()
        setText(newTExt)
        console.log("Uppercase was clicked" )
    }

    const handleClickPython = () => {

        let N_list = text.split("\n")
        let list  = text.split(" ")
        var files = []

        for (let item of list) {
            if (item.toLowerCase().endsWith('.py')){

                console.log("Python file  was detected" )
                files.push(item)
            }

        }
        for (let item of N_list) {
            if (item.toLowerCase().endsWith('.py')){

                console.log("Python file  was detected" )
                files.push(item)
            }

        }

        let string = ""
        for (let item of files) {
            string = string + item + "\n"
        }
        setText(string)
    }

    const handleClickLower = () => {
        
        let newTExt = text.toLowerCase()
        setText(newTExt)
        console.log("Lowercase was clicked" )
    }

    const handleClickClear = () => {
        
        let newTExt = ''
        setText(newTExt)
        console.log("Clear was clicked" )
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return(
        <>

        <div className="mb-3">
                <h1>
                <label htmlFor="text" className="form-label">{props.heading}</label>
                </h1>
                
                <textarea className="form-control" id="text" rows="10" value = {text} onChange={handleOnChange}></textarea>
                </div>
                <div>
                <button className="btn btn-primary mx-2" onClick={handleClickUpper}>
                    TO upper case
                </button>
            
                <button className="btn btn-primary mx-4" onClick={handleClickLower}>
                    TO lower case
                </button>

                <button className="btn btn-primary mx-4" onClick={handleClickClear}>
                    Clear
                </button>

                <button className="btn btn-primary mx-2" onClick={handleClickPython}>
                    Detect Python
                </button>
        </div>

        <div className="container">
            <h1 className='container'>Your text Summary here</h1>
            <br/>
            <strong>
            <p> {text.split(" ").length} words and{text.length} characters</p>
            <p> {0.1 *text.split(" ").length}  seconds to read the document</p>
            <p>{text.toLowerCase()}</p>
            </strong>
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