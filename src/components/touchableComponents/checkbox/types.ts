

export interface CheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  isLabelClickable?: boolean;
  children?: React.ReactNode;
  checkboxColor?:string;
  checkboxSize?:number;
  iconName?:'circle'|'circleFilled'|'square'|'squareFilled'|'shield'|'shieldFilled'|'tick';
}