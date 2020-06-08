import React, { useState } from 'react';
import './member.css'
import json from '../test/member.login.json';
import done from '../done.png';



export default function Member() {
    const [user, setUser] = useState(null);

    const hereiam = (phoneNum) => {
        var watchID = navigator.geolocation.watchPosition(position => {
            var obj = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                phoneNum: phoneNum,
            };
            console.log(obj)
            navigator.geolocation.clearWatch(watchID);
        });
        setUser(json);
    }

    const phone = () => {
        var phoneNum = parseInt(prompt("휴대폰 뒷번호 4자리를 입력하세요"));
        if (phoneNum > 1000 && phoneNum < 9999) {
            hereiam(phoneNum);
        } else {
            alert('다시 입력하세요');
        }
    }

    const kakao = () => {
        alert('아직 준비중...');
    }

    return (
        <div>
            { user ?
                <>
                    <div><img src={done}/></div>
                    <div>hello {user.name}!(출첵완료)</div> 
                </>
            :
                <>
                    <button id="phone" onClick={phone}>📞휴대폰 번호로 로그인</button>
                    <button id="loginBtn" onClick={kakao}>💬카카오 계정으로 로그인</button>
                </>
            }
        </div>
    )
}
