import React from 'react';
import { Row, Col, Space } from 'antd';
import style from './info.module.css';
import { IconFontCN } from '@/config';
const Info = (prop: any) => {
  return (
    <div style={{ userSelect: 'none' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img
          className={style.infoIMG}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          width={200}
          height={200}
        />
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 500,
        }}
      >
        Ryan
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '14px',
          marginTop: '5px',
          marginBottom: '2vh',
        }}
      >
        工头说今天的砖还没搬完
      </div>
    </div>
  );
};

export default Info;
