import { Adapter } from '@solana/wallet-adapter-base';
import React, { DetailedHTMLProps, FC, ImgHTMLAttributes, MouseEventHandler, useCallback, useMemo } from 'react';
import 'twin.macro';

import UnknownIconSVG from '../../icons/UnknownIconSVG';
import { isMobile } from '../../misc/utils';
import { SolanaMobileWalletAdapterWalletName } from '@solana-mobile/wallet-adapter-mobile';
import tw from 'twin.macro';
import { IStandardStyle, useUnifiedWalletContext } from '../../contexts/UnifiedWalletContext';
import { useTranslation } from '../../contexts/TranslationProvider';

export interface WalletIconProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  wallet: Adapter | null;
  width?: number;
  height?: number;
}

const styles: IStandardStyle = {
  container: {
    light: [
      tw`relative z-0`,
      {
        '--border-solid': '#252525',
        backgroundImage: `
        repeating-linear-gradient(to right, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to bottom, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to right, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to bottom, var(--border-solid) 0 5px, transparent 5px 10px)
      `,
        backgroundPosition: 'top left, top left, bottom left, top right',
        backgroundSize: '100% 2px, 2px 100%, 100% 2px, 2px 100%',
        backgroundRepeat: 'no-repeat',
      },
    ],
    dark: [
      tw`relative z-0`,
      {
        '--border-solid': '#252525',
        backgroundImage: `
        repeating-linear-gradient(to right, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to bottom, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to right, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to bottom, var(--border-solid) 0 5px, transparent 5px 10px)
      `,
        backgroundPosition: 'top left, top left, bottom left, top right',
        backgroundSize: '100% 2px, 2px 100%, 100% 2px, 2px 100%',
        backgroundRepeat: 'no-repeat',
      },
    ],
    jupiter: [
      tw`relative z-0`,
      {
        '--border-solid': '#252525',
        backgroundImage: `
        repeating-linear-gradient(to right, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to bottom, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to right, var(--border-solid) 0 5px, transparent 5px 10px),
        repeating-linear-gradient(to bottom, var(--border-solid) 0 5px, transparent 5px 10px)
      `,
        backgroundPosition: 'top left, top left, bottom left, top right',
        backgroundSize: '100% 2px, 2px 100%, 100% 2px, 2px 100%',
        backgroundRepeat: 'no-repeat',
      },
    ],
  },
};

export const WalletIcon: FC<WalletIconProps> = ({ wallet, width = 24, height = 24 }) => {
  const [hasError, setHasError] = React.useState(false);

  const onError = useCallback(() => setHasError(true), []);

  if (wallet && wallet.icon && !hasError) {
    return (
      <span style={{ minWidth: width, minHeight: height }}>
        {/* // eslint-disable-next-line @next/next/no-img-element */}
        <img
          width={width}
          height={height}
          src={wallet.icon}
          alt={`${wallet.name} icon`}
          tw="object-contain"
          onError={onError}
        />
      </span>
    );
  } else {
    return (
      <span style={{ minWidth: width, minHeight: height }}>
        <UnknownIconSVG width={width} height={height} />
      </span>
    );
  }
};

export interface WalletListItemProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  wallet: Adapter;
}

export const WalletListItem = ({ handleClick, wallet }: WalletListItemProps) => {
  const { theme } = useUnifiedWalletContext();
  const { t } = useTranslation();

  const adapterName = useMemo(() => {
    if (!wallet) return '';
    if (wallet.name === SolanaMobileWalletAdapterWalletName) return t(`Mobile`);
    return wallet.name;
  }, [wallet?.name]);

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        css={[
          tw`flex items-center w-full px-4 py-3 space-x-5 transition-all cursor-pointer hover:bg-[#252525]`,
          styles.container[theme],
        ]}
      >
        {isMobile() ? (
          <WalletIcon wallet={wallet} width={24} height={24} />
        ) : (
          <WalletIcon wallet={wallet} width={24} height={24} />
        )}
        <span tw="font-medium text-sm overflow-hidden text-ellipsis">{adapterName}</span>
      </button>
    </li>
  );
};
