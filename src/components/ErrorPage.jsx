import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='min-h-screen grid place-items-center'>
      <p className='text-8xl'>Sorry, that page does not exist.</p>

      <p>Go to <Link to='/' className='text-blue-600 underline'>homepage</Link>.</p>
    </div>
  );
}

export default ErrorPage;