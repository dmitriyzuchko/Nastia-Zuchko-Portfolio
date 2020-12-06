import React, { useState, useContext } from 'react';

import PortfolioPiece from './PortfolioPiece';
import PortfolioContext from './../../context/PortfolioContext';
import CategoryTabs from './CategoryTabs';

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
      const style = { gridColumn: `${start} / ${end}` };

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
      {/* {portfolioComponents} */}
    </div>
  );
};

export default PortfolioDisplay;
