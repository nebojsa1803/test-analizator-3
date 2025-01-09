'use client'

import { useAppSelector } from '@/app/hooks'
import TableWithLabelsInCoulumn from '@/components/TableWithLabelsInColumn'
import { BarChart } from '@mui/x-charts/BarChart'

const LevelsChartAndTable = () => {
  const levelsData = useAppSelector((state) => state.levels)
  const pointsData = useAppSelector((state) => state.pointsAndMark.classResault)
  const numberOfStudentsWhoWorked = Number(
    useAppSelector((state) => state.generalData.numberOfStudentsWhoWorked)
  )

  const onlyPointsForTasks = pointsData
    .map((oneStudentPoints) => {
      const oneStudentPointsCopy = { ...oneStudentPoints }
      if ('mark' in oneStudentPointsCopy) delete oneStudentPointsCopy.mark
      return oneStudentPointsCopy
    })
    .map((studentObject) => Object.entries(studentObject))
    .flat()
    .reduce<Record<string, number>>((acc, curr) => {
      if (acc[curr[0]] == undefined) {
        acc[curr[0]] = 1
      } else {
        acc[curr[0]] = Number(acc[curr[0]]) + Number(curr[1])
      }
      return acc
    }, {})

  const arrayWithSummedPointsForTasks = Object.keys(levelsData).map((key) => [
    levelsData[key],
    onlyPointsForTasks[key],
  ])
  const summOfPointsForLevels = arrayWithSummedPointsForTasks.reduce(
    (acc, curr) => {
      if (curr[0] === 'basic') acc.basic = acc.basic + Number(curr[1])
      if (curr[0] === 'medium') acc.medium = acc.medium + Number(curr[1])
      if (curr[0] === 'advanced') acc.advanced = acc.advanced + Number(curr[1])
      return acc
    },
    { basic: 0, medium: 0, advanced: 0 }
  )

  const numberOfTasksOnLevels = arrayWithSummedPointsForTasks.reduce(
    (acc, curr) => {
      if (curr[0] === 'basic') {
        acc.basic++
      } else if (curr[0] === 'medium') {
        acc.medium++
      } else acc.advanced++
      return acc
    },
    { basic: 0, medium: 0, advanced: 0 }
  )

  const labelsForTable = ['основни', 'средњи', 'напредни']

  const percentageForLevels = {
    основни: `${(
      (100 * summOfPointsForLevels.basic) /
      (numberOfStudentsWhoWorked * numberOfTasksOnLevels.basic)
    ).toFixed(2)}%`,
    средњи: `${(
      (100 * summOfPointsForLevels.medium) /
      (numberOfStudentsWhoWorked * numberOfTasksOnLevels.medium)
    ).toFixed(2)}%`,
    напредни: `${(
      (100 * summOfPointsForLevels.advanced) /
      (numberOfStudentsWhoWorked * numberOfTasksOnLevels.advanced)
    ).toFixed(2)}%`,
  }
  const valuesForChart = Object.values(percentageForLevels).map((value) =>
    Number(value.replace('%', ''))
  )

  return (
    <div>
      <TableWithLabelsInCoulumn
        firstRow={labelsForTable}
        secondRow={Object.values(percentageForLevels)}
        header='Оствареност по нивоима'
        headerBackground='#f1f5f9'
        headerColSpan={5}
        width='28rem'
      />
      <BarChart
        xAxis={[{ scaleType: 'band', data: labelsForTable }]}
        series={[{ data: valuesForChart, yAxisId: 'linearAxis' }]}
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

export default LevelsChartAndTable
