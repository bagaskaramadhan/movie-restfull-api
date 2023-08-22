# Step init project nodejs express typescript
    1. npm init
    2. npm install -D typescript ts-node @types/node @types/express nodemon
    3. npx tsc --init
    4. add tsconfig.json: "outDir": "./dist"
    5. add tsconfig.json: "include": ["src/**/*"]
    6. add script dev: "tsc -w & nodemon ./dist/app/index.js"
    7. add script tsc: "tsc"
    8. replace script start: "tsc && node dist/app/index.js"

# Body and response API
## POST
1. Create Movie
![Screenshot from 2023-08-22 18-28-23](https://github.com/bagaskaramadhan/movie-restfull-api/assets/52947336/37056c75-688e-4211-ae34-b44a169f2a80)

## GET
1. List Movie
![Screenshot from 2023-08-22 18-31-06](https://github.com/bagaskaramadhan/movie-restfull-api/assets/52947336/54fcdc50-02a6-496c-b22a-0bec6721df20)
2. Movie by Id
![Screenshot from 2023-08-22 18-31-22](https://github.com/bagaskaramadhan/movie-restfull-api/assets/52947336/1f6263c1-3799-4067-b766-3948c1254aa5)

## PATCH
1. Edit title
![Screenshot from 2023-08-22 18-32-52](https://github.com/bagaskaramadhan/movie-restfull-api/assets/52947336/da2cc6ae-e8a6-4887-9b01-07b0332b9e1d)
## DELETE
1. Delete By Id
![Screenshot from 2023-08-22 18-33-06](https://github.com/bagaskaramadhan/movie-restfull-api/assets/52947336/871cf439-595e-4dd9-a2b1-c947c7d60956)
