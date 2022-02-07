import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useParams } from 'react-router-dom';

function Detail() {


    let params = useParams();
    // console.log(this.props.match.params);
    return (
        <Card>
            <CardContent>
                ID: {params.textID}
                {/* {this.props.match.params.textID} */}
            </CardContent>
        </Card>
    )
}

export default Detail;