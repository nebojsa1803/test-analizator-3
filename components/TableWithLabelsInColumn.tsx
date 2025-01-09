import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'

const TableComponentColumnLabel = ({
  headerBackground,
  headerColSpan,
  header,
  firstRow,
  secondRow,
  width,
}: {
  headerBackground: string
  headerColSpan: number
  header: string
  firstRow: string[]
  secondRow: (number | string)[]
  width: string
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: '0px', width: { width } }}
    >
      <Table size='small'>
        <TableHead sx={{ background: headerBackground }}>
          <TableRow>
            <TableCell
              colSpan={headerColSpan}
              align='center'
              sx={{ fontWeight: 'bold', fontSize: '1rem' }}
            >
              {header}
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            {firstRow.map((label) => (
              <TableCell
                key={label}
                align='center'
                sx={{ padding: 0, margin: 0 }}
              >
                {label}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {secondRow.map((value) => (
              <TableCell
                key={Math.random()}
                align='center'
                sx={{ padding: 0, margin: 0 }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableComponentColumnLabel
