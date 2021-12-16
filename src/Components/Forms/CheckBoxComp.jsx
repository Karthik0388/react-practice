import React ,{useState} from 'react'

const CheckBoxComp = () => {
    let [state,setState] = useState([]);

    let handleChange = e =>{
        let {name,value} = e.target;
        setState({...state,[name]:value});
    }

    let handleSubmit= e =>{
        e.preventDefault();
        console.log(state);
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div onChange={handleChange} value={state}>
                <input type="checkbox" name="skills1" value="Html" />HTML
                    <input type="checkbox" name="skills2" value="Css" />CSS
                    <input type="checkbox" name="skills3" value="JavaScript" />JAVASCRIPT
                    <input type="checkbox" name="skills4" value="React" />REACT
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CheckBoxComp
