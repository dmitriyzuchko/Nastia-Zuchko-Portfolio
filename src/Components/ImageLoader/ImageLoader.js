import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import './ImageLoader.scss';

const _loaded = {};

const ImageLoader = props => {
  const [loaded, setLoaded] = useState(_loaded[props.src]);

  const onLoad = () => {
    _loaded[props.src] = true;
    setLoaded(true);
  };

  let { className, loadedClassName, loadingClassName } = props;

  className = `${className} ${loaded ? loadedClassName : loadingClassName}`;
  return (
    <div className={!loaded ? 'loading-wrapper' : ''}>
      <LazyLoad offset={400} height={500} once>
        <img
          src={props.src}
          alt={props.alt}
          onClick={props.onClick}
          className={className}
          onLoad={onLoad}
        />
      </LazyLoad>
    </div>
  );
};

ImageLoader.defaultProps = {
  className: '',
  loadingClassName: 'img-loading',
  loadedClassName: 'img-loaded',
};

export default ImageLoader;
