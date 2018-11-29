import React from 'react';
import Roll from '../Roll/Roll';

const RollButtons = ({ handleRoll }) =>  {
  return (<div className="rolls">
    <Roll number={0} handleRoll={handleRoll}/>
    <Roll number={1} handleRoll={handleRoll}/>
    <Roll number={2} handleRoll={handleRoll}/>
    <Roll number={3} handleRoll={handleRoll}/>
    <Roll number={4} handleRoll={handleRoll}/>
    <Roll number={5} handleRoll={handleRoll}/>
    <Roll number={6} handleRoll={handleRoll}/>
    <Roll number={7} handleRoll={handleRoll}/>
    <Roll number={8} handleRoll={handleRoll}/>
    <Roll number={9} handleRoll={handleRoll}/>
    <Roll number={10} handleRoll={handleRoll}/>
  </div>);
};

export default RollButtons;