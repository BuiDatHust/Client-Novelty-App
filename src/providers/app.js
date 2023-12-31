import * as React from "react";
import { Button, ChakraProvider, Spinner } from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";
import { Router } from "react-router-dom";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong </h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};

export const AppProvider = ({ children }) => {
  return (
    <ChakraProvider>
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center w-screen h-screen">
            <Spinner size="xl" />
          </div>
        }
      >
        {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
        {/* <HelmetProvider> */}
        {/* <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
            <Notifications />
            <AuthProvider>
              <Router>{children}</Router>
            </AuthProvider>
          </QueryClientProvider> */}
        {/* </HelmetProvider> */}
        {/* </ErrorBoundary> */}
        <Router>{children}</Router>
      </React.Suspense>
    </ChakraProvider>
  );
};
