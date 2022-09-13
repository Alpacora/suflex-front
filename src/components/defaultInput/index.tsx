import React from 'react';
import { IDefaultInput } from '../../interfaces';

export function DefaultInput({ width = '30%', marginVertical, ...rest }: IDefaultInput) {
  return (
    <input
      className={`w-[${width}] h-16 px-10 mx-5 ${marginVertical ? marginVertical : 'my-5'} text-center rounded-full`}
      {...rest}
    />
  );
}