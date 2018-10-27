import React from 'react';
import Roll from '../../containers/Roll/Roll';

const RollButtons = ({ handleClick }) =>  {
  return (<div className="rolls">
    <Roll number={0} handleClick={handleClick}/>
    <Roll number={1} handleClick={handleClick}/>
    <Roll number={2} handleClick={handleClick}/>
    <Roll number={3} handleClick={handleClick}/>
    <Roll number={4} handleClick={handleClick}/>
    <Roll number={5} handleClick={handleClick}/>
    <Roll number={6} handleClick={handleClick}/>
    <Roll number={7} handleClick={handleClick}/>
    <Roll number={8} handleClick={handleClick}/>
    <Roll number={9} handleClick={handleClick}/>
    <Roll number={10} handleClick={handleClick}/>
  </div>);
};

export default RollButtons;