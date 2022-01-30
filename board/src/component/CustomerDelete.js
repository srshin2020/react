import { Component } from "react";
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';


class CustomerDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }


    handleClickOpen = () => {
        this.setState({
            open: true
        });

    }
    handleClose = () => {
        this.setState({
            open: false
        });
    }

    deleteCustomer(id) {
        const url = '/api/customer/' + id;
        fetch(url, { method: 'delete' });
        this.props.refreshState();
        this.handleClose();
    }

    render() {
        return (
            <div>
                <Button variant='contained' color='secondary' onClick={this.handleClickOpen}>삭제</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle onClose={this.handleClose}>
                        삭제 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>
                            선택한 고객의 정보가 삭제됩니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='primary' onClick={(e)=>{this.deleteCustomer(this.props.id)}}>삭제</Button>
                        <Button variant='outlined' color='primary' onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerDelete; 
