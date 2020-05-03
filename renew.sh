# Script for renewing certbot
pm2 stop service
sudo service nginx stop
sudo certbot renew
sudo service nginx start
pm2 start service
