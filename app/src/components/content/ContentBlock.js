import React from 'react';
import PropTypes from 'prop-types';
import Card from '~/components/card/Card';

const ContentBlock = ({ childComponent }) => {
  return (
    <div className="content-block">
      <Card children={childComponent} showModal={false} />
    </div>
  );
};

ContentBlock.propTypes = {
  childComponent: PropTypes.func,
};

export default ContentBlock;
