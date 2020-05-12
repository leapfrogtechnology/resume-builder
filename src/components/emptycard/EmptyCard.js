import React from 'react';
import PropTypes from 'prop-types';

const EmptyCard = ({ emptyMessage }) => {
  return <div className="empty-message">{emptyMessage}</div>;
};

EmptyCard.propTypes = {
  emptyMessage: PropTypes.string,
};

export default EmptyCard;
