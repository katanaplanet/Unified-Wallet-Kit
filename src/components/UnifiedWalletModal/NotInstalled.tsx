import { Adapter } from '@solana/wallet-adapter-base';
import React from 'react';
import { useTranslation } from '../../contexts/TranslationProvider';
import { IStandardStyle, IUnifiedTheme, useUnifiedWalletContext } from '../../contexts/UnifiedWalletContext';
import tw, { TwStyle } from 'twin.macro';
import ExternalIcon from '../icons/ExternalIcon';

const styles: IStandardStyle = {
  subtitle: {
    light: [tw`text-black/70`],
    dark: [tw`text-white/50`],
    jupiter: [tw`text-white/50`],
  },
  button: {
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

const NotInstalled: React.FC<{ adapter: Adapter; onClose: () => void; onGoOnboarding: () => void }> = ({
  adapter,
  onClose,
  onGoOnboarding,
}) => {
  const { theme } = useUnifiedWalletContext();
  const { t } = useTranslation();

  return (
    <div css={[tw`duration-500 animate-fade-in overflow-y-scroll`]} className="hideScrollbar">
      <div tw="flex flex-col justify-center items-center p-5">
        <img src={adapter.icon} width={100} height={100} />
      </div>

      <div tw="flex flex-col justify-center items-center text-center">
        <span tw="text-base font-semibold">{t(`Have you installed`) + ` ${adapter.name}?`}</span>

        <a
          href={adapter.url}
          rel="noopener noreferrer"
          target="_blank"
          tw="text-xs flex my-3 items-center space-x-2 underline"
        >
          <span>
            {t(`Install`)} {adapter.name}
          </span>
          <ExternalIcon />
        </a>

        <div tw="mt-5 flex w-full px-10 flex-col items-start justify-start text-start">
          <p tw="text-xs font-semibold">{t(`On mobile:`)}</p>
          <ul tw="text-xs pl-8 mt-2 list-disc">
            <li>{t(`You should open the app instead`)}</li>
          </ul>
        </div>

        <div tw="mt-5 flex w-full px-10 flex-col items-start justify-start text-start">
          <p tw="text-xs font-semibold">{t(`On desktop:`)}</p>
          <ul tw="text-xs pl-8 mt-2 list-disc">
            <li>{t(`Install and refresh the page`)}</li>
          </ul>
        </div>

        <div tw="border-t border-t-white/10 mt-5 w-full" />

        <div tw="flex space-x-2 justify-between w-full p-5">
          <button
            type="button"
            css={[
              tw`text-white font-semibold text-base w-full px-2 py-4 hover:bg-[#252525] leading-none text-xs`,
              styles.button[theme],
            ]}
            onClick={onGoOnboarding}
          >
            {t(`i don't have a wallet`)}
          </button>

          <button
            type="button"
            css={[
              tw`text-white font-semibold text-base w-full px-2 py-4 hover:bg-[#252525] leading-none text-xs`,
              styles.button[theme],
            ]}
            onClick={onClose}
          >
            {'← ' + t(`go back`)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotInstalled;
