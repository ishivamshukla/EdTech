import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../store/store';
import { DataGrid, GridColDef } from '@mui/x-data-grid'

function StudentGrid() {

  const { students } = useAppSelector((state) => state.student);
  console.log(students);

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'name' },
    { field: 'fatherName', headerName: 'fatherName' },
    { field: 'motherName', headerName: 'motherName' },
    { field: 'dateOfBirth', headerName: 'dateOfBirth' },
    { field: 'course', headerName: 'course' },
    { field: 'email', headerName: 'email' },
    { field: 'address', headerName: 'address' },
    { field: 'rollNumber', headerName: 'rollNumber', },
    { field: 'password', headerName: 'password', },
    { field: 'isActive', headerName: 'isActive' },
  ]
  return (
    <>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={students}
          columns={columns}
        />
      </div>
    </>
  )
}

export default StudentGrid;