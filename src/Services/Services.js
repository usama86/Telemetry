import axios from 'axios';
let Fakedata= [
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

];
let input= [
    {
      "inp1": [
        {
          "value": "USD",
          "label": "input1data1"
        },
        {
          "value": "EUR",
          "label": "input1data2"
        },
        {
          "value": "BTC",
          "label": "input1data3"
        },
        {
          "value": "JPY",
          "label": "input1data4"
        }
      ],
      "input2": [
        {
          "value": "USD",
          "label": "input2data1"
        },
        {
          "value": "EUR",
          "label": "input2data2"
        },
        {
          "value": "BTC",
          "label": "input2data3"
        },
        {
          "value": "JPY",
          "label": "input2data4"
        }
      ],
      "input3": [
        {
          "value": "USD",
          "label": "$"
        },
        {
          "value": "EUR",
          "label": "€"
        },
        {
          "value": "BTC",
          "label": "฿"
        },
        {
          "value": "JPY",
          "label": "¥"
        }
      ],
      "input4": [
        {
          "value": "USD",
          "label": "$"
        },
        {
          "value": "EUR",
          "label": "€"
        },
        {
          "value": "BTC",
          "label": "฿"
        },
        {
          "value": "JPY",
          "label": "¥"
        }
      ],
      "input5": [
        {
          "value": "USD",
          "label": "$"
        },
        {
          "value": "EUR",
          "label": "€"
        },
        {
          "value": "BTC",
          "label": "฿"
        },
        {
          "value": "JPY",
          "label": "¥"
        }
      ],
      "input6": [
        {
          "value": "USD",
          "label": "$"
        },
        {
          "value": "EUR",
          "label": "€"
        },
        {
          "value": "BTC",
          "label": "฿"
        },
        {
          "value": "JPY",
          "label": "¥"
        }
      ],
      "input7": [
        {
          "value": "USD",
          "label": "$"
        },
        {
          "value": "EUR",
          "label": "€"
        },
        {
          "value": "BTC",
          "label": "฿"
        },
        {
          "value": "JPY",
          "label": "¥"
        }
      ],
      "input8": [
        {
          "value": "USD",
          "label": "$"
        },
        {
          "value": "EUR",
          "label": "€"
        },
        {
          "value": "BTC",
          "label": "฿"
        },
        {
          "value": "JPY",
          "label": "¥"
        }
      ]
    }
  ];

export const getAllInputData = payload => {
    const URL = '/input';
    return axios(URL, {
      method: 'GET',
      headers: {
        'content-type': 'application/json', // whatever you want
      },
    })
      .then(response => {
          let x=response.data;
            return(response.data);
            //instead of input return real data.
    
    })
      .catch(error => {
        throw error;
      });
  };

  export const searchData = payload => {
    const URL = 'http://localhost:3000/data';
    return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json', // whatever you want
      },
      data: payload,
    })
      .then(response =>{
        //change fake data to actual data
        return(Fakedata)
      }
    
    )
      .catch(error => {
        throw error;
      });
  };


