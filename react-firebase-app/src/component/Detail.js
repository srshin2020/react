import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useParams } from 'react-router-dom';

//userParams 를 사용하기위해 함수형 사용
function Detail() {

    let params = useParams();
    return (
        <Card>
            <CardContent>
                ID: {params.textID}
            </CardContent>
        </Card>
    )
}

export default Detail;