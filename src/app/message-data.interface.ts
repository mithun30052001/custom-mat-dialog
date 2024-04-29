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


type OptionalIfClose<T> = T extends { type: 'close' } ? Partial<T> : T;

export type ConditionalMessageDialogData = {
  leftButton?: OptionalIfClose<MessageDialogData['leftButton']>;
};