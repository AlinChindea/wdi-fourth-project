import React from 'react';

const SearchBar = ({ handleSort, handleSearch }) => {
  return(
    <div className="row">
      <div className="col-md-6">
        <form className="form-group">
          <select className="form-control" onChange={handleSort}>
            <option value="target|desc">Target (High - Low)</option>
            <option value="target|asc">Target (Low - High)</option>
            <option value="name|asc">Name (A - Z)</option>
            <option value="name|desc">Name (Z - A)</option>
          </select>
        </form>
      </div>
      <div className="col-md-6">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch}/>
        </form>
      </div>
    </div>

  );
};

export default SearchBar;
