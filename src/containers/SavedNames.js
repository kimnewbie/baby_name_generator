import { connect } from "react-redux";
import SavedNames from '../components/savedNames';
import { addToFavorites } from '../store/actions';

const mapStateToProps = state => ({
  historicNames: state.history,
  favoriteNames: state.favorites
});

const mapDispatchToProps = dispatch => ({
  addToFavs: name => dispatch(addToFavorites(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedNames)