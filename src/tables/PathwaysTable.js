import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

function PathwaysTable() {
  return (
    <Table className="table">
      <Thead>
        <Tr className="tableHeaderRow">
          <Th>Description</Th>
          <Th>Freshman</Th>
          <Th>Sophomore</Th>
          <Th>Junior</Th>
          <Th>Senior</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="tableRow">
          <Td className="item">CP Track #1</Td>
          <Td className="item">Intro CS</Td>
          <Td className="item">Python A/B</Td>
          <Td className="item">Intro Web Design</Td>
          <Td className="item">AP CSP</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">CP Track #2</Td>
          <Td className="item">Intro CS/Python A</Td>
          <Td className="item">Intro Web Design</Td>
          <Td className="item">CP Cyber</Td>
          <Td className="item">AP CSP</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Honors Track #1</Td>
          <Td className="item">Python A/B</Td>
          <Td className="item">AP CSP</Td>
          <Td className="item">AP CSA</Td>
          <Td className="item">Data Structures</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Honors Track #2</Td>
          <Td className="item">AP CSP</Td>
          <Td className="item">Honors Cyber</Td>
          <Td className="item">AP CSA</Td>
          <Td className="item">Data Structures</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Accelerated</Td>
          <Td className="item">AP CSA</Td>
          <Td className="item">Honors Cyber</Td>
          <Td className="item">Data Structures</Td>
          <Td className="item">TA/Indep Study</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
export default PathwaysTable
