import { Component } from "react";

class CustomerDelete extends Component {
    deleteCustomer (id) {
        const url='/api/customer/' + id;
        fetch(url, {method:'delete'});
        this.props.refreshState();
    }

    render () {
        return(
            <button onClick={(e)=>this.deleteCustomer(this.props.id)}>삭제</button>
        )
    }
}

export default CustomerDelete; 
