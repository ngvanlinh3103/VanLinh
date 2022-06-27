import { useState } from 'react';

function FunctionComponent() {
    const [value, setValue] = useState({ age: "", hobbies: "travel" });
    //console.log(value);

    let handlerChangeAge = (event) => {
        setValue({
            // ...value,
            age: event.target.value,
            hobbies: "travel"
        })
    }

    return (
        <>
            <div className='input_name'>
                <input type="text" value={value.age} onChange={handlerChangeAge} />
            </div>
            <div className='age'>
                age: {value.age}
            </div>
            <div className='hobby'>
                hobbies: {value.hobbies}
            </div>
        </>
    )
}

export default FunctionComponent;