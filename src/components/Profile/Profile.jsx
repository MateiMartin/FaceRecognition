import React from "react";

const Profile = ({ user }) => {

    return (
        <div className="vh-100 flex items-center justify-center">
            <article style={{ backgroundColor: 'rgba(94, 44, 165, 0.7)' }} className="center br3 pa3 pa4-ns mv3 ba b--black-10">
                <div className="tc">
                    <img src={`https://robohash.org/${user.id}`} className="br-100 h5 w5 dib" title="Photo of a robot" />
                    <h1 className="f2 light-green">{user.name}</h1>
                    <hr className="mw3 bb bw1 light-green" />
                </div>
                <p className="lh-copy measure center f4 light-green">Name: {user.name}</p>
                <p className="lh-copy measure center f4 light-green">Email: {user.email}</p>
                <p className="lh-copy measure center f4 light-green">Entries: {user.entries}</p>
                <p className="lh-copy measure center f4 light-green">Joined: {user.joined}</p>
            </article>
        </div>
    );


};

export default Profile;