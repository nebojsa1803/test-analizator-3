import React from 'react'
import GeneralDataTable from './(resaults parts)/GeneralDataTable'
import MarksChartAndTable from './(resaults parts)/MarksChartAndTable'
import LevelsChartAndTable from './(resaults parts)/LevelsChartAndTable'
import SolvedTasksChartAndTable from './(resaults parts)/SolvedTasksChartAndTable'

const ResaultPage = () => {
  return (
    <div>
      ResaultPage
      <GeneralDataTable />
      <MarksChartAndTable />
      <LevelsChartAndTable />
      <SolvedTasksChartAndTable />
    </div>
  )
}

export default ResaultPage
