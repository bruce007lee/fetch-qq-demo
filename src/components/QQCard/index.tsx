import React, { FC } from 'react';
import { QQInfo } from '../../types';
import './index.scss';

export type QQCardProps = {
  data?: QQInfo;
};

/**
 * qq卡片组件
 */
const QQCard: FC<QQCardProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div className="comp-qq-card">
      <div className="header">
        <img className="img" src={data.qlogo} />
      </div>
      <div className="detail">
        <div className="name">{data.name}</div>
        <div className="qq">{data.qq}</div>
      </div>
    </div>
  );
};

export default QQCard;
