import React from 'react';
import { useRouter } from 'next/router';

const analisisData = () => {
  const router = useRouter();
  router.push('/analisis/1');
  return <></>
}

export default analisisData;
