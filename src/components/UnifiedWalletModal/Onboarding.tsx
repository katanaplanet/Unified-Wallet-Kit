import React from 'react';
import { useRef, useState } from 'react';
import { HARDCODED_WALLET_STANDARDS } from '../../misc/constants';
import tw from 'twin.macro';
import ExternalIcon from '../icons/ExternalIcon';
import { IStandardStyle, useUnifiedWalletContext } from '../../contexts/UnifiedWalletContext';
import { useTranslation } from '../../contexts/TranslationProvider';

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
  walletButton: {
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
  externalIcon: {
    light: [tw`text-black/30`],
    dark: [tw`text-white/30`],
    jupiter: [tw`text-white/30`],
  },
};

export const OnboardingIntro: React.FC<{
  flow: IOnboardingFlow;
  setFlow: (flow: IOnboardingFlow) => void;
  onClose: () => void;
  showBack: boolean;
}> = ({ flow, setFlow, onClose, showBack }) => {
  const { theme } = useUnifiedWalletContext();
  const { t } = useTranslation();

  return (
    <div tw="flex flex-col justify-center items-center p-10">
      <img src={'https://unified.jup.ag/new_user_onboarding.png'} width={160} height={160} />

      <div tw="mt-4 flex flex-col justify-center items-center text-center">
        <span tw="text-lg font-semibold">{t(`New here?`)}</span>
        <span tw="mt-3 text-sm " css={[styles.subtitle[theme]]}>
          {t(`welcome! create a crypto wallet to get started!`)}
        </span>
      </div>

      <div tw="mt-6 w-full">
        <button
          type="button"
          css={[
            tw`text-white font-semibold text-base w-full hover:bg-[#252525] py-5 leading-none text-[#dedede]`,
            styles.button[theme],
          ]}
          onClick={() => setFlow('Get Wallet')}
        >
          {t(`get started`)}
        </button>
      </div>
      {showBack && (
        <button
          type="button"
          css={[tw`mt-3 text-xs text-white/50 font-semibold`, styles.subtitle[theme]]}
          onClick={() => onClose()}
        >
          {'← ' + t(`go back`)}
        </button>
      )}
    </div>
  );
};

export const OnboardingGetWallets: React.FC<{ flow: IOnboardingFlow; setFlow: (flow: IOnboardingFlow) => void }> = ({
  flow,
  setFlow,
}) => {
  const { theme } = useUnifiedWalletContext();
  const { t } = useTranslation();

  return (
    <div tw="flex flex-col justify-center pt-3 pb-6 px-10">
      <span tw="text-[#646464] font-semibold">{t(`popular wallets to get started`)}</span>
      <div tw="mt-4 w-full space-y-2">
        {HARDCODED_WALLET_STANDARDS.map((item, idx) => {
          return (
            <a
              href={item.url}
              key={idx}
              target="_blank"
              css={[
                tw`px-5 py-4 flex space-x-4 w-full hover:bg-[#252525] text-[#dedede] text-sm font-semibold items-center`,
                styles.walletButton[theme],
              ]}
            >
              <img src={item.icon} width={20} height={20} alt={item.name} />
              <span>{item.name}</span>
            </a>
          );
        })}

        <a
          href={'https://station.jup.ag/partners?category=Wallets'}
          target="_blank"
          css={[
            tw`px-5 py-4 flex space-x-4 w-full text-[#dedede] hover:bg-[#252525] text-sm font-semibold items-center`,
            styles.walletButton[theme],
          ]}
        >
          <div css={[tw`fill-current w-5 h-5 flex items-center p-0.5`, styles.externalIcon[theme]]}>
            <ExternalIcon width={16} height={16} />
          </div>
          <span>{t(`More wallets`)}</span>
        </a>
      </div>

      <span css={[tw`mt-3 text-center text-xs text-[#646464]`, styles.subtitle[theme]]}>{t(`once installed, refresh this page`)}</span>
      <button
        type="button"
        css={[tw`mt-3 text-xs text-[#646464] font-semibold`, styles.subtitle[theme]]}
        onClick={() => setFlow('Onboarding')}
      >
        {'← ' + t(`go back`)}
      </button>
    </div>
  );
};

export type IOnboardingFlow = 'Onboarding' | 'Get Wallet';
export const OnboardingFlow = ({ onClose, showBack }: { onClose: () => void; showBack: boolean }) => {
  const [flow, setFlow] = useState<IOnboardingFlow>('Onboarding');
  const [animateOut, setAnimateOut] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const setFlowAnimated = (flow: IOnboardingFlow) => {
    setAnimateOut(true);

    setTimeout(() => {
      contentRef.current?.scrollTo(0, 0);
      setAnimateOut(false);
      setFlow(flow);
    }, 200);
  };

  return (
    <div
      ref={contentRef}
      css={[tw`duration-500 animate-fade-in overflow-y-scroll`, animateOut ? tw`animate-fade-out opacity-0` : '']}
      className="hideScrollbar"
    >
      {flow === 'Onboarding' ? (
        <OnboardingIntro showBack={showBack} flow={flow} setFlow={setFlowAnimated} onClose={onClose} />
      ) : null}
      {flow === 'Get Wallet' ? <OnboardingGetWallets flow={flow} setFlow={setFlowAnimated} /> : null}
    </div>
  );
};
