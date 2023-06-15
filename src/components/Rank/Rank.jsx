import React from "react";

const Rank = ({ name, entries }) => {

    return (
        <div className="flex flex-column items-center pb2">
            <div className="white f4 mb3">
                <h1><span className="light-green">{`${name}`}</span>{`, your current score is `}<span className="light-green">{entries}</span></h1>
            </div>

        </div >

    );
}

export default Rank;