import * as React from 'react';
import * as Webcam from "react-webcam";

interface IState {
    refCamera: any
}

class Authentication extends React.Component<{}, IState>{
    public constructor(props: any) {
        super(props);
        this.state = {
            refCamera: React.createRef(),
        }
    }

    public render() {
        return(
            <div>
                <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    ref={this.state.refCamera}
                />
            </div>
        )
    }
}