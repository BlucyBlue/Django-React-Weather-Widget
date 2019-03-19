import React from 'react';

const CustomLayout = (props) => {


    return(
        <div className="jumbotron background-filler">
            <div className="container">
                {props.children}
            </div>
            <div id="pageBottom"></div>
        </div>

    );

}

export default CustomLayout;
