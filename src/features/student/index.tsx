import React, { useCallback, useEffect } from 'react'
import { useAppDispatch } from '../../store/store';
import StudentGrid from './components/grid';
import { getStudents } from './studentSlice';

export const StudentPage = () => {

  const dispatch = useAppDispatch();
  const initApp = useCallback(async () => {
    await dispatch(getStudents());
  }, [dispatch]);

  useEffect(() => {
    initApp();
  }, [])


  return (
    <>
      <h2>Student Details</h2>

      <StudentGrid />
    </>
  )
}
