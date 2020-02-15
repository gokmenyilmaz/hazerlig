import React, { Component } from 'react'
import {Menu,Icon} from 'antd'
import 'antd/dist/antd.css';
import SubMenu from 'antd/lib/menu/SubMenu';

export default class App extends Component {
    render() {
        return (
            <div>
            <Menu theme="dark" mode="inline" mode="horizontal" defaultSelectedKeys={['1']}>
              
              <Menu.Item key="1">
                <Icon type="bank" />
                <span>Ana Sayfa</span>
              </Menu.Item>

              <Menu.Item key="2">
                <Icon type="bank" />
                <span>Oyuncular</span>
              </Menu.Item>

              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="file-word" />
                    <span>Turnuvalar</span>
                  </span>
                }
              >

                <Menu.Item key="51">
                    <Icon type="bank" />
                    <span>*Turnuva Oluştur</span>
                </Menu.Item>

            
                <Menu.Item key="52">
                    <Icon type="bank" />
                    <span>İkili Takım</span>
                </Menu.Item>

              </SubMenu>
            
             
              <SubMenu
                key="sub6"
                title={
                  <span>
                    <Icon type="file-word" />
                    <span>Hazer Ligi</span>
                  </span>
                }
              >
               
                <Menu.Item key="62">
                    <Icon type="bank" />
                    <span>Hazer Süper Lig</span>
                </Menu.Item>

                <Menu.Item key="63">
                    <Icon type="bank" />
                    <span>Hazer 1.Lig</span>
                </Menu.Item>

                <Menu.Item key="64">
                    <Icon type="bank" />
                    <span>Hazer Terfi</span>
                </Menu.Item>

              </SubMenu>


            </Menu>
            </div>
        )
    }
}
