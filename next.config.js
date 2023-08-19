/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		minimumCacheTTL: 60 * 10,
	},
	swcMinify:true
};

module.exports = nextConfig;
