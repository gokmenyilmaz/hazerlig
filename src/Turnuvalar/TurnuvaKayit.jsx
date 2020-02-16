import React, { Component } from 'react'
import { Table, Button, Menu, Dropdown, Icon,Card, Tabs, DatePicker, Modal, Input } from 'antd';
import TurnuvaService from './TurnuvaService';

const { Column } = Table;

export default class TurnuvaKayit extends Component {



    constructor(props)
    {
        super(props);
    }

    state={
        data:[],
        isAdmin:true,
        isModalVisible:false
    }

    componentDidMount()
    {
        var veri=TurnuvaService.turnuvalariGetirAsync();
        this.setState({data:veri});
    }

    OnayIslem()
    {

    }

    OnModalFormAc()
    {
        this.setState({isModalVisible:true})
    }

    OnKayitOk()
    {
        this.setState({isModalVisible:false});

        
    }

    OnKayitCancel()
    {
        this.setState({isModalVisible:false})
    }

    render() {
        return (

            <Card>

                <Modal
                        title="Oyuncu Kayıt"
                        visible={this.state.isModalVisible}
                        onOk={()=>this.OnKayitOk()}
                        onCancel={()=>this.OnKayitCancel()}
                        >
                        <p><Input placeholder="AdSoyad"/></p>
                        <p><Input placeholder="Doğum Tarihi"/></p>
                        <p><Input placeholder="Email"/></p>
                        <p><Input placeholder="Tel"/></p>
                        <p><Input placeholder="Şehir"/></p>
                     
                </Modal>

                <Table size="small" style={{ whiteSpace: 'pre' }} rowKey={record => record.TurnuvaId} dataSource={this.state.data}>
                  
                    <Column title="TurnuvaAdi" dataIndex="TurnuvaAdi" />
                    <Column title="BaslamaTarihi" dataIndex="BaslamaTarihi" />
                    <Column title="TurnuvaTipi" dataIndex="TurnuvaTipi" />
                    <Column title="KayitBaslangicTarihi" dataIndex="KayitBaslangicTarihi" />
                    <Column title="KayitBitisTarihi" dataIndex="KayitBitisTarihi" />
                    
                    {this.state.isAdmin && <Column title="MaxOyuncuSayisi" dataIndex="MaxOyuncuSayisi" />}

                    <Column   title="Detay" key="action"
                        render={(text, record) => (
                            this.state.isAdmin &&

                            <div>
                                <Button onClick={()=>this.OnModalFormAc()} style={{ height: "36px", width: "100px", margin: "10px",background:"Red",color:"White" }}>
                                    Kaydol
                                </Button>

                                <Button onClick={()=>this.OnModalFormAc()} style={{ height: "36px", width: "120px", margin: "10px",background:"green",color:"White" }}>
                                    Katılım Listesi
                                </Button>
                            </div>
                           
                         
                        )}/>

                </Table>
            </Card>

            
        )
    }
}
