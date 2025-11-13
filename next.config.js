cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
EOF