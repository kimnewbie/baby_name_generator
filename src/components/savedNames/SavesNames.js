import React from 'react'
import HistoricNames from './HistoricNames'
import FavoriteNames from './FavoriteNames';

function SavedNames(props) {
  const { favoriteNames, historicNames, addToFavs, setHistory, setFave, addHistoricName } = props;

  return (
    <section className="saved-names">
      <HistoricNames names={historicNames} addToFavs={addToFavs} setHistory={setHistory} setFave={setFave} addHistoricName={addHistoricName} />
      <FavoriteNames names={favoriteNames} />
    </section>
  )
}

export default SavedNames;