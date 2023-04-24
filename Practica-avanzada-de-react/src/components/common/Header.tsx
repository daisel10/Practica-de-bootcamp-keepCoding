
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import { Button, Space, } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';


const Header: React.FC =()=>{
    const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
    return (
            <Space wrap >
              <Link to="newAdverts"><Button type="primary" size={size}>new adds
              </Button></Link>
              <Button size={size}><NavLink to="/home">Adverts</NavLink></Button>

            </Space>
            
      );

   
}

export default Header