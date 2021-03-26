import React, { useState, useContext } from 'react';
import { isMobile } from '../../misc/DeviceCheck';

import PortfolioPiece from './PortfolioPiece';
import PortfolioContext from './../../context/PortfolioContext';
import CategoryTabs from './CategoryTabs/CategoryTabs';

import './Portfolio.scss';

const PortfolioDisplay = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { portfolio, landingImage } = useContext(PortfolioContext);
  const currentCategory = portfolio.length > 0 ? portfolio[activeTab].rows : [];

  let pieces = currentCategory.map(row => {
    const { images, names } = row;
    const html = [];
    const columns = 6;
    const currentCategoryName = portfolio[activeTab].title;

    for (const item in images) {
      let name = names[item];
      const src = images[item];

      const index = Number(item);
      const start = (columns / images.length) * index + 1;
      const end = (columns / images.length) * (index + 1) + 1;

      const marginRules = getMarginRules(start, end);

      const style = { gridColumn: `${start} / ${end}`, ...marginRules };

      const piece = (
        <PortfolioPiece
          key={name}
          src={src}
          name={name}
          category={currentCategoryName}
          style={style}
        />
      );

      html.push(piece);
    }

    return html;
  });
  pieces = pieces.flat();

  const categories = portfolio.map(group => group.title);
  const changeActiveTab = index => setActiveTab(index);

  return (
    <div id='portfolio-display'>
      <div className='landing-page-container'>
        <img id='landing-image' src={landingImage} alt='' />
      </div>
      <CategoryTabs
        names={categories}
        activeTab={activeTab}
        onChange={changeActiveTab}
      />
      <div className='portfolio-pieces'>{pieces}</div>
    </div>
  );
};

const getMarginRules = (start, end) => {
  if (isMobile()) return {};

  if (start === 1 && end === 4) {
    return { marginRight: '10px' };
  } else if (start === 4 && end === 7) {
    return { marginLeft: '10px' };
  } else if (start === 3) {
    return { margin: '0 10px' };
  } else if (start === 1 && end === 3) {
    return { marginRight: '10px' };
  } else if (start === 5) {
    return { marginLeft: '10px' };
  }

  return {};
};

export default PortfolioDisplay;
