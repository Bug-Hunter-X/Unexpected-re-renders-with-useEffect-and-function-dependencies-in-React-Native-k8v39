The solution involves using the `useCallback` hook to memoize the function. This ensures that the function reference remains consistent unless its dependencies change.  If the dependencies haven't changed, the memoized function reference remains the same, preventing unnecessary re-renders. 