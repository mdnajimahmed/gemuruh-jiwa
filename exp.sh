npm run build
rm -rf ./dist ./types
mkdir -p ./dist ./types
mv build/dist/* ./dist
mv build/types/* ./types
npm publish
rm -rf ./dist ./types