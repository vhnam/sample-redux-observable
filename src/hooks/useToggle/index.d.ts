export default function useToggle(
  defaultState: boolean,
): {
  isActive: boolean;
  setActive: () => void;
  setInActive: () => void;
  toggle: (state: boolean) => void;
};
