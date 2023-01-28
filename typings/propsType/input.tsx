export type InputType = {
  name: string;
  id: string;
  type: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: () => void;
}