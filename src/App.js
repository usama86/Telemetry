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
import * as inData from './Services/Services';

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
    in2:'',
    in3:'',
    in4:'',
    in5:'',
    in6:'',
    in7:'',
    in8:'',
    isSearch:false,
    open:false,
    detail:false,
    detailID:0,
    detailData:{},
    selectedDate:new Date('2014-08-18T21:11:54'),
    selectedDate1:new Date('2014-08-18T21:11:54'),
    input5Data:[
      {
        value: 'active',
        label: 'Active',
      },
      {
        value: 'archive',
        label: 'Archive',
      }
    ],
    in1Data:[
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
    in2Data:[
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
    in3Data:[
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
    in4Data:[
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
    in5Data:[
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
    in6Data:[
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
    in7Data:[
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
    in8Data:[
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
    recievedata:[],
    height:0
    
  };
  componentDidMount=()=>{
    this.getData();
    console.log(document.body.scrollHeight)
    console.log(window.screen.height);
    var height=window.screen.height;
    var hnew=height*0.47;
    console.log(hnew);
    this.setState({height:hnew})
  }
   getData= async()=>{
    let x;
    //send correct data here and it'll set it to the inputs
    x=await inData.getAllInputData();
      
       
          console.log(x)
          console.log(x[0].inp1)
//console.log(x[0].id)    
   //      console.log(x[0].data[0])
  //        var myJsonString = JSON.stringify(x[0].data);
   //      console.log(myJsonString)
  /* 
          this.setState({inData:x,in1Data:x[0].inp1})
          this.setState({inData:x,in2Data:x[0].input2})
          this.setState({inData:x,in3Data:x[0].input3})
          this.setState({inData:x,in4Data:x[0].input4})
        //  this.setState({inData:x,in5Data:x[0].input5})
          this.setState({inData:x,in6Data:x[0].input6})
          this.setState({inData:x,in7Data:x[0].input7})
          this.setState({inData:x,in8Data:x[0].input8})
        */  
   
      
    }
  handleChange = event => {
   this.setState({in1:event.target.value});

  };
  onSearch=async ()=>{
  var    in1=this.state.in1;
  var      in2=this.state.in2;
  var      in3=this.state.selectedDate;
  var       in4=this.state.selectedDate1;
  var       in5=this.state.in5;
  console.log(in5)
  var        in6=this.state.in6;
  var        in7=this.state.in7;
  var        in8=this.state.in8;
if((in5) === "")
{
  alert('please select the Status(Active/Archive)');
}
else if((in5) === "active")
{
  
    var payload = {
      
      in1:this.state.in1,
      in2:this.state.in2,
      in3:this.state.selectedDate,
      in4:this.state.selectedDate1,
      in5:this.state.in5,
      in6:this.state.in6,
      in7:this.state.in7,
      in8:this.state.in8,
    };
    
    let response = await inData.getactivequeries(payload);
    
    //send correct data here and it'll set it to the result table
    let x=response;
    console.log(x);
   this.setState({recievedata:x})    


    this.setState({isSearch:true});
  }
  else if((in5) === "archive")
{
    var payload = {
      
      in1:this.state.in1,
      in2:this.state.in2,
      in3:this.state.selectedDate,
      in4:this.state.selectedDate1,
      in5:this.state.in5,
      in6:this.state.in6,
      in7:this.state.in7,
      in8:this.state.in8,
    };
    
    let response = await inData.getarchivequeries(payload);
   
    //send correct data here and it'll set it to the result table
    let x=response;
    console.log(x);
   this.setState({recievedata:x})    


    this.setState({isSearch:true});
  }
 
  }

	render() {
    let mt; 
    let det;
    console.log(this.state.in1) 
   
    mt=( 
      <div className='tableWidth' style={{width: '30%'}}>
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
      data={this.state.recievedata}
      style={{ backgroundColor: '#e2ddf0', fontWeight: 'bold',borderStyle:'solid',borderWidth:'2px',borderRadius:'0px' }}
      options={{
        pageSize: 10,
        maxBodyHeight:this.state.height, 
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
         <div className='detailInnerDiv' style={{background:'#e2ddf0',paddingTop:'22px',paddingBottom:'22px',marginTop:'77px'}}>    
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
             
          <div className='outerDiv' style={{display:'flex'}}>  
            <div>
               <TextField 
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.in1}
                    onChange={(event)=>{this.setState({in1:event.target.value})}}
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
            <div style={{marginLeft:'10%'}} className='text1'>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.in2}
                    onChange={(event)=>{this.setState({in2:event.target.value})}}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.in2Data.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div style={{marginLeft:'10%'}} className='text2'>
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
            <div style={{marginLeft:'10%'}} className='text3'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={this.state.selectedDate1}
                    onChange={(date)=>{this.setState({selectedDate1:date})}}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    style={{width: '158.2px'}}
                  />
              </MuiPickersUtilsProvider>
            </div>
           
         </div> 
         <div style={{display:'flex'}} className='lowerOuterDiv'>
         <div className='text0'  >
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.in5}
                    onChange={(event)=>{
                      this.setState({
                      in5:event.target.value})
                    console.log(event.target.value)
                    }}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      }, 
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.input5Data.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div className='text4' style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.in6}
                    onChange={(event)=>{this.setState({in6:event.target.value})}}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.in6Data.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div className='text5' style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.in7}
                    onChange={(event)=>{this.setState({in7:event.target.value})}}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.in7Data.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div>
            <div className='text6' style={{marginLeft:'10%'}}>
               <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className='textfield'
                    value={this.state.in8}
                    onChange={(event)=>{this.setState({in8:event.target.value})}}
                    SelectProps={{
                      MenuProps: {
                        className: "inMenu", 
                      },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                  {this.state.in8Data.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  
            </div> 
        </div>
        <div style={{marginBottom:'3%',height:'5%',marginTop:'2%'}}>
                    <div className='searchBarMargin' style={{marginLeft:'70%',height: '33px'}}>
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

