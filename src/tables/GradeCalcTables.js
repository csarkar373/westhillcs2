import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

function GradeCalcTables() {
  return (
    <div>
      <h3>Quarterly Grade Calculation</h3>
      <Table className="table">
        <Thead>
          <Tr className="tableHeaderRow">
            <Th>Course</Th>
            <Th>Exams</Th>
            <Th>Quizzes</Th>
            <Th>Projects</Th>
            <Th>HW/Portfolio</Th>
            <Th>Classwork</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="tableRow">
            <Td className="item">Data Structures</Td>
            <Td className="item">30%</Td>
            <Td className="item">30%</Td>
            <Td className="item">40%</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">AP CSA</Td>
            <Td className="item">30%</Td>
            <Td className="item">30%</Td>
            <Td className="item">30%</Td>
            <Td className="item">10%</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">AP CSP</Td>
            <Td className="item">-</Td>
            <Td className="item">40%</Td>
            <Td className="item">30%</Td>
            <Td className="item">10%</Td>
            <Td className="item">20%</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">Intro CS</Td>
            <Td className="item">-</Td>
            <Td className="item">50%</Td>
            <Td className="item">50%</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">Python A/B</Td>
            <Td className="item">-</Td>
            <Td className="item">50%</Td>
            <Td className="item">50%</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">Honors Cyber</Td>
            <Td className="item">TBD</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">CP Cyber</Td>
            <Td className="item">TBD</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">Game Design</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">Web Design</Td>
            <Td className="item">-</Td>
            <Td className="item">25%</Td>
            <Td className="item">75%</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">Robotics</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">50%</Td>
            <Td className="item">40%</Td>
            <Td className="item">10%</Td>
            <Td className="item">100%</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>Quarterly Grading Formula for all Courses</h3>
      <Table className="table">
        <Thead>
          <Tr className="tableHeaderRow">
            <Th>Course Length</Th>
            <Th>Q1</Th>
            <Th>Q2</Th>
            <Th>Q3</Th>
            <Th>Q4</Th>
            <Th>Midterm</Th>
            <Th>Final Exam</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="tableRow">
            <Td className="item">Full Year</Td>
            <Td className="item">20%</Td>
            <Td className="item">20%</Td>
            <Td className="item">20%</Td>
            <Td className="item">20%</Td>
            <Td className="item">10%</Td>
            <Td className="item">10%</Td>
            <Td className="item">100%</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">Half Year</Td>
            <Td className="item">40%</Td>
            <Td className="item">40%</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">-</Td>
            <Td className="item">20%</Td>
            <Td className="item">100%</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  )
}
export default GradeCalcTables
