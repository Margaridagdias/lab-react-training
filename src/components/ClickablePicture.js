import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    pictureGlasses: true,
  };

  togglePictureGlasses = () => {
    this.setState({
      pictureGlasses: !this.state.pictureGlasses, //faz com que picture troque entre true e false
    });
  };

  render() {
    return (
      <img
        src={this.state.pictureGlasses ? this.props.img : this.props.imgClicked}
        onClick={this.togglePictureGlasses}
      />
    );
  }
}
