import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const databaseURL = "https://react-firebase-app-17eb1-default-rtdb.firebaseio.com/";
class Word extends React.Component {
    constructor() {
        super();
        this.state = {
            words: []
            // [{"weight":5,"word":"사랑"},{"weight":3,"word":"영혼"},{"weight":7,"word":"기적"}]
        }
    }
    _get() {
        fetch(`${databaseURL}/words.json`).then(res => {
            if (res.status != 200) {
                console.log(res.statusText);
            }
            return res.json();
        }).then(words => { 
            console.log(words);
            this.setState({ words: words }) });
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.words != this.state.words)
    }
    componentDidMount() {
        this._get();
    }
    render() {
        // console.log(this.state.words);
        return (
            <div>
                {this.state.words.map(( word, index )=>{
                    return(
                <Card key={index}>
                    <CardContent> 
                        <Typography  color ='textSecondary' gutterBottom>
                            가중치 :  {word.weight}
                        </Typography> 
                        <Typography variant='h5' component='h2'>
                            {word.word} 
                        </Typography>
                    </CardContent>
                </Card>
                )
                })}
            </div>
        )
    }
}
export default Word;