import React from "react"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

function codingGames() {
  return (
    <Table className="table">
      <Thead>
        <Tr className="tableHeaderRow">
          <Th>Website</Th>
          <Th>Project</Th>
          <Th>Description</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="tableRow">
          <Td className="item">
            <a href="https://www.code.org">Code.org</a>
          </Td>
          <Td className="item">
            <a href="https://csedweek.org/learn">Hour of Code</a>
          </Td>
          <Td className="lastItem">
            Fun projects for beginners in under an hour.
          </Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">
            <a href="https://www.code.org">Code.org</a>
          </Td>
          <Td className="item">
            <a href="https://studio.code.org/hoc/1">Angry Birds</a>
          </Td>
          <Td className="lastItem">
            Traditional Angry Birds game with a programming twist.
          </Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">
            <a href="https://sites.google.com/view/codinggames/home">
              CS Coding Games
            </a>
          </Td>
          <Td className="item">
            <a href="https://csa-games.netlify.app/">Java Game</a>
          </Td>
          <Td className="lastItem">
            A more advanced game for students with some Java experience.
          </Td>
        </Tr>
        <Tr className="tableRow">
          <Td className="item">
            <a href="https://sites.google.com/view/codinggames/home">
              CS Coding Games
            </a>
          </Td>
          <Td className="item">
            <a href="https://python-games.netlify.app/">Python Game</a>
          </Td>
          <Td className="lastItem">
            A more advanced game for students who know a little Python.
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}
export default codingGames
