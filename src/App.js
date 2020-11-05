import React, { Component } from 'react';
import Custom from './module/Custom';
import './App.css';
import Paper from '@material-ui/core/Paper'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import {withStyles} from '@material-ui/core/styles';


const styles ={
  root:{
    width: "100%",
    overflowX:"auto"
    },
  test:{
    minWidth:1080
  }
}


const customers = [{
  'id':'1',
  'image':'https://placeimg.com/64/64/1',
  'name':'김보겸',
  'email':'zz@zz.com',
  'job':'취준생'
},
{
  'id':'2',
  'image':'https://placeimg.com/64/64/2',
  'name':'홍길동',
  'email':'aa@zaa.com',
  'job':'백수'
},
{
  'id':'3',
  'image':'https://placeimg.com/64/64/3',
  'name':'손흥민',
  'email':'qhrua25@naver.com',
  'job':'갓수'
}
]


class App extends Component{
  render(){
    const { classes } = this.props;
    return(
      // 랜더해줄때 div로 해야하지만 Paper로도 감싸줄수있다함.. Material Ui할땐 페이퍼로 적용시키라함..
       <Paper className={classes.root}>  
         <Table className={classes.test}>
          <TableHead >
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>

           <TableBody>
             { customers.map(c => { return (<Custom key={c.id} id={c.id} name={c.name} image={c.image} email={c.email} job={c.job}/>)})}
           </TableBody>
        </Table>
      </Paper>
      );
  }

}

export default withStyles(styles)(App);
