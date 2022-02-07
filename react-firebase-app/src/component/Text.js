import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Dialog } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';
// import { Link } from '@material-ui/core';
const styles = theme => ({
    hidden: {
        display: 'none'
    },
    fab: {
        position: 'fixed',
        bottom: '20px',
        right: '20px'
    }
})
const databaseURL = "https://react-firebase-app-17eb1-default-rtdb.firebaseio.com/";


class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            fileContent: null,
            texts: {},
            textName: '',
            open: false
        }
    }
    // get method : firebase 서버로부터 저장된 리스트 읽어오기 
    _get() {
        fetch(`${databaseURL}/texts.json`).then(res => {
            if (res.status != 200) {
                console.log(res.statusText);
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(texts => {
            console.log(texts);
            this.setState({ texts: (texts == null) ? {} : texts })
        });
    }
    // post method : firebase 서버에 추가  
    _post(text) {
        fetch(`${databaseURL}/texts.json`, {
            method: 'POST',
            body: JSON.stringify(text)
        }).then(res => {
            if (res.status != 200) {
                console.log(res.statusText);
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data => {
            // 성공시 생성된 아이디가 반환됨
            console.log(data);
            let nextTexts = this.state.texts;
            nextTexts[data.name] = text;
            this.setState({ texts: nextTexts })
        });
    }
    // delete method : 리스트 중 한개 삭제 
    _delete(id) {
        return fetch(`${databaseURL}/texts/${id}.json`, {
            method: 'DELETE'
        }).then(res => {
            if (res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(() => {
            let nextTexts = this.state.texts;
            delete nextTexts[id];
            this.setState({ texts: nextTexts })
        });
    }
    // component가 처음 마운트될 때 서버에서 리스트 가져옮. 
    componentDidMount() {
        this._get();
    }

    handleDialogToggle = () => {
        this.setState({
            open: !this.state.open,
            fileName: '',
            fileContent: null,
            textName: '',
        });
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // 삭제 버튼 클릭시 서버로 삭제 요청 
    handleDelete = (id) => {
        this._delete(id);
    }
    //추가시 서버로 추가 요청 
    handleSubmit = () => {
        const text = {
            textName: this.state.textName,
            textContent: this.state.fileContent
        }
        this.handleDialogToggle();
        // 필요한 속성 중 하나라도 비어 있는 경우 서버로 요청하지 않음. 
        if (!text.textName && !text.textContent) {
            return;
        }
        this._post(text);
    }

    handleFileChange = (e) => {
        let reader = new FileReader();
        reader.onload = () => {
            let text = reader.result;
            this.setState({
                fileContent: text
            })
        }
        reader.readAsText(e.target.files[0]);
        this.setState({
            fileName: e.target.value
        })

    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                {Object.keys(this.state.texts).map(id => {
                    const text = this.state.texts[id];
                    return (
                        <Card key={id}>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    내용 : {text.textContent.substring(0, 24) + '...'}
                                </Typography>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography variant='h5' component='h2'>
                                            {text.textName.substring(0, 14) + '...'}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Link to={'/detail/' + id}>
                                            <Button variant='contained' color='primary'>보기</Button>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant='h5' component='h2'>
                                            <Button variant='contained' color='primary' onClick={() => this.handleDelete(id)}>삭제</Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    )
                })
                }
                <Fab color='primary' className={classes.fab} onClick={this.handleDialogToggle}>
                    <AddIcon />
                </Fab>
                <Dialog open={this.state.open} onClose={this.handleDialogToggle}>
                    <DialogTitle>Text 추가 </DialogTitle>
                    <DialogContent>
                        <TextField label='텍스트 이름' type='text' name='textName' value={this.state.textName} onChange={this.handleValueChange} /><br />
                        <input className={classes.hidden} accept='text/plain' id='raised-button-file' type='file' file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <label htmlFor='raised-button-file'>
                            <Button variant='contained' color='primary' component='span' name='file'>
                                {this.state.fileName === '' ? '.txt파일 선택' : this.state.fileName}
                            </Button>
                        </label>
                        <TextTruncate line={1} truncateText='...' text={this.state.fileContent} />
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='primary' onClick={this.handleSubmit} >추가</Button>
                        <Button variant='outlined' color='primary' onClick={this.handleDialogToggle} >닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(Text);