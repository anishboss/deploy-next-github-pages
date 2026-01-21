import type { NextConfig } from "next";

const gitHubPagesBasePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  output: "export",
  // basePath: process.env.PAGES_BASE_PATH,
  ...(gitHubPagesBasePath ? { basePath: gitHubPagesBasePath } : {}),
};

export default nextConfig;
