import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: 'Customers',
};

function customersPage() {
  return (
    <div>
        <p>Customers Page</p>
    </div>
  )
}

export default customersPage