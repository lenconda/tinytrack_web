module.exports = {
  apps: [{
    name: 'tracelink_web',
    script: 'dist/server/index.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      PORT: 9988,
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: 'web',
      host: '101.132.184.52',
      ref: 'origin/ssr',
      repo: 'git@github.com:lenconda/tracelink_web.git',
      path: '/home/web/space/tracelink_web',
      'post-deploy': 'npm i && npm run clean && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
