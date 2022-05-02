import { useState, useEffect } from 'react';
 
const Test = ({ testProp }) => {
    const [testVariable, setTestVariable] = useState(0);

    useEffect(()=> {
        console.log(testVariable);
    }, [testVariable]);

    const buttonClick = () => {
        setTestVariable(testVariable + 1);
    }

    return (
    <div> 
        <p>test {testProp}</p>
        <p>test variable {testVariable}</p>
        <button onClick={buttonClick}>Test Counter</button>
    </div>);
}

export default Test;
