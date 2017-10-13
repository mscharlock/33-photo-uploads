import React from 'react';
import * as utils from '../../lib/utils';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.photo ?
      {...this.props.photo, preview: ''} :
      {description: '', preview: '', photo: null};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name} = e.target;
    if (name === 'description') this.setState({description: e.target.value});
    if (name === 'photo') {
      let {files} = e.target;
      let photo = files[0];
      this.setState({photo});

      utils.photoToDataUrl(photo)
      .then(preview => this.setState({preview}))
      .catch(console.error);
    }
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
