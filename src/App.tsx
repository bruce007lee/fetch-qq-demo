import React, { FC, useState } from 'react';
import SearchText from './components/SearchText';
import QQCard from './components/QQCard';
import QQApiService from './components/QQApiService';
import { QQInfo } from './types';
import './App.scss';

type FieldInfo = { label: string; value: any };

//qq号是4-15位?忘记了
const qqReg = /^[0-9]{4,15}$/;

const App: FC<{}> = () => {
  const [info, setInfo] = useState<QQInfo | null>(null);
  const [searching, setSearching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * 前端校验q号
   */
  const validQQ = (value: string): boolean => {
    if (!value) {
      setError('请输入qq号后查询');
      return false;
    }

    if (!qqReg.test(value)) {
      setError('请输入正确的qq号,4-15位数字');
      return false;
    }

    return true;
  };

  /**
   * 查询qq信息
   */
  const handleSearch = async (value: string) => {
    if (searching) {
      return;
    }

    //先做前端valid
    if (!validQQ(value)) {
      return;
    }

    setError(null);
    setInfo(null);
    setSearching(true);
    try {
      const info = await QQApiService.getQQInfo({
        qq: value,
      });
      //console.log('qq info:', info);
      setInfo(info);
    } catch (e) {
      setError(e.message);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="app">
      <div className="app-header">
        <h2>QQ号查询</h2>
      </div>
      <div className="app-content">
        <div className="section">
          <SearchText
            onSearch={handleSearch}
            placeholder="请输入qq号查询"
            label="QQ:"
            loading={searching}
          ></SearchText>
        </div>
        <div className="section">
          {error ? <div className="error-info">{error}</div> : null}
          <div>{info ? <QQCard data={info} /> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
