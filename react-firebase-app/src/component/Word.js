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

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: '20px',
        right: '20px'
    }
});

// {"01":{"weight":10,"word":"커피"},"-MvCn98vJGtT8oj_ar03":{"weight":"10","word":"test"},"-MvCoBmZKZCqQnzuK5Co":{"weight":"29","word":"버블티"}}
const databaseURL = "https://react-firebase-app-17eb1-default-rtdb.firebaseio.com/";
class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: {},      // database에 저장된 단어 리스트 
            open: false,    // dialog 창을 여는 flag
            word: '',       // 현재 입력된 단어
            weight: ''      // 현재 입력된 단어 비중치
        }
    }
    // get method : firebase 서버로부터 저장된 리스트 읽어오기 
    _get() {
        fetch(`${databaseURL}/words.json`).then(res => {
            if (res.status != 200) {
                console.log(res.statusText);
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(words => {
            console.log(words);
            this.setState({ words: words })
        });
    }
    // post method : firebase 서버에 추가  
    _post(word) {
        return fetch(`${databaseURL}/words.json`, {
            method: 'POST',
            body: JSON.stringify(word)
        }).then(res => {
            if (res.status != 200) {
                console.log(res.statusText);
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data => {
            // 성공시 생성된 아이디가 반환됨
            console.log(data);
            let nextWords = this.state.words;
            nextWords[data.name] = word;
            this.setState({ words: nextWords })
        });
    }
    // delete method : 리스트 중 한개 삭제 
    _delete(id) {
        return fetch(`${databaseURL}/words/${id}.json`, {
            method: 'DELETE'
        }).then(res => {
            if (res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(() => {
            let nextWords = this.state.words;
            delete nextWords[id];
            this.setState({ words: nextWords })
        });
    }
    // 화면을 업데이트할지 결정하는 함수. 처음에만 사용하다가 삭제
    // shouldComponentUpdate(nextProps, nextState) {
    //     return (nextState.words != this.state.words)
    // }

    handleDialogToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    // component가 처음 마운트될 때 서버에서 리스트 가져옮. 
    componentDidMount() {
        this._get();
    }
    // 삭제 버튼 클릭시 서버로 삭제 요청 
    handleDelete = (id) => {
        this._delete(id);
    }
    //추가시 서버로 추가 요청 
    handleSubmit = () => {
        const word = {
            word: this.state.word,
            weight: this.state.weight
        }
        this.handleDialogToggle();
        // 필요한 속성 중 하나라도 비어 있는 경우 서버로 요청하지 않음. 
        if (!word.word && !word.weight) {
            return;
        }
        this._post(word);
    }

    //state의 내용에 변동이 있는 경우에만 render() 불림
    render() {
        // console.log(this.state.words);
        console.log(this.state.words);
        const { classes } = this.props;
        return (
            <div>
                {Object.keys(this.state.words).map(id => {
                    const word = this.state.words[id];
                    return (
                        <Card key={id}>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    가중치 :  {word.weight}
                                </Typography>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography variant='h5' component='h2'>
                                            {word.word}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button variant='contained' color='primary' onClick={() => this.handleDelete(id)}>삭제</Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    )
                })}
                <Fab color='primary' className={classes.fab} onClick={this.handleDialogToggle}>
                    <AddIcon></AddIcon>
                </Fab>
                <Dialog open={this.state.open} >
                    <DialogTitle>단어 추가</DialogTitle>
                    <DialogContent>
                        <TextField label='단어' type='text' name='word' value={this.state.word} onChange={this.handleValueChange} /><br />
                        <TextField label='가중치' type='text' name='weight' value={this.state.weight} onChange={this.handleValueChange} /><br />
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
export default withStyles(styles)(Word);