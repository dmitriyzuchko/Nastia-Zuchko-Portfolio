import React from 'react';
import './CategoryTabs.scss';

const CategoryTabs = ({ names, activeTab, onChange }) => {
  names = [
    'yes',
    'three',
    'four',
    'seven',
    'fifty',
    'no',
    'yes again',
    'keep going wider',
    'even more',
    'and more',
    'and more',
    'and more',
  ];
  const tabs = names.map((name, index) => {
    const onClick = () => onChange(index);
    const isActive = index === activeTab;
    const classes = 'tab ' + (isActive ? 'active' : '');

    return (
      <div className={classes} key={name} onClick={onClick}>
        {name}
      </div>
    );
  });

  return <div className='portfolio-tabs'>{tabs}</div>;
};

CategoryTabs.defaultProps = {
  names: [],
};

export default CategoryTabs;
