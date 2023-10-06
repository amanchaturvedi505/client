import React from 'react'
import Layout from '../../components/layouts/Layout'
import AdminMenu from '../../components/layouts/AdminMenu'

const AdminOrders = () => {
  return (
<Layout>
    <div className="row">
        <div className="col-md-3">
            <AdminMenu/>
        </div>
        <div className="col-md-9">
            <div className="text-center">
                All orders
            </div>
        </div>
    </div>
</Layout>
  )
}

export default AdminOrders
