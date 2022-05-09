import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export  function Checkboxes() {
  return (
    <div>
      {/* <Checkbox {...label} defaultChecked /> */}
      <Checkbox {...label} />
     
    </div>
  );
}