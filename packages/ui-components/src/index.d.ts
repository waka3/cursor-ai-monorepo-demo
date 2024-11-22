declare module '@frontend-monorepo/ui-components' {
  import { FC, ReactNode } from 'react';
  import { DefineComponent } from 'vue';

  export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
  }

  export const ReactButton: FC<ButtonProps>;
  export const VueButton: DefineComponent;
}
