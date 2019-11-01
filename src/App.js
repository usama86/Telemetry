import React, { Component } from 'react';
import MaterialTable from 'material-table';
import './App.css';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import { FaSearch,FaPoll } from "react-icons/fa";
import Inputfile from './Components/InputFile'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
class App extends Component {
	state = {
		ModalTitle: '',
		userName: '',
		userType: '',
		userStatus: '',
		modal: false,

		columns: [
			{
				title: 'ID',
				field: 'id',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'DATE',
				field: 'date',
				cellStyle: {
					color: 'white'
				}
			},
		],
		data: [
			{
				id: 1000,
			  date:'22-4-2019'
      },
      {
				id: 2000,
			  date:'24-4-2019'
      },
      {
				id: 3000,
			  date:'26-4-2019'
      },
      {
				id: 4000,
			  date:'28-5-2019'
      },
      {
				id: 5000,
			  date:'29-6-2019'
      },
      {
				id: 5000,
			  date:'29-6-2019'
      },
      {
				id: 6000,
			  date:'29-6-2019'
      },
      {
				id: 7000,
			  date:'29-6-2019'
      },
      {
				id: 8000,
			  date:'29-6-2019'
      },
      {
				id: 9000,
			  date:'29-6-2019'
      },
      {
				id: 10000,
			  date:'29-6-2019'
			},
		
    ],
    columnss: [
			{
				title: 'ID',
				field: 'id',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
			},
			{
				title: 'DATE',
				field: 'date',
				cellStyle: {
					color: 'white'
				}
      },
      {
				title: 'Details',
				field: 'detail',
				cellStyle: {
					color: 'white'
				}
			},
		],
		datas: [
			{
				id: 1000,
        date:'22-4-2019',
        detail:'example1'
      },
      {
				id: 2000,
        date:'24-4-2019',
        detail:'example2'
      },
      {
				id: 3000,
        date:'26-4-2019',
        detail:'example3'
      },
      {
				id: 4000,
			  date:'28-5-2019',
        detail:'example4'
      },
      {
				id: 5000,
			  date:'29-6-2019',
        detail:'example5'
      },
      {
				id: 5000,
			  date:'29-6-2019',
        detail:'example6'
      },
      {
				id: 6000,
			  date:'29-6-2019',
        detail:'example7'
      },
      {
				id: 7000,
			  date:'29-6-2019',
        detail:'example8'
      },
      {
				id: 8000,
			  date:'29-6-2019',
        detail:'example9'
      },
      {
				id: 9000,
			  date:'29-6-2019',
        detail:'example10'
      },
      {
				id: 10000,
			  date:'29-6-2019',
        detail:'example11'
			},
		
    ],
    input1: [
      {
        value: 'USD',
        label: '$',
      },
      {
        value: 'EUR',
        label: '€',
      },
      {
        value: 'BTC',
        label: '฿',
      },
      {
        value: 'JPY',
        label: '¥',
      },
    ],
    in1:'',
    isSearch:false,
    open:false
	};
  handleChange = event => {
   this.setState({in1:event.target.value});

  };
  onSearch=()=>{
    this.setState({isSearch:true});
  }

