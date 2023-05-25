import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = () => {

    return (
        <div className="container">
            <p className="f3 tc">
                {`This application will detect faces in your pictures. Give it a try!`}
            </p>
            <div className="flex justify-center w-100">
                <div className="form pa4 br3 shadow-1 opacity-div">
                    <input type="text" className="f4 pa2 w-70 center" />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    );

}
export default ImageLinkForm;