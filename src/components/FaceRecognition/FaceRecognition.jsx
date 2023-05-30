import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ link, box }) => {
    const squeres = box.map((box, i) => <div key={i} className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>)
    return (
        <>
            <div className="w-100 flex justify-center mt4">
                <div className="relative mt2">
                    <img id="inputImage" src={link} width='500px' height='auto' />
                    {squeres}
                </div>

            </div>
            {squeres.length > 0 && <h1 className="tc">There are <span className="blue">{squeres.length} </span>faces in this picture</h1>}
        </>
    );
}

export default FaceRecognition;