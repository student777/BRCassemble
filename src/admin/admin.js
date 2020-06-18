import React, { useState, useRef } from 'react';
import './admin.css';
import Input from './input';
import run_latest from '../test/admin.run.latest.json';


export default function Admin() {
    const [attendee, setAttendee] = useState([]);

    const refresh = () => {
        var json = run_latest;
        var ajaxSorted = json.users.sort((a, b) => a.name.localeCompare(b.name));
        setAttendee(ajaxSorted);
    }

    const addMember = (name) => {
        var temp = attendee.slice();
        temp.push({
            name: name,
            phonenum: '9999',
        });
        setAttendee(temp);
    }

    return (
        <>
            <button onClick={refresh}>누가왔을까!!!</button>
            <div>
                {attendee.map((a, i) => <span key={i}>{a.name} </span>)}
            </div>
            <div>
                <Input
                    attendee={attendee}
                    addMember={addMember}
                />
            </div>
        </>
    )
}