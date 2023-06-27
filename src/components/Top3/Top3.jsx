import React, { useEffect } from 'react';
import './top3.css';
const Top3 = ({ setUserArrayTop, userArrayTop, user }) => {


    useEffect(() => {
        fetch('https://facerecognition-server-unmq.onrender.com/top3')
            .then(response => response.json())
            .then(data => {
                const mappedData = data.map((user, i) => (
                    <li key={i}>
                        {user.name}: {user.entries}
                    </li>
                ));
                setUserArrayTop(mappedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [user, userArrayTop, setUserArrayTop]);

    return (
        <div className='container'>
            <div className='top'>
                <h1 className='t-h1'>Top 3 Users</h1>
                <ul>{userArrayTop}</ul>
            </div>

        </div>
    );
};

export default Top3;
