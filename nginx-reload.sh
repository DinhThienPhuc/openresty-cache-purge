openresty -s stop -c $(pwd)/nginx.conf

sed "s|SOURCE_ROOT|$(pwd)|" nginx.conf.template > nginx.conf
openresty -c $(pwd)/nginx.conf
echo "**** Nginx Server restarted ... ****"