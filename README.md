# Step init project nodejs express typescript
    1. npm init
    2. npm install -D typescript ts-node @types/node @types/express nodemon
    3. npx tsc --init
    4. add tsconfig.json: "outDir": "./dist"
    5. add tsconfig.json: "include": ["src/**/*"]
    6. add script dev: "tsc -w & nodemon ./dist/app/index.js"
    7. add script tsc: "tsc"
    8. replace script start: "tsc && node dist/app/index.js"
