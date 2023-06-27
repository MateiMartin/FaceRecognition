import React, { useState } from "react";
import FaceRecognition from "./FaceRecognition";

const ImageLinkForm = ({ loadUser, user }) => {
    const [input, setInput] = useState("");
    const [imgLink, setimgLink] = useState('');
    const [box, setBox] = useState([]);


    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const calculateFaceLocation = (data) => {
        const regions = data.outputs[0].data.regions;
        const cordonates = [];
        regions.forEach((region) => {
            const face = region.region_info.bounding_box;
            const image = document.getElementById("inputImage");
            const width = Number(image.width);
            const height = Number(image.height);
            cordonates.push({
                leftCol: face.left_col * width,
                topRow: face.top_row * height,
                rightCol: width - face.right_col * width,
                bottomRow: height - face.bottom_row * height,
            });
        });
        return cordonates;
    };

    const displayFaceBox = (data) => {
        setBox(data);
    }

    const onSubmit = () => {
        setimgLink(input);
        fetch('https://facerecognition-server-unmq.onrender.com/imageUrl', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                input: input
            })
        })
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    fetch('https://facerecognition-server-unmq.onrender.com/image', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: user.id
                        })

                    })
                        .then(response => response.json())
                        .then(count => {
                            loadUser({ ...user, entries: count })
                        })
                }
                displayFaceBox(calculateFaceLocation(result))
            })
            .catch((error) => console.log("error", error))
    };

    return (
        <div className="mt4 flex-column justify-center">
            <p className="f3 tc white">This application will detect faces in your pictures. Give it a try!</p>
            <div className="flex justify-center w-100 pt4">
                <div className="form pa4 br3 shadow-1 opacity-div w-60">
                    <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange} placeholder="Enter a link here" />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick={onSubmit}>
                        Detect
                    </button>
                </div>
            </div>
            <FaceRecognition link={imgLink} box={box} />
        </div>

    );
};

export default ImageLinkForm;