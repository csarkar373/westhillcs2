import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

function ComparisonTable() {
  return (
    <Table className="table">
      <Thead>
        <Tr className="tableHeaderRow">
          <Th className="tableHeaderItem">Course</Th>
          <Th className="tableHeaderItem">College Major</Th>
          <Th className="tableHeaderItem">Length</Th>
          <Th className="tableHeaderItem">Freshman?</Th>
          <Th className="tableHeaderItem">Quizzes</Th>
          <Th className="tableHeaderItem">Exams</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="tableRow">
          <Td className="item">AP CSP</Td>
          <Td className="item">All</Td>
          <Td className="item">Full Year</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Midterm, Final Only</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Intro CS</Td>
          <Td className="item">All</Td>
          <Td className="item">1/2 Year</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Midterm, Final Only</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Python A/B</Td>
          <Td className="item">All</Td>
          <Td className="item">1/2 Year Each</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Midterm, Final Only</Td>
        </Tr>

        <Tr className="tableRow">
          <Td className="item">Web Design</Td>
          <Td className="item">All</Td>
          <Td className="item">Full Year</Td>
          <Td className="item">Yes</Td>
          <Td className="item">-</Td>
          <Td className="item">Midterm, Final Only</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Game Design</Td>
          <Td className="item">All</Td>
          <Td className="item">1/2 Year</Td>
          <Td className="item">Yes</Td>
          <Td className="item">-</Td>
          <Td className="item">Midterm, Final Only</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Robotics</Td>
          <Td className="item">All</Td>
          <Td className="item">Full Year</Td>
          <Td className="item">Yes</Td>
          <Td className="item">-</Td>
          <Td className="item">Midterm, Final Only</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">CP Cyber Security</Td>
          <Td className="item">STEM</Td>
          <Td className="item">Full Year</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Midterm, Final Only</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Honors Cyber Security</Td>
          <Td className="item">STEM</Td>
          <Td className="item">Full Year</Td>
          <Td className="item">No</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Midterm, Final Only</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">AP CSA</Td>
          <Td className="item">STEM</Td>
          <Td className="item">Full Year</Td>
          <Td className="item">Rare</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Yes</Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">Data Structures</Td>
          <Td className="item">Computer Science</Td>
          <Td className="item">Full Year</Td>
          <Td className="item">No</Td>
          <Td className="item">Yes</Td>
          <Td className="item">Yes</Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
export default ComparisonTable
