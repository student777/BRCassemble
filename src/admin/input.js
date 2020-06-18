import React, { useState, useRef } from 'react';

export default function Input(props) {
    const nameInput = useRef(null);
    const [name, setName] = useState('');
    const __onClick = () => {
        setName(nameInput.current.value);
        nameInput.current.value = '';
        props.addMember(name);
    }
    return (
        <>
            <input type="text" ref={nameInput}/>
            <button onClick={__onClick}>이사람도 왔어요</button>
        </>
    )
} 