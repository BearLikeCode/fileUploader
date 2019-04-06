import React from 'react';
import s from './Main.scss';

export class Main extends React.Component {

  handleUploadImage = ev => {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    })
  };

  render() {
    return (
        <form className={s.block} onSubmit={this.handleUploadImage}>
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
