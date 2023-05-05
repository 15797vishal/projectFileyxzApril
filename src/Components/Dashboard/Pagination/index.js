import  React, { useState } from 'react';
import { Pagination } from '@mui/material';
import "./style.css";

export default function PaginationComponent() {
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div >
      <Pagination className='paginationCompo'
       count={10}
       page={page} 
       onChange= { (event,value)=>handlePageChange(event,value)}
       />
    </div>
  );
}