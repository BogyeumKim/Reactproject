import React from 'react';

class Custom extends React.Component{
    render(){
        return(

        <div>
            
            <CustomProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
            <CustomInfo email={this.props.email} job={this.props.job}/>
        </div>
        )

    }
}


class CustomProfile extends React.Component{
    render(){
        return(
        <div>
            <img src={this.props.image} alt="profile"/>
            <h2>{this.props.name}({this.props.id})</h2>

        </div>
        )
    }
}


class CustomInfo extends React.Component{
    render(){
        return(
            <div>
            <p>{this.props.email}</p>
            <p>{this.props.job}</p>

            </div>
        )
    }
}



export default Custom;