import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

function FirstCourseTable() {
  return (
    <Table className="table">
      <Thead>
        <Tr className="tableHeaderRow">
          <Th>AP CSP</Th>
          <Th>Python A</Th>
          <Th>Intro CS</Th>
          <Th>AP CSA</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="tableRow">
          <Td className="item">
            Ideal freshman candidates for APCSP will be those students who are
            placing out of Algebra 1 and will be taking Honors Geometry (or
            another honors math class) in their first year of High School.
          </Td>
          <Td className="item">
            Ideal freshman candidates for this course consist of students who
            have a personal interest in computers and have at least a C average
            in their last math class in middle school.
          </Td>
          <Td className="lastItem">
            Ideal freshman candidates for this course consist of students who do
            not meet any other criteria.
          </Td>
          <Td className="lastItem">
            Freshman are strongly discouraged from taking APCSA. Please consider
            taking AP CSP. Consideration is given to 1% of students entering
            Westhill who have extensive computer science experience already.
            These students must take a placement exam during the first week of
            school to place out of AP CSP and into AP CSA.
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
export default FirstCourseTable
