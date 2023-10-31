import React from 'react';
import { Pagination } from '@mui/material';
import AccountsReviewtable from './Accountsreviewtable';

const Accountreview = () => {
  return (
    <div>
        <h4 className='font-semibold my-5 pl-2'>Accounts Review</h4>   
        <AccountsReviewtable />          
        <div className='my-5'>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
    </div>
  )
}

export default Accountreview