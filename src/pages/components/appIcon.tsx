import React, { ReactElement } from 'react';
import { Card, Row, Col, Space } from 'antd';
import style from './appIcon.module.css';
import {
  AppProps,
  IconFontCN,
  AppInfo,
  LineMaxAppSize,
  OuterDomain,
} from '@/config';

const AppIcon = (prop: AppProps) => {
  return (
    <div className={style.appDiv}>
      <div className={style.appItem}>
        <a
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
          }}
          href={
            window.location.hostname === OuterDomain ? prop.URL : prop.InnerURL
          }
        >
          <IconFontCN
            type={prop.IconType}
            className={style.app}
            key={prop.AppName}
          />
        </a>
      </div>
    </div>
  );
};

const AppIcons = (prop: any) => {
  const appSize = AppInfo.length;
  const appRows: ReactElement[] = [];
  for (let i: number = 0; i < Math.ceil(appSize / LineMaxAppSize); i++) {
    let remainSize = LineMaxAppSize;
    if ((i + 1) * LineMaxAppSize > appSize) {
      remainSize = appSize - i * LineMaxAppSize;
    }
    const appCols = [];
    for (let j: number = 0; j < remainSize; ++j) {
      const appInfoItem = AppInfo[i * LineMaxAppSize + j];
      appCols.push(
        <AppIcon
          AppName={appInfoItem.AppName}
          IconType={appInfoItem.IconType}
          InnerURL={appInfoItem.InnerURL}
          URL={appInfoItem.URL}
        />,
      );
    }
    for (let j: number = remainSize; j < LineMaxAppSize; j++) {
      appCols.push(i * LineMaxAppSize + j);
    }
    const appRow = (
      <Row key={i}>
        <Space>
          {appCols.map(e => {
            if (typeof e === 'number') {
              return <Col flex={1} key={e} />;
            } else {
              return <Col key={e.key}>{e}</Col>;
            }
          })}
        </Space>
      </Row>
    );
    appRows.push(appRow);
  }
  return (
    <div>
      {appRows.map(e => {
        return <div key={e.key}>{e}</div>;
      })}
    </div>
  );
};

export default AppIcons;
