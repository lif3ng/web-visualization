mkdir notes/.vuepress/dist/demos

cp -r dist/* notes/.vuepress/dist/demos

cd notes/.vuepress/dist

git init
git add -A
git commit -m 'deploy'