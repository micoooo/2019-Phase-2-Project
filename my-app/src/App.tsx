import * as React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import {Row, Col} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';

interface IState {
  open: boolean
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false,
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
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
  public render() {
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
            <Col md={6} style={{textAlign: "right"}}>
              <Button color="inherit" className="Login-button" style={{ outline: "none" }}>Login</Button>  
            </Col>
          </Row>
        </header>
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
}

export default App;
