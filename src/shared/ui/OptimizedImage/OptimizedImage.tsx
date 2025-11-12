import type { Nullable } from '@/shared/types';
import React, { useState, useEffect, useMemo } from 'react';

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function OptimizedImage({
  src,
  alt,
  className,
  loading = 'lazy',
  ...props
}: OptimizedImageProps) {
  const webpSrc = useMemo(() => {
    if (src.endsWith('.webp')) {
      return src;
    }
    return src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  }, [src]);

  const [webpAvailable, setWebpAvailable] = useState<Nullable<boolean>>(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setWebpAvailable(true);
    img.onerror = () => setWebpAvailable(false);
    img.src = webpSrc;
  }, [webpSrc]);

  if (!webpAvailable) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        {...props}
      />
    );
  }

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        {...props}
      />
    </picture>
  );
}

export default OptimizedImage;
