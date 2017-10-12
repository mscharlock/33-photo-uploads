import React from 'react';
import * as utils from '../../lib/utils';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      path: this.state.path,
      desc: this.state.desc,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {type, name} = e.target;
    if (name === 'desc') this.setState({desc: e.target.value});
    if (type === 'file') {
      let {files} = e.target;
      let path = files[0];
      this.setState({path});

      utils.photoToDataUrl(path)
      .then()
    }// let {type, name} = e.target;
    // if(name === 'desc') this.setState({desc: e.target.value});
    // if(type === 'file') {
    //   let {files} = e.target;
    //   let avatar = files[0];
    //   this.setState({avatar});
    //
    //   utils.photoToDataUrl(avatar)
    //   .then(preview => this.setState({preview}))
    //   .catch(console.error);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(yay)
    // this.props.onComplete(this.state); some kind of function
  }

  render() {
    return (
      <form
      className = "photo-form"
      onSubmit ={this.handleSubmit}>

      <img src={this.state.preview} style={{'width': '25%'}}/>
      <input
      type="file"
      name="photo"
      onChange={this.handleChange}/>

      <input
      name="desc"
      value={this.state.desc}
      onChange={this.handleChange}>
      </input>

      <button type="submit">Upload photo</button>
      </form>
    );
  }
}

export default PhotoForm;
