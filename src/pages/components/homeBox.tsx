import React from 'react';
import style from './homeBox.module.css';
import { Card, Divider } from 'antd';
import Info from './info';
import AppIcons from './appIcon';
const HomePageBox = (prop: any) => {
  return (
    <div className={style.boxPosition}>
      <div>
        <Info />
        <Divider />
        <AppIcons />
      </div>
    </div>
  );
};

export default HomePageBox;
