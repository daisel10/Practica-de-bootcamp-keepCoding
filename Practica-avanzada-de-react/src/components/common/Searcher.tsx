
import { Input, Space } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from '../../redux/action/action';
const { Search } = Input;


// components






const Searcher = () => {
  const dispatch = useDispatch();

  const onSearch = (value: string) => dispatch(setSearch(value));
  
  return(
 
  <Space direction="vertical">
    
    <Search
      placeholder="buscar por una etiqueta"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />

  </Space>
)};

export default Searcher;
