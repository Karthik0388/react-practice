import React, { useState, Fragment } from 'react'
import COUNTRIES from '../../Countries.json'
const CountryComp = () => {
    let [country, setCountry] = useState(COUNTRIES);
    let [state,setState] = useState(null)

    let handleChange = e => {
        let { name, value } = e.target;
        setState({ [name]: value })
    };

    let handleSubmit = e => {
        e.preventDefault();
        console.log(state)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select name="state" value={state} onChange={handleChange}>
                    {country.map((c) => (
                        <Fragment key={c.code}>
                            <option value={c.code}>{c.name}</option>
                        </Fragment>
                    ))}
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CountryComp
