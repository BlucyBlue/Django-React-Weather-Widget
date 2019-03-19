import React from 'react';
import axios from 'axios';

import Cities from '../components/Cities';

class AddedCity extends React.Component {

    state = {
        articles: []
    }



    componentDidMount() {
        axios.get('http://localhost:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
            })
    }

  handleClick = () => {
    var city_name = document.getElementById('myLocation').value;
    axios.post("http://localhost:8000/api/add_city/", {location: city_name})
    window.location = "http://localhost:3000/new_city/" + city_name;
  };

    handleLoad = () => {
        var bottom = document.getElementById("pageBottom");
        bottom.scrollIntoView();
    };

    render() {

        return (
            <div className="row" onLoad={this.handleLoad}>
                <div className="col-lg-9 col-sm-10">
                    <ul className="mainList">
                        {this.state.articles.map((article)=> {
                            return <Cities city={article} />
                        })}
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-2">

                    <div className="form-signin search-box" style={{position: 'fixed'}}>
                        <h1 className="h3 mb-3 font-weight-normal" style={{textAlign: 'center', fontSize:'22px', color: 'white'}}>Add location</h1><br></br>

                        <input type="text" name="location" id="myLocation" className="form-control" placeholder="City"></input><br></br>
                         <div className="btn btn-primary btn-block" onClick={this.handleClick}>Add</div>

                    </div>

                </div>
            </div>
        )

    }
}

export default AddedCity;