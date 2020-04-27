import React from 'react';
import Card from '~/components/card/Card';

const ContentBlock = ({ children }) => {
  return (
    <div className="content-block">
      <Card children={children} showModal={false}/>
    </div>
  );
}

export default ContentBlock;
