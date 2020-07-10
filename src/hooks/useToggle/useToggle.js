import {useState, useCallback, useMemo} from 'react';

const useToggle = (defaultState) => {
  const [isActive, setIsActive] = useState(
    defaultState === undefined ? false : defaultState,
  );

  const setActive = useCallback(() => {
    setIsActive(true);
  }, []);

  const setInActive = useCallback(() => {
    setIsActive(false);
  }, []);

  const toggle = useCallback(
    (state) => {
      setIsActive('boolean' === typeof state ? state : !isActive);
    },
    [isActive],
  );

  return useMemo(() => {
    return {
      isActive,
      setActive,
      setInActive,
      toggle,
    };
  }, [isActive, setActive, setInActive, toggle]);
};

export default useToggle;
