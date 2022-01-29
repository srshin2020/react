import { Component } from 'react';
import { post } from 'axios';

class CustomerAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            name: '',
            birthday: '',
            job: '',
            gender: '',
            fileName: ''
        }
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
                console.log(response.data);
            });
        this.setState({
            image: null,
            name: '',
            birthday: '',
            job: '',
            gender: '',
            fileName: ''
        });
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
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h2> 고객 추가  </h2>
                프로필 이미지 : <input type='file' name='image ' file={this.state.image} value={this.state.fileName} onChange={this.handleFileChange} /><br />
                이름 : <input type='text' name='name' value={this.state.name} onChange={this.handleValueChange} /><br />
                생년월일 : <input type='text' name='birthday' value={this.state.birthday} onChange={this.handleValueChange} /><br />
                성별 : <input type='text' name='gender' value={this.state.gender} onChange={this.handleValueChange} /><br />
                직업 : <input type='text' name='job' value={this.state.job} onChange={this.handleValueChange} /><br />
                <button type='submit'>추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;
