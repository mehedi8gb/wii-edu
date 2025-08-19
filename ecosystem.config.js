// ecosystem.config.js

module.exports = {
    apps: [
        {
            name: "wii-edu",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 50000",
            cwd: "./", // path to your Next.js project root
            instances: 1, // you can change to "max" for cluster mode
            exec_mode: "fork", // use "cluster" for multiple instances
            watch: false, // disable watch in production
            env: {
                NODE_ENV: "production",
                PORT: 50007
            }
        }
    ]
};
