import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

import Custom from './module/Custom';


const customers = [{
  'id':'qhrua25',
  'image':'https://placeimg.com/64/64/1',
  'name':'김보겸',
  'email':'zz@zz.com',
  'job':'취준생'
},
{
  'id':'test2',
  'image':'https://placeimg.com/64/64/2',
  'name':'홍길동',
  'email':'aa@zaa.com',
  'job':'백수'
},
{
  'id':'arry3',
  'image':'https://placeimg.com/64/64/3',
  'name':'손흥민',
  'email':'qhrua25@naver.com',
  'job':'갓수'
}
]


class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return (<Custom
                      key={c.id}
                      id={c.id}
                      name={c.name}
                      image={c.image}
                      email={c.email}
                      job={c.job}
            />)
          })
        }
      </div>
      );
  }

}

export default App;
