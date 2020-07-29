import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

function CSAscores() {
  return (
    <Table className="table">
      <Thead>
        <Tr className="tableHeaderRow">
          <Th>AP CS A Exam</Th>
          <Th>5</Th>
          <Th>4</Th>
          <Th>3</Th>
          <Th>2</Th>
          <Th>1</Th>
          <Th>Total</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="tableRow">
          <Td className="item">Westhill Score Distribution (82 Students)</Td>
          <Td className="item">42%</Td>
          <Td className="item">27%</Td>
          <Td className="item">27%</Td>
          <Td className="item">0%</Td>
          <Td className="item">4%</Td>
          <Td className="item">100%</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Global Score Distribution (71K Students)</Td>
          <Td className="item">26%</Td>
          <Td className="item">22%</Td>
          <Td className="item">23%</Td>
          <Td className="item">13%</Td>
          <Td className="item">17%</Td>
          <Td className="item">100%</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
export default CSAscores
