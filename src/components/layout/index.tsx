'use server';

import {FC} from 'react';
import {IChildren} from '@/types';

export const BaseLayout: FC<IChildren> = async ({children}) => {


  return (
    <>
      
      <main className="custom-height">{children}</main>
    </>
  );
};
