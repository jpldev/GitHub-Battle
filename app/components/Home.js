var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className='home-container'>
                    <h1>Git Hub Battle: Battle your friends </h1>
                </div>

                <Link className='button' to='/battle'>
                    Battle
                </Link>
            </div>
        )
    }
}

module.exports = Home;