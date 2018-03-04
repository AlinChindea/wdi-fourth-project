import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({ handleSort, handleSearch }) => {
  return(
    <div className="row">
      <div className="col-md-4">
        <Link to="farmers/nearby"><button className="btn btn-primary">Find a  farmer near you</button></Link>
      </div>
      <div className="input-group col-md-4">
        <select className="form-control" onChange={handleSort}>
          <option value="target|desc">Target (High - Low)</option>
          <option value="target|asc">Target (Low - High)</option>
          <option value="name|asc">Name (A - Z)</option>
          <option value="name|desc">Name (Z - A)</option>
        </select>
      </div>
      <div className="input-group col-md-4">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
        <div className="input-group-append">
          <span className="input-group-text"><i className="fa fa-search"></i></span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
