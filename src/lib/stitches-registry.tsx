'use client';

import React, { useEffect, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { getCssText } from '@/styles';

export function StitchesRegistry({ children }: { children: React.ReactNode }) {
  // Para evitar erros de hidratação, apenas renderizamos os estilos no lado do servidor
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useServerInsertedHTML(() => {
    return (
      <style
        id="stitches"
        dangerouslySetInnerHTML={{ __html: getCssText() }}
        data-stitches
      />
    );
  });

  return (
    <>
      {children}
    </>
  );
}
