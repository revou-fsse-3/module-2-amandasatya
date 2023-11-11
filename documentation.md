Documentation untuk connect dari netlify ke custom domain

1. register di netlify
   ![register](./assets/documentation/1.png)
2. add newsite dan import from github
   ![import an existing project](./assets/documentation/2.png)
3. deploy with github
   ![image info](./assets/documentation/3.png)
4. find the module
   ![image info](./assets/documentation/4.png)
5. then click deploy module
   ![image info](./assets/documentation/5.png)
6. find and buy domain from niagahoster
   ![image info](./assets/documentation/6.png)
7. after purchased, back to netlify. change the default domain in netlify, to change default domain from netlify, click setup custom domain
   ![image info](./assets/documentation/7.png)
8. enter the domain name
   ![image info](./assets/documentation/8.png)
9. after named the domain, click add domain
   ![image info](./assets/documentation/9.png)
10. back to niagahoster, and enter to member area, and click your domain and click manage domain
    ![image info](./assets/documentation/10.png)
11. find dns/nameserver and click change name server that niagahoster recomending
    ![image info](./assets/documentation/11.png)
12. change A record and CNAME

    1. clik CNAME first and click the subdomain, fill your netlify website in subdomain form, EG.websiteku.netlify.app.
       save the CNAME setings, and click Add record
       ![image info](./assets/documentation/12.png)
    2. click A record in record coloumn, and search IPv4 and fill with (85.2.60.5)
       dont forget to save the settings of A record!
       ![image info](./assets/documentation/13.png)

13. your custom domain has done, wait patiently, proximately (2x24)hours,for your domain connect to netlify
