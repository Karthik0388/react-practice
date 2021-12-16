import React ,{useState} from 'react'

const RadioButtonComp = () => {
    let [state,setState] = useState(null);

    let handleChange = e =>{
        let {name,value} = e.target;
        setState({[name]:value});
    }

    let handleSubmit= e =>{
        e.preventDefault();
        console.log(state);
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div onChange={handleChange} value={state}>
                    <input type="radio" name="gender" value="Male" />Male
                    <input type="radio" name="gender" value="Female" />Female
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default RadioButtonComp
