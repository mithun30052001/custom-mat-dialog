export interface MessageDialogData {
  message: string;
  type: 'warning' | 'error' | 'info' | 'success';
  rightButton?: {
    type: 'confirm' | 'navigate';
    label: string;
    style?: 'primary' | 'basic';
    navigateTo?: string;
  };
  leftButton: {
    type: 'close' ;
    label: string;
    style?: 'primary' | 'basic';
  };
}
