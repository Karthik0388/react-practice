import React ,{useState} from 'react'

const TextAreaComp = () => {
    let [state,setState] = useState(null);

    let handleChange = e =>{
        let {value} = e.target;
        setState(value);
    }

    let handleSubmit= e =>{
        e.preventDefault();
        console.log(state);
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div  value={state}>
                 <input type="textArea" name="textArea" value={state} onChange={handleChange} style={{height:"100px",width:"200px"}} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default TextAreaComp

