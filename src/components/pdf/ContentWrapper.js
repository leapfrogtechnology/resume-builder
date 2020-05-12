import React from 'react';
import PropTypes from 'prop-types';

/**
 * HOC that renders other components.
 */
const ContentWrapper = ({ heading, data, WrappedComponent, experience = null }) => {
  if (!data) {
    return <></>;
  }

  const filteredData = data.filter(value => !value.hidden); // Remove hidden data

  if (filteredData.length < 1) {
    return <></>;
  } else {
    if (experience) {
      return <WrappedComponent heading={heading} data={filteredData} experience={experience} />;
    }

    return <WrappedComponent heading={heading} data={filteredData} />;
  }
};

ContentWrapper.propTypes = {
  heading: PropTypes.string,
  data: PropTypes.array,
  WrappedComponent: PropTypes.func,
  experience: PropTypes.object || null,
};

export default ContentWrapper;
