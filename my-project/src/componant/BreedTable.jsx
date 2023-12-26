import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const BreedTable = ({id,name,origin,handlSearchForMain}) => {
  return (
   
        <Tr
          onClick={() => {
            handlSearchForMain(id);
          }}
          key={id}
        >
          <Td>{name}</Td>
          <Td >{origin}</Td>
        </Tr>
      );
  
}

export default BreedTable