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
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

class App extends Component {
	state = {
		ModalTitle: '',
		userName: '',
		userType: '',
		userStatus: '',
    modal: false,
    inData:[],
    

		
    columns: [
			{
				title: 'ID',
				field: 'id',
				type: 'numeric',
				cellStyle: {
					color: 'white'
				}
      },
    /*  {
				title: 'Name',
				field: 'name',
				cellStyle: {
					color: 'white'
				}
			},  */
			{
				title: 'DATE',
				field: 'date',
				cellStyle: {
					color: 'white'
				}
      },
/*      {
				title: 'Comments',
				field: 'comments',
				cellStyle: {
					color: 'white'
				}
      },   */
    /*  {
				title: 'Status',
				field: 'status',
				cellStyle: {
					color: 'white'
				}
			}, */
		],
		data: [
			{
        id: 1000,
        date:'22-4-2019',
        comments:'example1',
        status:'approved',
        name:'testing'
      },
      {
				id: 2000,
        date:'24-4-2019',
        comments:'example2',
        status:'approved',
        name:'testing'
      },
      {
				id: 3000,
        date:'26-4-2019',
        comments:'example3',
        status:'approved',
        name:'testing'
      },
      {
				id: 4000,
			  date:'28-5-2019',
        comments:'example4',
        status:'approved',
        name:'testing'
      },
      {
				id: 5000,
			  date:'29-6-2019',
        comments:'example5',
        status:'approved',
        name:'testing'
      },
      {
				id: 5000,
			  date:'29-6-2019',
        comments:'example6',
        status:'approved',
        name:'testing'
      },
      {
				id: 6000,
			  date:'29-6-2019',
        comments:'example7',
        status:'approved',
        name:'testing'
      },
      {
				id: 7000,
			  date:'29-6-2019',
        comments:'example8',
        status:'approved',
        name:'testing'
      },
      {
				id: 8000,
			  date:'29-6-2019',
        comments:'example9',
        status:'approved',
        name:'testing'
      },
      {
				id: 9000,
			  date:'29-6-2019',
        comments:'example10',
        status:'approved',
        name:'testing'
      },
      {
				id: 10000,
			  date:'29-6-2019',
        comments:'example11',
        status:'approved',
        name:'testing'
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
    open:false,
    detail:false,
    detailID:0,
    detailData:{},
    selectedDate:new Date('2014-08-18T21:11:54'),
    in1Data:[]
  };
  componentDidMount=()=>{
    this.getData();
  }
   getData= async()=>{
    let x;
    await  axios.get('/input')
      .then(res=>{
        console.log(res)
        
      
          x=res.data;
          console.log(x[0])
          console.log(x[0].id)    
          console.log(x[0].data)
          var myJsonString = JSON.stringify(x[0].data);
          console.log(myJsonString)
          this.setState({inData:res,in1Data:x[0].data})
      })

      
    }
  handleChange = event => {
   this.setState({in1:event.target.value});

  };
  onSearch=()=>{
    this.setState({isSearch:true});
  }

	render() {
    let mt;
    let det;
    if(this.state.isSearch===true){
    mt=(
      <div style={{width: '30%'}}>
      <MaterialTable
      onRowClick={(row,columns,event)=>{
        console.log(event)
        console.log(row);
        console.log(columns);
        
        this.setState({detail:true,detailData:columns})
        
      }}
      title="Results"
      icons="ADD"
      columns={this.state.columns}
      data={this.state.data}
      style={{ backgroundColor: '#e2ddf0', fontWeight: 'bold',borderStyle:'solid',borderWidth:'2px',borderRadius:'0px' }}
      options={{
        pageSize: 10,
        maxBodyHeight:480, 
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
    )
  }
  if(this.state.detail===true){
    det=(
      <div style={{
      width:'70%',
      borderStyle: 'solid',
      overflowY: 'scroll',
      borderWidth: '2px',
      
      }}>
            <div style={{paddingTop:'4px'}}>
                <span 
                style={{
                  marginLeft: '45%',
                  fontWeight: 'bolder',
                  fontSize: '30px'
                }}
                
                > Details</span>
            
            </div>
         <div style={{background:'#e2ddf0',paddingTop:'22px',paddingBottom:'22px',marginTop:'77px'}}>    
            <div style={{marginLeft:'50px'}}>
                <span >ID</span>
                <span style={{marginLeft:'100px'}}>{this.state.detailData.id}</span>            
            </div> 

              <div style={{marginTop:'15px',marginLeft:'50px'}}>
                <span style={{}}>Name</span>
                <span style={{marginLeft:'76px'}}>{this.state.detailData.name}</span>            
            </div>

              <div style={{marginTop:'15px',marginLeft:'50px'}}>
                <span style={{}}>Date</span>
                <span style={{marginLeft:'85px'}} >{this.state.detailData.date}</span>            
            </div>

              <div style={{marginTop:'15px',marginLeft:'50px'}}>
                <span style={{}}>Comments</span>
                <span style={{marginLeft:'42px'}}>{this.state.detailData.comments}</span>            
            </div>

              <div style={{marginTop:'15px',marginLeft:'50px'}}>
                <span>Status</span>
                <span style={{marginLeft:'76px'}}>{this.state.detailData.status}</span>            
            </div>
          </div>      



                </div>
            )
  }
		return (
			<div className="animated fadeIn" style={{background:'white'}}>

     <Row>
   {/*
      <Row>
        <Col>
      
        <div style={{marginLeft:'33%',marginTop:'4%',marginBottom:'4%'}}>
              <span style={{fontWeight:'bolder',fontSize:'30px'}}>
                Telemetry Home Page
              </span>
        </div>      
        </Col>
        </Row>
    */}

        <Row style={{borderStyle:'solid',borderWidth:'2px',background:'#e2ddf0'}}>
            <div style={{marginLeft:'4%'}}> 
             
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
                  {this.state.in1Data.map(option => (
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      value={this.state.selectedDate}
                      onChange={(date)=>{this.setState({selectedDate:date})}}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                      style={{width: '158.2px'}}
                    />
            </MuiPickersUtilsProvider>
                  
            </div>
            <div style={{marginLeft:'10%'}}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={this.state.selectedDate}
                    onChange={(date)=>{this.setState({selectedDate:date})}}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    style={{width: '158.2px'}}
                  />
              </MuiPickersUtilsProvider>
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
                    <div style={{marginLeft:'79%',height: '33px'}}>
                      <Fab variant="extended" aria-label="like" onClick={this.onSearch}>
                           <FaSearch style={{paddingRight:'6px'}} /> 
                                Search
                      </Fab>
                    </div>
        </div> 
            
            </div>

      </Row>
				<Row>
					<div  style={{
         
             display:'flex'
        
          }}>
					{mt}{det}
					</div>
				</Row>
        </Row>  


            
          
			</div>
		);
	}
}
export default App;

