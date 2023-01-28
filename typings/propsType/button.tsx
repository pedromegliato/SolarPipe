export type ButtonType = {
  name?: string;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
}