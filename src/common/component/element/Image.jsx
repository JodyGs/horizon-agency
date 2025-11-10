'use client';

import clsx from 'clsx';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';


const Image = (props) => {
  const { alt, src, className, rounded, style, priority = false, ...rest } = props;
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        '',
        isLoading ? 'animate-pulse' : '',
        rounded
      )}
    >
      <NextImage
        className={clsx(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-[1.02] blur-xl grayscale'
            : 'scale-100 blur-0 grayscale-0',
          rounded,
          className
        )}
        src={src}
        alt={alt}
        quality={75}
        onLoad={() => setLoading(false)}
        style={style}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...rest}
      />
    </div>
  );
};
export default Image;
