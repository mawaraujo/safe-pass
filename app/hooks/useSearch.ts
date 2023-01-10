import React from 'react';

export default function useSearch() {
  const [value, setVaue] = React.useState<string>('');

  const handleClear = React.useCallback(() => {
    setVaue('');
  }, [value]);

  return {
    value,
    setVaue,
    handleClear,
  };
}
