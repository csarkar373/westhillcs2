import React from "react"
import { Table, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import "../css/table.css"

import bigO from "../logo/bigO.png"
import java from "../logo/java.png"
import map from "../logo/map.png"
import linkedList from "../logo/LinkedList.jpg"
import stack from "../logo/stack.png"
import queue from "../logo/queue.png"
import tree from "../logo/tree2.png"
import sort from "../logo/sort.png"
import hash from "../logo/hash.png"
import functional from "../logo/functional.png"

function CSABtopics() {
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
              <img src={bigO} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Big-Oh: The course starts by teaching the basics of Big-Oh notation.
            This is the only purely theoretical concept taught in the course.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={java} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Java: The course teaches java topics not covered in AP CSA including
            additional operators and programming constructs.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={map} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Java Collections: Standard Java Library classes including Maps and
            Sets are heavily featured in the course.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={linkedList} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Linked Lists: The course continues with an introduction of advanced
            data structures including linked lists and double linked lists.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={stack} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Stacks: The course teaches how stacks can be used as a fundamental
            data structure to solve common programming problems.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={queue} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Queues: The course teaches how queues and circular queues can be
            used as fundamental data structures to solve common programming
            problems.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={tree} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Trees: Trees are the single, most important data structure taught in
            the course.{" "}
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={sort} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Sorting: As a continuation of what was taught in AP CSA, this course
            takes a deeper look into QuickSort and Heap Sort.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={hash} width="100" height="100" alt="" />
            </div>
          </Td>
          <Td>
            Hashing: Students are taught how hashing can be used to speed
            searching.
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div>
              <img src={functional} width="100" height="25" alt="" />
            </div>
          </Td>
          <Td>
            Functional Programming:Java version 8 adds functional features to
            the language which can greatly shorten code length.
          </Td>
        </Tr>
      </tbody>
    </Table>
  )
}

export default CSABtopics
