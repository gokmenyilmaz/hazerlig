import React, { Component } from 'react'
import { Menu, Icon } from 'antd'

import {BrowserRouter, Route, Switch,Link, Router } from 'react-router-dom'
import 'antd/dist/antd.css';
import SubMenu from 'antd/lib/menu/SubMenu';

import TurnuvaKayit from './Turnuvalar/TurnuvaKayit';
import AnaSayfa from './Home/AnaSayfa';
import Error from './Error'

export default class App extends Component {

  state={
 
    isAdmin:true,
   
}

  render() {
    return (
  
<BrowserRouter>

<section>
        <Menu theme="dark" mode="inline" mode="horizontal" defaultSelectedKeys={['1']}>

          <Menu.Item key="1">
            <Icon type="bank" />
            <span>Ana Sayfa</span>
            <Link to="./" />
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


            {this.state.isAdmin &&
            <Menu.Item key="55">
              <Icon type="bank" />
              <span>*Turnuva Oluştur</span>
              <Link to="./turnuvaolustur" />
            </Menu.Item>
            }


            <Menu.Item key="51">
              <Icon type="bank" />
              <span>Turnuva Kayıt</span>
              <Link to="./turnuvakayit" />
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
</section>

   
        <Switch>
            <Route path="./" exact component={AnaSayfa} />
            <Route path="./turnuvakayit" exact component={TurnuvaKayit} />
            <Route component={Error} />
        </Switch>
  
        </BrowserRouter>
    )
  }
}
