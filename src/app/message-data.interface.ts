interface MessageDialogData {
  type: 'warning' | 'error' | 'info' | 'success';
  message: string;
  rightButton: {
    type: 'confirm' | 'cancel' | 'navigate';
    text: string;
    navigateTo?: string;
  };
  leftButton: {
    type: 'close' | 'cancel';
    text: string;
  };
}

type RequireNavigation<T> = T extends { rightButton: { type: 'navigate' } } ? Required<T> : T;

type ConditionalMessageDialogData = RequireNavigation<MessageDialogData>;
