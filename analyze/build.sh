cd src/readme
ts-node readme-maker.ts
cd ../../
npx doctoc ../readme.md
npx prettier --write ../readme.md