	render() {
    let mt;
    if(this.state.isSearch===true){
    mt=(
      <MaterialTable
      onRowClick={()=>{this.setState({open:true})}}
      title="Results"
      icons="ADD"
      columns={this.state.columns}
      data={this.state.data}
      style={{ backgroundColor: '#e2ddf0', fontWeight: 'bold',borderStyle:'solid',borderWidth:'2px',borderRadius:'14px' }}
      options={{
        pageSize: 10,
        headerStyle: {
          backgroundColor: '#18262E',
          color: 'white'
        },
        searchFieldStyle: {
          color: 'black',
          // background:"green !important",
          paddingTop: '1%'
        },
        searchFieldAlignment: 'right',
        rowStyle: (x) => {
          if (x.tableData.id % 2) {
            return { backgroundColor: '#18262E', cursor: 'pointer' };
          } else {
            return { backgroundColor: '#24343d', cursor: 'pointer' };
          }
        },
        actionsCellStyle: {
          display: 'none'
        },
        actionsColumnIndex: {
          display: 'none'
        },
        cellStyle: {
          color: 'white'
        },
        filterCellStyle: {
          color: 'white'
        },
        paginationType: {
          color: 'white'
        },
        columnsButton: {
          display: false
        },
        loadingType: 'overlay'
      }}
      
    />
    )
  }
		return (
			<div className="animated fadeIn" style={{background:'white'}}>

     <Row>
   
      <Row>
        <Col>
        <div style={{marginLeft:'33%',marginTop:'4%',marginBottom:'4%'}}>
              <span style={{fontWeight:'bolder',fontSize:'30px'}}>
                Telemetry Home Page
              </span>
        </div>      
        </Col>
        </Row>
        <Row style={{borderStyle:'solid',borderWidth:'2px',background:'#e2ddf0',borderRadius:'35px'}}>
            <div style={{marginLeft:'4%',display:'row'}}>

          <div style={{display:'flex'}}>  
            <div>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.input1}
                    onChange={this.state.handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input1.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.input1}
                    onChange={this.state.handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input1.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.input1}
                    onChange={this.state.handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input1.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.input1}
                    onChange={this.state.handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input1.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
           
         </div> 
         <div style={{display:'flex'}}>
         <div >
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.input1}
                    onChange={this.state.handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input1.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.input1}
                    onChange={this.state.handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input1.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.input1}
                    onChange={this.state.handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input1.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.input1}
                    onChange={this.state.handleChange}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input1.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div> 
        </div>
        <div style={{marginBottom:'3%',height:'5%',marginTop:'2%'}}>
                    <div style={{marginLeft:'73%',height: '74px'}}>
                      <Fab variant="extended" aria-label="like" onClick={this.onSearch}>
                           <FaSearch style={{paddingRight:'6px'}} /> 
                                Search
                      </Fab>
                    </div>
        </div> 
            
            </div>

      </Row>
				<Row>
					<Col md="8" style={{
              width: '91%',
              marginLeft: '4%',
              marginTop:'4%'

          }}>
					{mt}
					</Col>
				</Row>
        </Row>  


              <div>

                
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className='modal'
                    open={this.state.open}
                    onClose={()=>{this.setState({open:false})}}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={this.state.open}>
                      <div className='paper'>
                      <span   onClick={()=>{this.setState({open:false})}} style={{fontWeight:'bolder',fontSize:'20px',marginLeft:'94%'}}  >X</span>
                      <MaterialTable
      onRowClick={()=>{this.setState({open:true})}}
      title="Results"
      icons="ADD"
      columns={this.state.columnss}
      data={this.state.datas}
      style={{ backgroundColor: '#e2ddf0', fontWeight: 'bold',borderStyle:'solid',borderWidth:'2px',borderRadius:'14px' }}
      options={{
        pageSize: 10,
        headerStyle: {
          backgroundColor: '#18262E',
          color: 'white'
        },
        searchFieldStyle: {
          color: 'black',
          // background:"green !important",
          paddingTop: '1%'
        },
        searchFieldAlignment: 'right',
        rowStyle: (x) => {
          if (x.tableData.id % 2) {
            return { backgroundColor: '#18262E', cursor: 'pointer' };
          } else {
            return { backgroundColor: '#24343d', cursor: 'pointer' };
          }
        },
        actionsCellStyle: {
          display: 'none'
        },
        actionsColumnIndex: {
          display: 'none'
        },
        cellStyle: {
          color: 'white'
        },
        filterCellStyle: {
          color: 'white'
        },
        paginationType: {
          color: 'white'
        },
        columnsButton: {
          display: false
        },
        loadingType: 'overlay'
      }}
      
    />
                      </div>
                    </Fade>
                  </Modal>
                </div>
          
			</div>
		);
	}
}
export default App;

