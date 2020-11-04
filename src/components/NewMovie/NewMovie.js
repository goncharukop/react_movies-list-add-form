import React, { Component } from 'react';
import PropTypes from 'prop-types';

const fields = [
  'title',
  'description',
  'imgUrl',
  'imdbUrl',
  'imdbId',
];

const cardFields = fields.reduce((acc, name) => {
  return {
    ...acc,
    [name]: '',
  };
}, {});

export class NewMovie extends Component {
  state = {
    title: 's',
    description: 's',
    imgUrl: 's',
    imdbUrl: 's',
    imdbId: 's',
  }

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }));
    // console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const movie = { ...this.state };

    this.props.addMovie(movie);

    this.setState({
      newMovieFields: cardFields,
    });
  }

  setDefaultForm = () => {
    this.setState({
      title: '',
      description: '',
      imgUrl: '',
      imdbUrl: '',
      imdbId: '',
    });
  };

  render() {
    const { handleChange } = this;

    return (
      <form
        className="ui large form"
        onSubmit={this.handleSubmit}
        name="newMovie"
        method="post"
      >
        { Object.entries(this.state).map(([fieldName, value]) => {
          // console.log(value);

          return (
            <>
              <label htmlFor="fieldName">{fieldName}</label>
              <input
                key={fieldName}
                type="text"
                name="fieldName"
                value={value}
                onChange={handleChange}
                required
              />
            </>
          );
        })}

        {/* <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="imgUrl">ImgUrl</label>
        <input
          type="url"
          name="imgUrl"
          placeholder="https://example.com"
          value={imgUrl}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="imdbUrl">ImdbUrl</label>
        <input
          type="url"
          name="imdbUrl"
          value={imdbUrl}
          placeholder="https://example.com"
          onChange={this.handleChange}
          required
        />

        <label htmlFor="imdbId">ImdbId</label>
        <input
          type="text"
          name="imdbId"
          value={imdbId}
          onChange={this.handleChange}
          required
        /> */}

        <button
          className="ui green button"
          type="submit"

        >
          Add movie
        </button>

        <button
          className="ui grey button"
          type="button"
          onClick={this.setDefaultForm}
        >
          Clear form
        </button>
      </form>
    );
  }
}

NewMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
