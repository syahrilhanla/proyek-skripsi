import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { getScore } from '@/components/utils/dataProcessors';
import useCheckActivity from '@/components/utils/useCheckActivity';
import useGetCurrentChapterProgress from '@/components/utils/useGetCurrentChapterProgress';

const useMainLayoutProgress = () => {
  const [pageProgress, setPageProgress] = useState([]);
  const router = useRouter();

  // passed into checking activity in utils/useCheckActivity
  const [isActive, setIsActive] = useState(true);

  // check if user still active, if not then change isActive to false
  useCheckActivity(isActive, setIsActive);

  useEffect(() => {
    useGetCurrentChapterProgress(router).then((data) =>
      setPageProgress(getScore(data))
    );
  }, []);

  return { pageProgress, isActive, setIsActive };
}

export default useMainLayoutProgress;
