
import React, { useContext } from 'react';
import Child from './child'
import { valuecontext1,valuecontext } from './valuecontext';

function Parint(props) {
  let val = useContext(valuecontext1);
  return (
    <div >
      Parent {val}
      
      
    </div>
  );
}

export default Parint;