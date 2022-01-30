import { Component } from 'react';
import { post } from 'axios';
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});

class CustomerAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            name: '',
            birthday: '',
            job: '',
            gender: '',
            fileName: '',
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
            image: null,
            name: '',
            birthday: '',
            job: '',
            gender: '',
            fileName: '',
            open: false
        });
    }

    handleFileChange = (e) => {
        this.setState({
            image: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
            .then((response) => {
                this.props.refreshState();
                console.log(response.data);
            });
        this.handleClose();
    }

    addCustomer = () => {
        const url = '/api/customer';
        const formData = new FormData();
        formData.append('image', this.state.image);
        formData.append('name', this.state.name);
        formData.append('birthday', this.state.birthday);
        formData.append('job', this.state.job);
        formData.append('gender', this.state.gender);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant='contained' color='primary' onClick={this.handleClickOpen}>고객 추가하기</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept='image/*' id='raised-button-file' type='file' file={this.state.image} value={this.state.fileName} onChange={this.handleFileChange} /><br />
                        <label htmlFor='raised-button-file'>
                            <Button variant='contained' color='primary' component='span' name='image'>
                                {this.state.fileName === '' ? '프로필 이미지 선택' : this.state.fileName}
                            </Button>
                        </label>
                        <br />
                        <TextField label='이름' type='text' name='name' value={this.state.name} onChange={this.handleValueChange} /><br />
                        <TextField label='생일' type='text' name='birthday' value={this.state.birthday} onChange={this.handleValueChange} /><br />
                        <TextField label='성별' type='text' name='gender' value={this.state.gender} onChange={this.handleValueChange} /><br />
                        <TextField label='직업' type='text' name='job' value={this.state.job} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='primary' onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant='outlined' color='primary' onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerAdd);
