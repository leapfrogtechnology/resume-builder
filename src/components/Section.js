import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Add } from '~/assets/image';
import * as storage from '~/storage/LocalStorage';
import { FormContext } from '~/components/FormContext';
import EmptyCard from '~/components/emptycard/EmptyCard';
import CardHeader from '~/components/cardheader/CardHeader';
import CardFooter from '~/components/cardfooter/CardFooter';
import { capitalize, camelToTitle, singularize } from '~/utilities/string';

const Section = ({ dataKey, component, children }) => {
  const context = useContext(FormContext);
  const [isAdding, setIsAdd] = useState(false);

  const title = capitalize(camelToTitle(dataKey));
  const preview = context.preview.get;
  const contextData = context.data.get[dataKey];

  const toggleAdd = () => setIsAdd(!isAdding);

  /**
   * Update the hidden state of skill.
   *
   * @param {string} key [ name of a particular section ].
   */
  const updateHiddenState = key => {
    const data = context.data.get;

    data[dataKey].find(({ name, hidden }, index) => {
      if (name === key) {
        const newState = !hidden;

        data[dataKey][index].hidden = newState;
        context.data.set(data); // new state of data
      }
    });
  };

  const deleteItem = id => {
    const data = context.data.get;
    const filteredData = data[dataKey].filter(item => item.id !== id);

    data[dataKey] = filteredData;
    context.data.set(prevState => ({ ...prevState, ...data }));

    storage.saveResume(context.data.get);
  };

  if ((!contextData || contextData.length < 1) && preview) {
    return <></>;
  }

  if (!contextData || contextData.length < 1) {
    return (
      <div className="content-block">
        <div className="card">
          <EmptyCard emptyMessage={`You do not have any ${title} yet.`}></EmptyCard>
          <CardFooter
            icon={Add}
            hide={preview}
            label={`Add another ${title}`}
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
          label={`Add another ${singularize(title)}`}
          showModal={isAdding}
          onAdd={toggleAdd}
          component={component}
          onClose={toggleAdd}
        />
      </div>
    </div>
  );
};

export default Section;

Section.propTypes = {
  dataKey: PropTypes.string,
  item: PropTypes.func,
  component: PropTypes.func,
  children: PropTypes.func,
};
