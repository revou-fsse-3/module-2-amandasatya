Documentation untuk connect dari netlify ke custom domain

1. register di netlify
   ![register](./assets/documentation/1.png)
2. add newsite dan import dari githublangsung
   ![import an existing project](./assets/documentation/2.png)
3. deploy with github
   ![image info](./assets/documentation/3.png)
4. cari module yang mau di deploy
   ![image info](./assets/documentation/4.png)
5. lalu klik deploy module
   ![image info](./assets/documentation/5.png)
6. cari dan beli domain lewat niaga hoster
   ![image info](./assets/documentation/6.png)
7. setelah selesai membeli kembali ke netlify untuk mengubah default domain yang di berikan netlify menjadi custom name sendiri dengan klik setup custom domain
   ![image info](./assets/documentation/7.png)
8. masukan nama domain
   ![image info](./assets/documentation/8.png)
9. setelah memasukan nama domain klik add domain
   ![image info](./assets/documentation/9.png)
10. kembali ke website niaga hoster masuk ke member area lalu cari dan klik manage domain yang dituju
    ![image info](./assets/documentation/10.png)
11. cari dns/nameserver lalu klik yang di recomendasikan oleh niagahoster
    ![image info](./assets/documentation/11.png)
12. ganti nama A record dan cname

    1. Pilih CNAME terlebih dulu. Kemudian, ketikkan subdomain website Anda di Netlify di kolom Hostname. Misalnya, websiteku.netlify.app.
       Simpan pengaturan CNAME tersebut dengan klik Lanjutkan.
       ![image info](./assets/documentation/12.png)
    2. pilih A Record di kolom Record Type dan ketikkan IP address 75.2.60.5 di kolom IPv4.
       Jangan lupa klik Lanjutkan untuk menyimpan pengaturan A record.
       ![image info](./assets/documentation/13.png)

13. Cara custom domain Netlify sudah selesai. Anda hanya perlu menunggu propagasi 2×24 jam agar domain Anda sepenuhnya terhubung dengan website di Netlify.
