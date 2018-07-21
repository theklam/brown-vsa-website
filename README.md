# Pre-steps
Be sure to request a web publishing account from IT services.

# FTP / Cyberduck
Be sure you are using SFTP, and try the PORT 22.

# Email from Web Services:
You now have a web publishing account on the STUDENTS.BROWN.EDU server.


Your username is:  klam4

Your temporary password is:  Ha#2Azgt

Your URL is:  students.brown.edu/vsa/
Remember STUDENTS.BROWN.EDU is a Unix box, and Unix is case-sensitive.


For your security and convenience, you need to change your password.


To change your password you will need to log in to the STUDENTS.BROWN.EDU server:


 1. Open a terminal window (If on PC, use putty, if on Mac, use terminal)

 2. Connect to the host STUDENTS.BROWN.EDU (ssh klam4@students.brown.edu)

 3. Log in with the username and temporary password above

 4. Enter the command:  passwd

 5. Follow the prompts to update your password

 In order to publish your html files to the Web, you will need to use a secure FTP client to upload the files to your directory on the web server:


 1. Open your secure FTP client (WinSCP for PC, Fugu Mac, for example)

 2. Connect to the host STUDENTS.BROWN.EDU

 3. Log in with your username and password

 4. You will then be in your home directory: /home/klam4

 5. Transfer files from your drive or disk to the /home/klam4/www subdirectory


Thanks,

Brown WebServices

# Steps to get this going on your local machine:
1) Clone this repo.
2) Navigate to where you cloned this repo.
3) Run `php -S localhost:8000`. This starts the local server without any software installation.
4) Go to your browser and visit `localhost:8000` to see how your site looks.
5) Celebrate! Hooray! You've setup the VSA website. :-)

# Off Campus Access
Are you currently on or off campus? If off campus, you'll need to establish a VPN (https://it.brown.edu/services/type/virtual-private-network-vpn) connection in order to connect to the students server.

# SSH
In order to connect via ssh, use the following command: `ssh klam4@STUDENTS.BROWN.EDU`
