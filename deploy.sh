
#!/bin/bash


echo "Starting deployment process"
git add .
git commit -m "new build"
git push
echo "deploy process done client side"