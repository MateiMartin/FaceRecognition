import React, { useState } from "react";
import FaceRecognition from "../FaceRecognition/FaceRecognition";

const ImageLinkForm = () => {
    const [input, setInput] = useState("");
    const [imgLink, setimgLink] = useState('');
    const PAT = "113115b0569046aa85c48befbe622f2a";
    const USER_ID = "iwh62jabgdj6";
    const APP_ID = "my-first-application";
    const MODEL_ID = "face-detection";

    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onSubmit = () => {
        console.log("click");
        setimgLink(input);
        const raw = JSON.stringify({
            user_app_id: {
                user_id: USER_ID,
                app_id: APP_ID,
            },
            inputs: [
                {
                    data: {
                        image: {
                            url: input,
                        },
                    },
                },
            ],
        });

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Key ${PAT}`,
            },
            body: raw,
        };

        fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`, requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));


    };

    return (
        <div className="container">
            <p className="f3 tc">This application will detect faces in your pictures. Give it a try!</p>
            <div className="flex justify-center w-100 pt4">
                <div className="form pa4 br3 shadow-1 opacity-div w-60">
                    <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange} />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onSubmit}>
                        Detect
                    </button>
                </div>
            </div>
            <FaceRecognition link={imgLink} />
        </div>

    );
};

export default ImageLinkForm;