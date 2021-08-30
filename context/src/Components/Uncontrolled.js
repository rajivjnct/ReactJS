import React, { useRef, useState } from 'react';

const Uncontrolled = () => {
    const luckyName = useRef(null);
    const [show, setShow] = useState(false);

    const SubmitForm = (e) => {
        e.preventDefault();
        const nameText = luckyName.current.value;
        nameText === "" ? alert("Please fill the Data.") : setShow(true);
    }
    return (
        <>
            <form action="" onSubmit={SubmitForm}>
                <label htmlFor="luckyName"></label>
                <input type="text" id="luckyName" ref={luckyName} />
                <br />
                <button>Submit</button>
                <br />
                <p>{show ? `Your Name is ${luckyName.current.value}` : " "}</p>
            </form>
        </>
    )
}

export default Uncontrolled;