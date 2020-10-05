import React from 'react';
import AppIcon from './components/appIcon';
import HomePageBox from './components/homeBox';
import style from './homepage.module.css';

const homepage = (prop: any) => {
  return (
    <div style={{ height: '100%' }}>
      <div className={style.homepage}>
        <HomePageBox />
      </div>
    </div>
  );
};

export default homepage;
