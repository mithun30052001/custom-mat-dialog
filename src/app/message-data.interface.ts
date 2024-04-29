export interface MessageDialogData {
  message: string;
  type: 'warning' | 'error' | 'info' | 'success';
  rightButton?: {
    type: 'confirm' | 'navigate';
    label: string;
    style?: 'primary' | 'basic';
    navigateTo?: string;
  };
  leftButton?: {
    type: 'close' ;
    label: string;
    style?: 'primary' | 'basic';
  };
}

type RequireNavigation<T> = T extends { rightButton: { type: 'navigate' } } ? Required<T> : T;
type OptionalIfClose<T> = T extends { type: 'close' } ? Partial<T> : T;

export type ConditionalMessageDialogData = RequireNavigation<MessageDialogData> & {
  rightButton: RequireNavigation<MessageDialogData['rightButton']> & OptionalIfClose<MessageDialogData['rightButton']>;
  leftButton?: RequireNavigation<MessageDialogData['leftButton']> & OptionalIfClose<MessageDialogData['leftButton']>;
};