# To run backend

```
npm i -g @sap/cds-dk
```

```
npm i
```

```
npm start
```


# to deploy 

```
docker compose build
```

```
version: '3'
services:
  gps_shop:
    image: thanhbao/gps_shop
    ports:
      - "4004:4004"

```

# to access container 

```
docker exec -it 2bf2082c4aac bash
```

# copy DB from container to host

docker cp containerid:container_path host_path

```
docker cp e11158d9777b:/usr/home/app/db.sqlite /root/sap/gps/backup/16_9_2023

```
# copy from host to container 

```
 docker cp /root/sap/gps/backend/db.sqlite  2bf2082c4aac:/usr/home/app/db.sqlite
```

#  To config reverse proxy

```
htpasswd -c /etc/nginx/.htpasswd myUsername1
htpasswd -c /etc/nginx/.htpasswd myUsername2
htpasswd -c /etc/nginx/.htpasswd myUsername3
```

nano /etc/nginx/sites-enabled/dedault
```
server {
        listen 80 default_server;
        listen [::]:80 default_server;

        location /sap/ {
          auth_basic     "Admin";
          auth_basic_user_file /etc/nginx/.htpasswd;
          proxy_pass http://127.0.0.1:4004/;
        }

         location /odata/v4/api/SaleOrder {
          limit_except POST {
             auth_basic       "Admin";
             auth_basic_user_file /etc/nginx/.htpasswd;
           }
           proxy_pass http://127.0.0.1:4004/odata/v4/api/SaleOrder;
        }
         location /rest/api/SaleOrder {
          limit_except POST {
             auth_basic       "Admin";
             auth_basic_user_file /etc/nginx/.htpasswd;
           }
           proxy_pass http://127.0.0.1:4004/rest/api/SaleOrder;
        }

        location /odata/ {
          proxy_pass http://127.0.0.1:4004/odata/;
        }

        location /rest/ {
          proxy_pass http://127.0.0.1:4004/rest/;
        }

        location / {
          proxy_pass http://127.0.0.1:3000;
        }
}
```
# to modify http response 
install HttpHeadersMoreModule
```
sudo apt install nginx-extras
```
```
nano nano /etc/nginx/nginx.conf

```

```
http {
    # other config
    server_tokens off;
    more_set_headers 'Server: Windows';
    more_set_headers 'X-Powered-By: ASP.NET';
    # other config
}
```

# to remember git account 

```
git config --global credential.helper store

```



