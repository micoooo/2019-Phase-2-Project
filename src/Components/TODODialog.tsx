import * as React from 'react';

import { Dialog, DialogContent, Button, DialogTitle, DialogContentText, TextField, DialogActions } from '@material-ui/core';

interface IProps {
    open: boolean,
    toggleOpen: any
    id: number,
    title: string,
    description: string,
    refresh: any
}

class UpdateDialog extends React.Component<IProps, {}> {

    public updateItem = () => {
        const nameElement = document.getElementById("name") as HTMLInputElement;
        const descriptionElement = document.getElementById("description") as HTMLInputElement;
        if (nameElement == null) {
            alert("There is no name");
            return;
        }

        if (descriptionElement == null) {
            alert("There is no description")
            return;
        }

        const name = nameElement.value;
        const description = descriptionElement.value;
        const body = { "taskId": this.props.id, "taskTitle": name, "taskDescription": description }

        fetch("https://todolistapidevops.azurewebsites.net/api/Todo/" + this.props.id, {
            body: JSON.stringify(body),
            headers: {
                Accept: "text/plain",
                "Content-Type": "application/json"
            },
            method: "PUT"
        }).then((response: any) => {
                // console.log(this);
                this.props.refresh();
                this.props.toggleOpen()
            });
    }
    public render() {
        return(
            <Dialog open={this.props.open} onClose={this.props.toggleOpen}>
                <DialogTitle>Edit a TODO</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To edit something in your TO:DO list, modify the fields and your changes will be saved.
                </DialogContentText>
                    <TextField
                        autoFocus={true}
                        margin="dense"
                        id="name"
                        defaultValue = {this.props.title}
                        label="Title"
                        fullWidth={true}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        defaultValue = {this.props.description}
                        id="description"
                        fullWidth={true}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.toggleOpen} color="primary" style={{ outline: "none" }}>
                        Cancel
                </Button>
                    <Button onClick={this.updateItem} color="primary" style={{ outline: "none" }}>
                        Update
                </Button>
                </DialogActions>
            </Dialog>);
    }
}

export default UpdateDialog;