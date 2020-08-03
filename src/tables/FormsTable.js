import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

import forms from "../logo/googleFormsLogo.png"
import pdf from "../logo/pdfLogo.png"

function FormsTable() {
  return (
    <div className="forms_table">
      <Table className="table">
        <Tbody>
          <Tr>
            <Th>
              <center>Link to Form</center>
            </Th>
            <Th>
              <center>Description</center>
            </Th>
          </Tr>
          <Tr className="tableRow">
            <Td>
              <div>
                <a href="https://drive.google.com/open?id=1DLRHlz_cnteISRPcgrBkrl4LR2uhC8q2cQsEA-tfPQg">
                  <img src={forms} width="100" height="100" alt="" />
                </a>
              </div>
            </Td>
            <Td className="lastItem">
              <b>Application for Admission: </b>
              Use this form to apply to the Computer Science Academy at
              Westhill. This form may be used by all Westhill Students. Eight
              graders should wait until near the end of 9th grade to apply to
              the Academy.
            </Td>
          </Tr>
          <Tr className="tableRow">
            <Td>
              <div>
                <a href="https://docs.google.com/forms/d/1_VfhJmmk1wkYJEYsHlvaddHqunphUAUJ93Z56Fj0Nps/edit?usp=sharing">
                  <img src={forms} width="100" height="100" alt="" />
                </a>
              </div>
            </Td>
            <Td className="lastItem">
              <b>Application for Senior Intership: </b>
              Use this form for your CSAW Internship.
            </Td>
          </Tr>
          <Tr className="tableRow">
            <Td>
              <div>
                <a href="https://drive.google.com/open?id=1HdyPxc7U_h9YTxa8bcuCpb91mXND36GwDu7cvoEHQF8">
                  <img src={forms} width="100" height="100" alt="" />
                </a>
              </div>
            </Td>
            <Td className="lastItem">
              <b>Post-Intership Evaluation Form: </b>
              Use this form to provide feedback on your internship experience.
            </Td>
          </Tr>
          <Tr className="tableRow">
            <Td>
              <div>
                <a href="https://drive.google.com/open?id=12rhsEbbTxwz8qvja8uLYULPBwK6c6akKmBCsGFcoGzA">
                  <img src={forms} width="100" height="100" alt="" />
                </a>
              </div>
            </Td>
            <Td className="lastItem">
              <b>Application for Academy Graduation: </b>
              Use this form to get recognition on your transcript after
              completing the Academy's requirements for the four year period.
              Please note that transcript recognition will not occur unless you
              fill out this form during your Senior year.
            </Td>
          </Tr>
          <Tr className="tableRow">
            <Td>
              <div>
                <a href="https://drive.google.com/open?id=1acBs2sDHevopQxsHgy0c4Va81hGOJbMk">
                  <img src={pdf} width="100" height="100" alt="" />
                </a>
              </div>
            </Td>
            <Td className="lastItem">
              <b>
                Pseudo-Language Reference Sheet for Optional Placement Exam:
              </b>
              The AP CSP reference sheet is also used as the reference sheet for
              our beginning-of-year placement exam.
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  )
}
export default FormsTable
