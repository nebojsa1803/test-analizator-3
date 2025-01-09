'use client'

import { useAppSelector } from '@/app/hooks'
import TableWithLabelsInCoulumn from '@/components/TableWithLabelsInColumn'
import { BarChart } from '@mui/x-charts/BarChart'

const SolvedTasksChartAndTable = () => {
  const pointsData = useAppSelector((state) => state.pointsAndMark.classResault)

  const onlyPointsForTasks = pointsData.map((oneStudentPoints) => {
    const oneStudentPointsCopy = { ...oneStudentPoints }
    if ('mark' in oneStudentPointsCopy) delete oneStudentPointsCopy.mark
    return oneStudentPointsCopy
  })
  const numberOfStudentsWhoWorked = Number(
    useAppSelector((state) => state.generalData.numberOfStudentsWhoWorked)
  )

  const arrayOfPointsForTasks = onlyPointsForTasks.map((points) =>
    Object.values(points)
  )

  const arrayOfPercentageOfCorectlySolvedTasks = (arrayOfStudentsPoints) => {
    const numOfStudents = arrayOfStudentsPoints[0].length

    const resault = []

    for (let i = 0; i < numOfStudents; i++) {
      let summ = 0

      for (let j = 0; j < arrayOfStudentsPoints.length; j++) {
        summ += parseInt(arrayOfStudentsPoints[j][i])
      }

      resault.push((100 * summ) / numberOfStudentsWhoWorked)
    }

    return resault
  }

  const labelsForChart = Object.keys(onlyPointsForTasks[0])
  const valuesForTable = arrayOfPercentageOfCorectlySolvedTasks(
    arrayOfPointsForTasks
  ).map((percentage) => `${percentage.toFixed(2)}%`)

  return (
    <div>
      <TableWithLabelsInCoulumn
        firstRow={labelsForChart}
        secondRow={valuesForTable}
        header='Проценат тачно решених задатака'
        headerBackground='#f1f5f9'
        headerColSpan={arrayOfPointsForTasks[0].length}
        width='28rem'
      />
      <BarChart
        xAxis={[{ scaleType: 'band', data: labelsForChart }]}
        series={[
          {
            data: arrayOfPercentageOfCorectlySolvedTasks(arrayOfPointsForTasks),
            yAxisId: 'linearAxis',
          },
        ]}
        width={500}
        height={300}
        yAxis={[
          {
            id: 'linearAxis',
            scaleType: 'linear',
            min: 0,
            max: 100,
          },
        ]}
        leftAxis='linearAxis'
      />
    </div>
  )
}

export default SolvedTasksChartAndTable
