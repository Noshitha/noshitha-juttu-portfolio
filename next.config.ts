import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/Noshitha_Profile_Picture.jpeg",
        search: "",
      },
      {
        pathname: "/logos/**",
        search: "",
      },
      {
        pathname: "/logos/Deloitte.png",
        search: "?v=20260418",
      },
    ],
  },
};

export default nextConfig;
