import * as React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import {Row, Col} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import MediaCard from './Components/todoCard'
import * as Webcam from "react-webcam";

interface IState {
  open: boolean,
  webcamOpen: boolean,
  authenticated: boolean,
  refCamera: any,
  predictionResult: any,
}

class App extends React.Component<{}, IState> {
  public constructor(props: any) {
    super(props);

    this.state = {
      open: false,
      authenticated: false,
      refCamera: React.createRef(),
      predictionResult: null,
      webcamOpen: false
    }
    
    this.authenticate = this.authenticate.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleWebcamOpen = this.handleWebcamOpen.bind(this)
    this.handleWebcamClose = this.handleWebcamClose.bind(this)
  }
  public handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  public handleClose() {
    this.setState({
      open: false,
    });
  }

  public handleWebcamOpen() {
    this.setState({
      webcamOpen: true,
    })
  }

  public handleWebcamClose() {
    this.setState({
      webcamOpen: false,
    })
  }

  public render() {
    const { authenticated } = this.state
    return (
      <React.Fragment>
        <header className="App-header">
          <Row>
            <Col md={6}>
              <h1 className="App-title">
                <span className="menlo-font">TO:DO</span>
                <span> list</span>
              </h1>
            </Col>
              {(!authenticated) ?
  
                  <Col md={6} style={{ textAlign: "right" }}>
                    <Button color="inherit" className="Login-button" style={{ outline: "none" }} onClick={this.handleWebcamOpen}>Login</Button>
                  </Col>
                : ""}
          </Row>
        </header>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <Dialog open={this.state.webcamOpen} onClose={this.handleWebcamClose}>

          <DialogContent>
            <Webcam
              audio={false}
              screenshotFormat="image/jpeg"
              ref={this.state.refCamera}
            />
            <Button color="inherit" style={{ outline: "none" }} onClick={this.authenticate}>Login</Button>
          </DialogContent>
        </Dialog>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Add a Thing To Do</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add something to your To:Do list, please add a title and description of a task you need to complete.
              A card will be added to your list.
            </DialogContentText>
            <TextField
              autoFocus={true}
              margin="dense"
              id="name"
              label="Title"
              fullWidth={true}
            />
            <TextField
              autoFocus={true}
              margin="dense"
              id="name"
              label="Description"
              fullWidth={true}
            />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" style={{ outline: "none" }}>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" style={{outline: "none" }}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
        <Fab style={{position: "fixed", bottom: 10, right: 10, outline: "none"}} onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>
      </React.Fragment>
    );
  }

  // Call custom vision model
  private getFaceRecognitionResult(image: string) {
    const url = "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0feed645-740d-4589-8605-1fd09f55ef96/classify/iterations/Face/image"
    if (image === null) {
      return;
    }
    const base64 = require('base64-js');
    const base64content = image.split(";")[1].split(",")[1]
    const byteArray = base64.toByteArray(base64content);
    fetch(url, {
      body: byteArray,
      headers: {
        'cache-control': 'no-cache', 'Prediction-Key': '7b0f5465d7984a069437fb3d4886a0c9', 'Content-Type': 'application/octet-stream'
      },
      method: 'POST'
    })
      .then((response: any) => {
        if (!response.ok) {
          // Error State
          alert(response.statusText)
        } else {
          response.json().then((json: any) => {
            console.log(json.predictions[0])

            this.setState({ predictionResult: json.predictions[0] })
            if (this.state.predictionResult.probability > 0.7) {
              this.setState({ authenticated: true })
              this.handleWebcamClose();

            } else {
              this.setState({ authenticated: false })
              alert("authentication failed, try again")
              console.log(json.predictions[0].tagName)
            }
          })
        }
      })
  }

  // Authenticate
  private authenticate() {
    const screenshot = this.state.refCamera.current.getScreenshot();
    this.getFaceRecognitionResult(screenshot);
    
  }
}

export default App;
