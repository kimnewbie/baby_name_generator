import React from 'react'
import HistoricNames from './HistoricNames'
import FavoriteNames from './FavoriteNames';

function SavedNames(props) {
  const { favoriteNames, historicNames, addToFavs } = props;
  return (
    <section className="saved-names">
      <HistoricNames names={historicNames} addToFavs={addToFavs} />
      <FavoriteNames names={favoriteNames} />
    </section>
  )
}

export default SavedNames;