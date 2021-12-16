import React ,{useState} from 'react'
import COUNTRIES from './Countries.json'

const SimpleForm = () => {
    let [country,setCountry] = useState(COUNTRIES);

    return (
        <div>
            <form>
               <lable>COUNTRIES</lable>
               <select>
                    {country.map((c) => {
                        return <option key = {c.code}>{c.name}</option>
                    })}
                </select>
            </form>
        </div>
    )
}

export default SimpleForm
