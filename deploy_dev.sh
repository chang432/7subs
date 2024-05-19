#!/bin/bash
# run from root dir

sed 's/os\.environ\["IS_DEPLOYMENT"] = "FALSE"/os\.environ["IS_DEPLOYMENT"] = "TRUE"/' app.py > dev_app.py

mv app.py local_app.py
mv dev_app.py app.py

cd frontend

npm run build

find dist -type f \( -name '*.css' -o -name '*.js' -o -name '*.html' \) -exec sed -i '' 's/\/assets/https:\/\/seven-subs-dev.s3.amazonaws.com\/assets/g' {} +

cd ../scripts

python upload_static.py

cd ..

# zappa deploy dev
zappa update dev

cd frontend

find dist -type f \( -name '*.css' -o -name '*.js' -o -name '*.html' \) -exec sed -i '' 's/https:\/\/seven-subs-dev.s3.amazonaws.com\/assets/\/assets/g' {} +

cd ..

mv local_app.py app.py

# zappa tail dev