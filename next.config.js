cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  // Add turbopack configuration to resolve workspace root warning
  turbopack: {
    root: __dirname
  }
}

module.exports = nextConfig
EOF