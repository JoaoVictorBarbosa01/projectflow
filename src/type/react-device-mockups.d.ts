// src/@types/react-device-mockups.d.ts
declare module 'react-device-mockups' {
  import * as React from 'react';

  export interface DeviceProps {
    children?: React.ReactNode;
    width?: string | number;
    screenProps?: React.ImgHTMLAttributes<HTMLImageElement>;
    buttonProps?: React.HTMLAttributes<HTMLDivElement>;
  }

  export const MacbookPro: React.FC<DeviceProps>;
  export const IphoneX: React.FC<DeviceProps>;
  export const IpadPro: React.FC<DeviceProps>;
  // Adicione mais dispositivos conforme necessário
}
