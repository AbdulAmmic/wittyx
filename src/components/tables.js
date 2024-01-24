import React, { useState } from 'react';

const Table = ({ columns, data, searchable }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter((row) => {
    const values = Object.values(row).map((value) =>
      String(value).toLowerCase()
    );
    return values.some((value) => value.includes(searchQuery.toLowerCase()));
  });

  return (
    <div className='table-div'>
      {searchable && (
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      )}
      {filteredData.length === 0 ? (

       <center> <p>Data not found</p> </center>
      ) : (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>{row[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
