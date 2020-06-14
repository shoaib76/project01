

import React, { useContext } from 'react';
import {valuecontext1,valuecontext} from './valuecontext';
//import  from './valuecontext';

function Child(props) {
  let num1 = useContext(valuecontext);
  return (
    <div >
      Child number {num1}
    </div>
  );
}

export default Child;