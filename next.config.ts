import withMDX from '@next/mdx';

const mdx = withMDX({
  extension: /\.mdx?$/
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true
};

export default mdx(nextConfig);
