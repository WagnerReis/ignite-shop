"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { getCssText } from "@/styles";

export function StitchesRegistry({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    return (
      <style
        id="stitches"
        dangerouslySetInnerHTML={{ __html: getCssText() }}
        data-stitches
      />
    );
  });

  return <>{children}</>;
}
