export interface MessageDialogData {
  message: string;
  type: 'warning' | 'error' | 'info' | 'success';
  rightButton?: (
    { type: 'confirm'; label: string; style?: 'primary' | 'basic' } |
    ({ type: 'navigate'; label: string; style?: 'primary' | 'basic'; navigateTo: string })
  );
  leftButton: {
    type: 'close';
    label: string;
    style?: 'primary' | 'basic';
  };
}
