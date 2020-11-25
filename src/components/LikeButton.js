import React from 'react'


    class LikeButton extends React.Component {

state = {
    count: 0
};

handleIncrementClick = () => {
    this.setState({
        count: this.state.count + 1
    });
};

    render () {
        return(
            <div>
                
                <button onClick={this.handleIncrementClick} class="btn btn-outline-primary"><h4>{this.state.count}</h4>Likes</button>


            </div>
        )
    }
}
    

export default LikeButton 