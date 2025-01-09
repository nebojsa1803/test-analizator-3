'use client'
import * as React from 'react'
import { useAppSelector } from '@/app/hooks'
import TableWithLabelsInCoulumn from '@/components/TableWithLabelsInColumn'
import { BarChart } from '@mui/x-charts/BarChart'

const MarksChartAndTable = () => {
  const pointsData = useAppSelector((state) => state.pointsAndMark.classResault)
  const classMarks = pointsData.map((oneStudent) => {
    if ('mark' in oneStudent) return oneStudent.mark
  })

  type MarkType = {
    јединице: number
    двојке: number
    тројке: number
    четворке: number
    петице: number
  }

  const numberOfEachMarkObject = classMarks.reduce(
    (acc: MarkType, curr) => {
      const mark = Number(curr)
      switch (mark) {
        case 1:
          acc.јединице++
          break
        case 2:
          acc.двојке++
          break
        case 3:
          acc.тројке++
          break
        case 4:
          acc.четворке++
          break
        case 5:
          acc.петице++
          break
      }

      return acc
    },
    { јединице: 0, двојке: 0, тројке: 0, четворке: 0, петице: 0 }
  )
  const labelsForTable = Object.keys(numberOfEachMarkObject)
  const valuesForTable = Object.values(numberOfEachMarkObject).map(Number)

  return (
    <div>
      <TableWithLabelsInCoulumn
        firstRow={labelsForTable}
        secondRow={valuesForTable}
        header='Оцене'
        headerBackground='#f1f5f9'
        headerColSpan={5}
        width='28rem'
      />
      <BarChart
        xAxis={[{ scaleType: 'band', data: labelsForTable }]}
        series={[{ data: valuesForTable, yAxisId: 'linearAxis' }]}
        width={500}
        height={300}
        yAxis={[
          {
            id: 'linearAxis',
            scaleType: 'linear',
            min: 0,
            max: 2,
            tickMinStep: 1,
            tickMaxStep: 1,
          },
        ]}
        leftAxis='linearAxis'
      />
    </div>
  )
}

export default MarksChartAndTable
