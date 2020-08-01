import React from "react"
import { Table, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

import codeorg from "../logo/codeorgLogo.png"
import lightbot from "../logo/lightbot.png"
import scratch from "../logo/scratchLogo.png"
import jeroo from "../logo/jerooLogo.jpg"
import greenfoot from "../logo/greenfootLogo.jpg"
import bluej from "../logo/bluejLogo.png"

function IntroTools() {
  return (
    <Table width="75%" border="1">
      <tbody>
        <Tr>
          <Th scope="col" class="goldHeader">
            Language/Site
          </Th>
          <Th scope="col" class="goldHeader">
            Description
          </Th>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={codeorg} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Code.org: The course starts by using some puzzles in the form of
            Angry Bird games to teach basic programming skills during the first
            two days of school.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={lightbot} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Lightbot.com: Lightbot puzzles follow after Angry Birds and are used
            to teach students the concepts of sequencing, procedures, and loops
            during the first week of school.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={scratch} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Scratch: MIT's Scratch language allow students to use a simple,
            block-based langauge to build games and other projects for two
            weeks. The level of difficulty of these projects are around 8th-9th
            grade level.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={jeroo} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Jeroo: This language features a subset of Java to introduce students
            to text-based programming with methods and pre-defined classes in a
            graphical programming environment. Use of variables is limited thus
            keeping programming tasks simple. The course features Jeroo for one
            month.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={greenfoot} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Greenfoot: This tool allows students to learn full java using a
            graphical interface. Projects center around animals and their
            movements. The course features Greenfoot and BlueJ for two months.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={bluej} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            BlueJ: The course concludes with students doing projects in java
            using the BlueJ Integrated Development Environment. The course
            features Greenfoot and BlueJ for two months
          </Td>
        </Tr>
      </tbody>
    </Table>
  )
}

export default IntroTools
