import React, { useState, useRef } from 'react';
import './admin.css';
import run_latest from '../test/admin.run.latest.json';
import run_list from '../test/admin.run.list.json';


export default function Admin() {
    const [attendee, setAttendee] = useState([]);
    const [prevRunning, setPrevRunning] = useState([]);
    const nameInput = useRef(null);

    const check = () => {
        var json = run_latest;
        var ajaxSorted = json.users.sort((a, b) => a.name.localeCompare(b.name));
        setAttendee(ajaxSorted);
    }

    const addMember = () => {
        var name = nameInput.current.value;
        var temp = attendee.slice();
        temp.push({
            name: name,
            phonenum: '9999',
        });
        setAttendee(temp);
        nameInput.current.value = '';
    }

    const refresh = () => {
        setPrevRunning(run_list);
    }

    return (
        <>
            <button onClick={check}>누가왔을까!!!</button>
            <div>
                {attendee.map((a, i) => <span key={i}>{a.name} </span>)}
            </div>
            <div>
                <input type="text" ref={nameInput}/>
                <button onClick={addMember}>이사람도 왔어요</button>
            </div>
            <div>
                <button onClick={refresh}>지난 러닝</button>
                <div>
                    {prevRunning.map((r, i) => <div key={i}>{r.name + '@' + r.time}</div>)}
                </div>
            </div>
        </>
    )
}