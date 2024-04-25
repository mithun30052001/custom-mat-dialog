export interface Action {
  label: string;
  type: 'primary' | 'basic';
  actionHandler?: () => void;
}
