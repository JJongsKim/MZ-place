REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY 

cp /home/ubuntu/deploy/.env /home/ubuntu/deploy/

sudo yarn install

sudo pm2 reload all