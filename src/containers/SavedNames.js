import { connect } from "react-redux";
import SavedNames from '../components/savedNames';
import { addHistoricName, addToFavorites, setFavoriteName, setHistoricName } from '../store/actions';

const mapStateToProps = (state) => ({
  historicNames: state.history,
  favoriteNames: state.favorites
});

const mapDispatchToProps = (dispatch) => ({
  addToFavs: name => dispatch(addToFavorites(name)),
  addHistoricName: name => dispatch(addHistoricName(name)),
  setHistory: name => dispatch(setHistoricName(name)),
  setFave: name => dispatch(setFavoriteName(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedNames)