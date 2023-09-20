import { connect } from "react-redux";
import Buttons from '../components/buttons';
import { setCurrentForename, setCurrentSurname, setFilterForeNameChar, setFilterGender, addHistoricName, addToFavorites } from '../store/actions';

const mapStateToProps = state => ({
  firstCharFilter: state.filters.foreNameChar,
  isBoyFilter: state.filters.isBoy,
  currentName: state.currentName
})

const mapDispatchToProps = dispatch => ({
  addToFavs: name => dispatch(addToFavorites(name)),
  addHistoricName: name => dispatch(addHistoricName(name)),
  setCurrentForename: name => dispatch(setCurrentForename(name)),
  setCurrentSurname: name => dispatch(setCurrentSurname(name)),
  setForeNameFilter: char => dispatch(setFilterForeNameChar(char)),
  setGenderFilter: gender => dispatch(setFilterGender(gender))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons)