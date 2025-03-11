# LX Corp website (formally weebie)
You've landed on LX's github repo, made just for his website!
The REAL website is here: http://lxcorp.ddns.net/index.html - that's hosted on a Rapsberry Pi 5 :}
![image](https://github.com/user-attachments/assets/3abea029-5aba-4f7d-bf19-af3566571a5b)
Before you go on and ~~steal~~ *borrow* the code, letme tell u a little story...
## The long and short of it
Before this was made, and before I even knew what html even was, this was meant to be a test website for weebies. Specificly, [Index.html]([https://pages.github.com/](https://github.com/LX-WR/LX-Corp-Website-formally-weebie-/blob/main/index.html)) and [links.html]([https://pages.github.com/](https://github.com/LX-WR/LX-Corp-Website-formally-weebie-/blob/main/links.html)) were for the test (remember - u still must download da stylesheet and da images for it to look right!).
After that, I saw the immensly powerful capabilites of HTML code, and so I decided to create my entire website, my personal website, and our partner's website - all running on a Raspberry Pi 5 :}
Soon, the defualt weebie pages will be replaced by more *formal* language, while still keeping some of that nice LX2023 slang that I enjoy :} The old pages will always be available - just type "old" infront of da "[index.html]([https://pages.github.com/](https://github.com/LX-WR/LX-Corp-Website-formally-weebie-/blob/main/index.html))" or "[links.html]([https://pages.github.com/](https://github.com/LX-WR/LX-Corp-Website-formally-weebie-/blob/main/links.html))" to see the old ones.
## Beginner's suggestions
I run my webserver on my Raspberry Pi 5 - 8GB ram, running the apache webserver package. You can grab it on debain-based linux distros pretty easily (ubuntu, etc).  Do keep in mind that I've removed ALL images and backgrounds in the raw git, download the **.zip** archive if u want to have those too :}
You'll want to use apache2 to host a website, and i highly reccomend using a dedicated device (such as a raspberry pi) that is always on. 
These intructions are currently for LX OS and other debain-based distros.
1st, i'm gonna need u to install apache on the server:
```
sudo apt install apache2
```
now, if you don't already, install a GUI file manager (pcmanfm is my favorite):
```
sudo apt install pcmanfm # note, this is only needed for beginners, if u know how to copy files using da terminal, ignore this step
```
now run
```
sudo pcmanfm # again, if u don't need it, don't use pcmanfm
```
You'll be asked to provide your password. After that, navigate to
```
var/www/html/
```
and drop the website files in that folder. Now, navigate to your device's local IP address, preferably on a different machine. If you can't, simply type:
```
localhost://
```
into ur favorite webbrowser. If you do have ur local ip, you can forward it to the public internet via the settings on your router. I can't give instructions on how to do it, as there are too many different manufacturers :c 
Once you do that, if you'd like a free domain, head over to noip.com, create an account and point ur coustom url twoards ur port-forwarded public IP address. Don't know what ur public ip is? Just go to
```
https://whatismyipaddress.com/
```
and copy the iPV4 ip address.
That's the (very overhead) guide on how to host ur own website - in ur own house :}
## Is that all, LX2023?
No! You can enure that this website gets the help it needs by making commits! I, however, will be maintaining this website for as long as I see fit :} As of 3/11/25, the website is still in development, so there will be missing pages, and those will be fixed in the comming weeks. Farewell, traveler! :}
## Images of weebie :}
![image](https://github.com/user-attachments/assets/3abea029-5aba-4f7d-bf19-af3566571a5b)
![image](https://github.com/user-attachments/assets/86c71303-f7e3-45b9-a52d-f0929ab0c066)
![image](https://github.com/user-attachments/assets/e80023d3-de2d-407c-8931-83c919f6f901)
![image](https://github.com/user-attachments/assets/a4871113-30bf-4e1b-8726-95eb08b27dc0)
![image](https://github.com/user-attachments/assets/3da95c50-e199-4c5b-b380-f738344efc76)
secret stuff comming soon (maybe)






