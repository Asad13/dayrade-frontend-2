import { Suspense } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import Loader from '../../../../ui/Loader';

const SuspenseBoundary = ({ children, fallback }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback !== undefined ? fallback : <Loader />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default SuspenseBoundary;
