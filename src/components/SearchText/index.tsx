import React, {
  ChangeEvent,
  KeyboardEvent,
  FC,
  useState,
  ReactNode,
} from 'react';
import loadingIcon from '../../icons/loading.svg';
import './index.scss';

export type SearchTextProps = {
  defaultValue?: string;
  value?: string;
  label?: ReactNode;
  placeholder?: string;
  onSearch?: (value: string) => void;
  searchLabel?: ReactNode;
  loading?: boolean;
};

/**
 * 搜索框组件 
 */
const SearchText: FC<SearchTextProps> = ({
  label,
  value: val,
  onSearch,
  placeholder,
  defaultValue,
  searchLabel = '搜索',
  loading,
}) => {
  const [value, setValue] = useState<string>(val || defaultValue || '');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value?.trim());
  };

  const handleSearch = () => {
    if (typeof onSearch === 'function') {
      onSearch(value);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && typeof onSearch === 'function') {
      onSearch(value);
    }
  };

  return (
    <div className="comp-search-text">
      {label ? <span className="label">{label}</span> : null}
      <input
        className="input"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
      {loading ? <span className="icon-loading"></span> : null}
      <span className="search-btn" onClick={handleSearch}>
        {searchLabel}
      </span>
    </div>
  );
};

export default SearchText;
