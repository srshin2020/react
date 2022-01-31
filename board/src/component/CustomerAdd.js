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
        // 고객추가시 받을 데이터 초기화 
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

    // 고객추가 Button Click시
    // modal 창 보이기 위해 속성값 변경
    handleClickOpen = () => {
        this.setState({
            open: true
        });

    }
    // modal 창 닫을 때 
    // 창에 띄운 속성값 초기화 
    // modal 창 보여주지 않기 위한 속성값 변경
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

    // file 선택시 
    handleFileChange = (e) => {
        this.setState({
            image: e.target.files[0],
            fileName: e.target.value
        })
    }

    // file 이외의 다른 속성값 입력시 
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // modal창에서 고객 추가시 
    // post command로 고객 정보 서버로 전송후
    // 고객 리스트 refresh 
    // modal 창 닫기 
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
            .then((response) => {
                this.props.refreshState();
                console.log(response.data);
            });
        this.handleClose();
    }

    // axios 이용하여 데이터 post cmd로 server로 전송
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
