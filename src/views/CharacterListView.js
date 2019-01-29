import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getPeople } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPeople();
  }

  render() {
    console.log(this.props);
    if (this.props.fetching) {
      return <p>Fetching....</p>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  {
    getPeople
  }
)(CharacterListView);
