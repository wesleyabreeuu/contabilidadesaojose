// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",             // <- isso diz pro Next gerar site estático
  images: {
    unoptimized: true,          // <- se você usar next/image, isso ajuda no export
  },
};

export default nextConfig;
