'use client'

import { useAppSelector } from '@/app/hooks'
import TableComponent from '@/components/Table'

const GeneralDataTable = () => {
  const generalData = useAppSelector((state) => state.generalData)
  const pointsData = useAppSelector((state) => state.pointsAndMark.classResault)

  const averageMark = pointsData.reduce((acc, curr) => {
    if ('mark' in curr) {
      acc =
        acc + Number(curr.mark) / Number(generalData.numberOfStudentsWhoWorked)
    }
    return acc
  }, 0)

  const removedMarkFromStudentResaults = pointsData.map((oneStudent) => {
    const copiedObject = { ...oneStudent }
    if ('mark' in copiedObject) {
      delete copiedObject.mark
      return copiedObject
    } else return copiedObject
  })

  const arrayOfAllStudentsPoints = removedMarkFromStudentResaults.map(
    (oneStudent) => Object.values(oneStudent)
  )

  const averageClassPoints = arrayOfAllStudentsPoints
    .flat()
    .map(Number)
    .reduce((acc, curr) => {
      acc = acc + curr / Number(generalData.numberOfStudentsWhoWorked)
      return acc
    }, 0)

  const {
    typeOfMark,
    subject: Предмет,
    date: Датум,
    typeOfTest: Врста,
    class: Разред,
    section: Одељење,
    numberOfStudents: Укупно,
    numberOfStudentsWhoWorked: Радило,
  } = generalData
  const novo = {
    Предмет,
    Датум,
    ['Врста теста']: Врста,
    Разред,
    Одељење,
    ['Укупно ученика у одељењу']: Укупно,
    ['Број ученика који су радили']: Радило,
  }
  const arrayOfDataForGeneralDataTable = Object.entries(novo)
  arrayOfDataForGeneralDataTable.push([
    'Просечан број бодова',
    `${averageClassPoints.toFixed(2).toString().replace('.', ',')} од могућих ${
      generalData.numberOfTasks
    }`,
  ])
  typeOfMark === 'бројчана' &&
    arrayOfDataForGeneralDataTable.push([
      'Просечна оцена',
      averageMark.toFixed(2).replace('.', ','),
    ])
  return (
    <div>
      <TableComponent
        headerBackground='#f1f5f9'
        header='Општи подаци'
        headerColSpan={2}
        arrayOfCells={arrayOfDataForGeneralDataTable}
      />
    </div>
  )
}

export default GeneralDataTable
