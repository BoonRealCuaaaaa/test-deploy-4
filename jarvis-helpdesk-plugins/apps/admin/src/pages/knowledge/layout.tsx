import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import FullscreenLoader from '@/src/components/full-screen-loader';

const KnowledgeLayout = () => {
  return (
    <Suspense fallback={<FullscreenLoader />}>
      <Outlet />
    </Suspense>
  );
};

export default KnowledgeLayout;
