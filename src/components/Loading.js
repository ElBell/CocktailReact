import {BeatLoader} from "react-spinners";
import * as React from "react";

export const Loading = () => {
  return (
    <div className='sweet-loading align' style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'}}>
      <BeatLoader sizeUnit={"px"} size={70} color={'#fff'}/>
    </div>
  )
};
