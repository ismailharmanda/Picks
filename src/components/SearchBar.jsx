import React from "react";

class SearchBar extends React.Component {
  state = {
    inputText: "Hi there! What are you looking for?",
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.inputText}
              onChange={(e) => this.setState({ inputText: e.target.value })}
              placeholder={"Input the search term"}
              onClick={() => this.setState({ inputText: "" })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
