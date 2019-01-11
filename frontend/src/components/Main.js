import React from 'react';
const createDebug = require('debug')
const debug = createDebug('foo')

class Main extends React.Component {

  state = {
    imageURL: '',
  }

  handleUploadImage = ev => {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
      </form>
    );
  }
}

export default Main;