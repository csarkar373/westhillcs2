import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

function StudentWinnersTables() {
  return (
    <div>
      <h3>Data Structures (CSAB)</h3>
      <Table className="table">
        <Thead>
          <Tr className="tableHeaderRow">
            <Th>Year</Th>
            <Th>Boys</Th>
            <Th>Girls</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="tableRow">
            <Td className="item">2019-2020</Td>
            <Td className="item">Gaurov Bansal</Td>
            <Td className="lastItem">-</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2019-2020</Td>
            <Td className="item">Rutvik Marathe</Td>
            <Td className="lastItem">Roubing Liao</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>AP Computer Science A</h3>
      <Table className="table">
        <Thead>
          <Tr className="tableHeaderRow">
            <Th>Year</Th>
            <Th>Boys</Th>
            <Th>Girls</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="tableRow">
            <Td className="item">2019-2020 (P2)</Td>
            <Td className="item">Samuel Sherman</Td>
            <Td className="lastItem">Micayla Roth</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2019-2020 (P3)</Td>
            <Td className="item">Gavin Stops</Td>
            <Td className="lastItem">Daniela Martinez Jimenez</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2019-2020 (P2)</Td>
            <Td className="item">Christopher Matrullo</Td>
            <Td className="lastItem">Katie Gaia</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2018-2019 (P5)</Td>
            <Td className="item">Alexander Kutcher</Td>
            <Td className="lastItem">Ashley Choi</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2017-2018 (P2)</Td>
            <Td className="item">Rutvik Marathe</Td>
            <Td className="lastItem">Jessica Wallen</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2017-2018 (P5)</Td>
            <Td className="item">Gaurov Bansal</Td>
            <Td className="lastItem">SJ Bennett</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2016-2017</Td>
            <Td className="item">Dan Greco</Td>
            <Td className="lastItem">Harlene Samra</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2015-2016</Td>
            <Td className="item">Ben Chan</Td>
            <Td className="lastItem">Reshmi Ranjith</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2014-2015</Td>
            <Td className="item">Joe Schlessinger</Td>
            <Td className="lastItem">Sophia Russell</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2013-2014</Td>
            <Td className="item">Paul Blum</Td>
            <Td className="lastItem">Ashley Berland</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2012-2013</Td>
            <Td className="item">Jon Xu</Td>
            <Td className="lastItem">Michelle Yang</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>AP Computer Science Principles</h3>
      <Table className="table">
        <Thead>
          <Tr className="tableHeaderRow">
            <Th>Year</Th>
            <Th>Boys</Th>
            <Th>Girls</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="tableRow">
            <Td className="item">2019-2020 (P1)</Td>
            <Td className="item">Jaden Jang</Td>
            <Td className="lastItem">Jessica Matloub</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2019-2020 (P6)</Td>
            <Td className="item">Jacob Sherman</Td>
            <Td className="lastItem">Christie Blonkvist</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2018-2019</Td>
            <Td className="item">Matrullo, Anand, Donikena</Td>
            <Td className="lastItem">Mason Perkins</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2017-2018</Td>
            <Td className="item">Christopher Matrullo</Td>
            <Td className="lastItem">Micayla Roth</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2016-2017 (P1)</Td>
            <Td className="item">Grady Orr</Td>
            <Td className="lastItem">Leah Schwartz</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2016-2017 (P6)</Td>
            <Td className="item">Josh Mensa</Td>
            <Td className="lastItem">Mercedes Sable</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2015-2016</Td>
            <Td className="item">Richard Zheng</Td>
            <Td className="lastItem">Abigail Aronica</Td>
          </Tr>
        </Tbody>
      </Table>
      <h3>Intro Computer Science</h3>
      <Table className="table">
        <Thead>
          <Tr className="tableHeaderRow">
            <Th>Year</Th>
            <Th>Semester 1</Th>
            <Th>Semester 2</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="tableRow">
            <Td className="item">2018-2019</Td>
            <Td className="item">Brandon Monies</Td>
            <Td className="lastItem">Christopher Calderon</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2017-2018</Td>
            <Td className="item">Kyle Alswanger Bush</Td>
            <Td className="lastItem">Kieran Johnston</Td>
          </Tr>

          <Tr className="tableRow">
            <Td className="item">2016-2017</Td>
            <Td className="item">Paul Tuccinardi</Td>
            <Td className="lastItem">Josh Greenburg</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2015-2016</Td>
            <Td className="item">Eve Wight</Td>
            <Td className="lastItem">Dan Greco</Td>
          </Tr>
          <Tr className="tableRow">
            <Td className="item">2014-2015</Td>
            <Td className="item">Rachel Lese</Td>
            <Td className="lastItem">Tyler Jafaari</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  )
}
export default StudentWinnersTables
