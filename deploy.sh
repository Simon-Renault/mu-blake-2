
#!/bin/bash


echo "Starting deployment process"
yarn run build
git add .
git commit -m "new build"
git push
echo "deploy process done client side"