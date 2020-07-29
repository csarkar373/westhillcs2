import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

function CSPscores() {
  return (
    <Table className="table">
      <Thead>
        <Tr className="tableHeaderRow">
          <Th>AP CSP Exam </Th>
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
          <Td className="item">17%</Td>
          <Td className="item">35%</Td>
          <Td className="item">35%</Td>
          <Td className="item">6%</Td>
          <Td className="item">6%</Td>
          <Td className="item">100%</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Global Score Distribution (117K Students)</Td>
          <Td className="item">11%</Td>
          <Td className="item">24%</Td>
          <Td className="item">37%</Td>
          <Td className="item">20%</Td>
          <Td className="item">9%</Td>
          <Td className="item">100%</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
export default CSPscores
