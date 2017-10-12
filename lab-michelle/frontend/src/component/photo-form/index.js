import React from 'react';
import * as utils from '../../lib/utils';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      file: this.state.file,
      desc: this.state.desc,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//Just seeing if I can get desc to work first//
  handleChange(e) {
    this.setState({desc: e.target.value});
    // let {type, name} = e.target;
    // if (name === 'desc') this.setState({desc: e.target.value});
    // if (type === 'file') {
    //   let {files} = e.target;
    //   let path = files[0];
    //   this.setState({path});
    //
    //   utils.photoToDataUrl(path)
    //   .then()
    // let {type, name} = e.target;
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
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({desc: ''});
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
