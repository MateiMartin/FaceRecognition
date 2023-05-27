import React from "react";

const FaceRecognition = ({link}) => {
    return(
        <div className="flex justify-center pa4">
            <img className="w-50" src={link} />
        </div>
    );
}

export default FaceRecognition;