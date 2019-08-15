import * as React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import {Row, Col} from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import './App.css';

interface IState {
  vertical: any,
  horizontal: any,
}

class App extends React.Component<{}, IState> {
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
              <Button color="inherit" className="Login-button">Login</Button>  
            </Col>
          </Row>
        </header>
        <Fab style={{position: "fixed", bottom: 10, right: 10}}>
          <AddIcon />
        </Fab>
      </React.Fragment>
    );
  }
}

export default App;
