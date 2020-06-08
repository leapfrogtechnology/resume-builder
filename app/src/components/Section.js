import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';

import { Add } from '~/assets/image';
import { FormContext } from '~/components/FormContext';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';

import { capitalize } from '~/utilities/string/capitalize';
import { camelToTitle, transformKey, singularize } from '~/utilities/string/common';

const Section = ({ dataKey, component, children }) => {
  const context = useContext(FormContext);
  const [isAdding, setIsAdd] = useState(false);

  const title = capitalize(camelToTitle(transformKey(dataKey)));
  const emptyTitle = camelToTitle(dataKey).toLowerCase();
  const preview = context.preview.get;
  const contextData = context.data.get[dataKey] ? context.data.get[dataKey].filter(item => !item.isDeleted) : [];

  const toggleAdd = () => setIsAdd(!isAdding);

  const updateHiddenState = id => {
    let itemIndex;
    const data = { ...context.data.get };

    const item = data[dataKey].find((item, index) => {
      if (item.id === id) {
        itemIndex = index;

        return item;
      }
    });

    const prevState = item.hidden;

    item.hidden = !prevState;

    data[dataKey][itemIndex] = item;

    context.updateCV(data);
  };

  const deleteItem = id => {
    let itemIndex;
    const data = { ...context.data.get };

    const item = data[dataKey].find((item, index) => {
      if (item.id === id) {
        itemIndex = index;

        return item;
      }
    });

    item.isDeleted = true;
    item.deletedOn = new Date();

    data[dataKey][itemIndex] = item;

    context.updateCV(data);
  };

  if (preview) {
    const data = contextData.filter(d => !d.hidden);

    if (data.length < 1) {
      return <></>;
    }
  }

  if ((!contextData || contextData.length < 1) && preview) {
    return <></>;
  }

  if (!contextData || contextData.length < 1) {
    return (
      <div className="content-block">
        <div className="card">
          <EmptyCard emptyMessage={`You do not have any ${title.toLowerCase()} yet.`}></EmptyCard>
          <CardFooter
            icon={Add}
            hide={preview}
            label={`Add a ${singularize(emptyTitle)}`}
            showModal={isAdding}
            onAdd={toggleAdd}
            component={component}
            onClose={toggleAdd}
            modifier="empty"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="content-block">
      <div className="card">
        <CardHeader title={title} />
        {children({ data: contextData, deleteItem, updateHiddenState, preview })}
        <CardFooter
          icon={Add}
          hide={preview}
          label={`Add another ${singularize(emptyTitle)}`}
          showModal={isAdding}
          onAdd={toggleAdd}
          component={component}
          onClose={toggleAdd}
        />
      </div>
    </div>
  );
};

Section.propTypes = {
  dataKey: PropTypes.string,
  item: PropTypes.func,
  component: PropTypes.func,
  children: PropTypes.func,
};

export default Section;
