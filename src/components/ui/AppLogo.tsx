'use client';

import React, { memo } from 'react';

interface AppLogoProps {
  src?: string;
  size?: number;
  variant?: 'wordmark' | 'icon';
  className?: string;
  onClick?: () => void;
}

const WORDMARK_SRC = '/assets/brand/thrive-through-cancer-horizontal.png';
const ICON_SRC = '/assets/brand/thrive-through-cancer-icon.png';

const AppLogo = memo(function AppLogo({
  src,
  size = 220,
  variant = 'wordmark',
  className = '',
  onClick,
}: AppLogoProps) {
  const isIcon = variant === 'icon';
  const logoSrc = src || (isIcon ? ICON_SRC : WORDMARK_SRC);
  const cursorClass = onClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : '';
  const sizingClass = className || (isIcon ? '' : 'w-[220px]');
  const style = className
    ? undefined
    : {
        width: size,
        height: isIcon ? size : Math.round(size * 180 / 820),
      };

  return (
    <span
      className={`inline-flex items-center ${cursorClass} ${sizingClass}`}
      style={style}
      onClick={onClick}
      aria-label="ThriveThroughCancer logo"
      role="img"
    >
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        className="block h-auto w-full object-contain"
        draggable={false}
      />
    </span>
  );
});

export default AppLogo;
