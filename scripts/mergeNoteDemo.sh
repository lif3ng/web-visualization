mkdir notes/.vuepress/dist/demos

cp -r dist/* notes/.vuepress/dist/demos

cd notes/.vuepress/dist

git init

git config --local user.email "lif3ng@icloud.com"
git config --local user.name "lif3ng"

git add -A
git commit -m 'deploy'