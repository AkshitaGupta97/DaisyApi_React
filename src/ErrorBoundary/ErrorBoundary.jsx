import { Children } from 'react'
import {ErrorBoundary} from 'react-error-boundary'

// this page is created to resolve when the error occurs, while fetching the data.

function ErrorBoundary({error, resetErrorBoundary}) {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <div role='alert' className='alert alert-error'> {/* alert alert-error -> this classname is from daisyUi */}
            <p>Something went wrong :</p>
            <div>{error?.message}</div>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    </div>
  )
}

export default function CustomErrorBoundary({ children }){
    return (
        <ErrorBoundary
            FallbackComponent={ErrorBoundary}
            onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    )
}