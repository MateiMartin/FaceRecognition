import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ link, box }) => {
    return (

        <div className="w-100 flex justify-center mt4">
            <div className="relative mt2">
                <img id="inputImage" src={link} width='500px' height='auto' />
                <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
            </div>
        </div>


    );
}

export default FaceRecognition;