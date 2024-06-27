import React from "react";
import PropTypes from "prop-types";

export const BootstrapCard = (props) => {
    return(
        <div className="card col-12 col-md" style={{width:"400px"}}>
        <img className="card-img-top" src="https://www.t-mobile.com/news/_admin/uploads/2020/07/nr-Ibram_Kendi-7-10-20-500x325.png" alt="Card image"/>
        <div className="card-body">
          <h4 className="card-title">Card Title</h4>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra nec dui vitae lobortis. Aenean id porttitor massa, et elementum orci. Nullam efficitur purus eu.</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    )
}