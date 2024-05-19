#!/bin/bash
# run from root dir

sed 's/os\.environ\["IS_DEPLOYMENT"] = "FALSE"/os\.environ["IS_DEPLOYMENT"] = "TRUE"/' app.py > prod_app.py

mv app.py local_app.py
mv prod_app.py app.py

# change bucket name
sed -i '' 's/seven-subs-dev/seven-subs-prod/g' scripts/upload_static.py

cd frontend

npm run build

find dist -type f \( -name '*.css' -o -name '*.js' -o -name '*.html' \) -exec sed -i '' 's/\/assets/https:\/\/seven-subs-prod.s3.amazonaws.com\/assets/g' {} +

cd ../scripts

python upload_static.py

cd ..

# zappa package prod
zappa update prod

### REVERT STUFF NOW ###

# change back bucket name
sed -i '' 's/seven-subs-prod/seven-subs-dev/g' scripts/upload_static.py

cd frontend

find dist -type f \( -name '*.css' -o -name '*.js' -o -name '*.html' \) -exec sed -i '' 's/https:\/\/seven-subs-prod.s3.amazonaws.com\/assets/\/assets/g' {} +

cd ..

mv local_app.py app.py

# zappa tail prod