
import * as React from "react";
import {BeatLoader} from "react-spinners";

export const Loading = () => {
  return (
    <div className='sweet-loading align' style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'}}>
      <BeatLoader sizeUnit={"px"} size={50} color={'#fff'}/>
    </div>
  )
};
