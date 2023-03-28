/**
 * It would be great to take advatnage of online courses to further your knowledge
 * https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/video_galleries/lecture-videos/
 * 
 */

const sample_otutput_top = "top - 16:12:09 up  1:28,  2 users,  load average: 0.04, 0.01, 0.00\n\
Tasks: 165 total,\t1 running,\t164 sleeping,\t0 stopped,\t0 zombie\n\n\
%Cpu(s):\t0.0 us,\t0.0 sy,\t0.0 ni,\t99.9 id,\t0.0 wa,\t0.0 hi,\t0.1 si,\t0.0 st\n\
MiB Mem :\t1974.4 total,\t924.8 free,\t246.5 used,\t803.1 buff/cache\n\
MiB Swap:\t2048.0 total,\t2048.0 free,\t0.0 used.\t1539.2 avail Mem\n\n\
PID USER\t\tPR\tNI\tVIRT\tRES\tSHR\tS\t%CPU\t%MEM\tTIME+ COMMAND\n\
2737 root\t\t20\t0\t400060\t22288\t11008\tS\t0.3\t1.1\t0:04.54 fail2ban-server\n\
5496 kali-win\t20\t0\t10484\t4044\t3436\tR\t0.3\t0.2\t0:00.28 top\n\
1 root\t\t20\t0\t167664\t13396\t8520\tS\t0.0\t0.7\t0:11.33 systemd\n\
2 root\t\t20\t0\t0\t0\t0\tS\t0.0\t0.0\t0:00.21 kthreadd\n\
3 root\t\t0\t-20\t0\t0\t0\tI\t0.0\t0.0\t0:00.00 rcu_gp";


const network = [
    {
        term: "Application - presentation - session", prompt: "Descripbe an example of an app in one of the first 3 sessions:", description: "Layer 7 - Application The Application Layer in the OSI model is the layer that is the “closest to the end user”. It receives information directly from users and displays incoming data to the user. Oddly enough, applications themselves do not reside at the application layer. Instead the layer facilitates communication through lower layers in order to establish connections with applications at the other end. Web browsers (Google Chrome, Firefox, Safari, etc.) TelNet, and FTP, are examples of communications  that rely  on Layer 7. \n\
    Layer 6 - Presentation The Presentation Layer represents the area that is independent of data representation at the application layer. In general, it represents the preparation or translation of application format to network format, or from network formatting to application format. In other words, the layer “presents” data for the application or the network. A good example of this is encryption and decryption of data for secure transmission; this happens at Layer 6.\n\
     Layer 5 - Session When two computers or other networked devices need to speak with one another, a session needs to be created, and this is done at the Session Layer. Functions at this layer involve setup, coordination (how long should a system wait for a response, for example) and termination between the applications at each end of the session.",
        example: "Session Layer: The session layer deals with establishing and maintaining a connection between two devices. In this case, the session layer would establish and maintain a connection between your computer and the Zoom servers. Zoom uses the session layer to establish and maintain a connection between your computer and the Zoom servers.  Presentation Layer: The presentation layer deals with how data is presented to the user. In this case, the presentation layer would ensure that the video and audio data received from other participants are displayed and played back correctly on your computer screen and speakers. Zoom uses the presentation layer to encode, decode, and display video and audio data in a user-friendly manner.  Application Layer: The application layer is the layer that the end-user interacts with directly. In this case, the Zoom application is the application layer. It uses the lower layers to establish a connection to the Zoom servers, transmit and receive video and audio data, and provide a user-friendly interface for the user to interact with."
    },
    {
        prompt: "Describe an example of an app in one of the first 3 sessions:", term: "Transport, Network, Data Link, Physical", description: "\
    Layer 4 – Transport The Transport Layer deals with the coordination of the data transfer between end systems and hosts. How much data to send, at what rate, where it goes, etc. The best known example of the Transport Layer is the Transmission Control Protocol (TCP), which is built on top of the Internet Protocol (IP), commonly known as TCP/IP. TCP and UDP port numbers work at Layer 4, while IP addresses work at Layer 3, the Network Layer. \n\
    Layer 3 - Network Here at the Network Layer is where you’ll find most of the router functionality that most networking professionals care about and love. In its most basic sense, this layer is responsible for packet forwarding, including routing through different routers. You might know that your Boston computer wants to connect to a server in California, but there are millions of different paths to take. Routers at this layer help do this efficiently. \n\
    Layer 2 – Data Link The Data Link Layer provides node-to-node data transfer (between two directly connected nodes), and also handles error correction from the physical layer. Two sublayers exist here as well--the Media Access Control (MAC) layer and the Logical Link Control (LLC) layer. In the networking world, most switches operate at Layer 2. But it’s not that simple. Some switches also operate at Layer 3 in order to support virtual LANs that may span more than one switch subnet, which requires routing capabilities. \n\
    Layer 1 - Physical At the bottom of our OSI model we have the Physical Layer, which represents the electrical and physical representation of the system. This can include everything from the cable type, radio frequency link (as in a Wi-Fi network), as well as the layout of pins, voltages, and other physical requirements. When a networking problem occurs, many networking pros go right to the physical layer to check that all of the cables are properly connected and that the power plug hasn’t been pulled from the router, switch or computer, for example.",
        example: "Physical Layer: The physical layer deals with the physical connection between the computer and the network. In this case, it would involve the physical cable or wireless connection that connects your computer to the internet. Zoom uses the physical layer to transmit data over the internet using your computer's network adapter.  Data Link Layer: The data link layer deals with how data is transmitted over the physical connection. This layer is responsible for things like error checking and flow control. Zoom uses the data link layer to ensure that data is transmitted correctly over the physical connection and that there are no transmission errors.  Network Layer: The network layer deals with routing data between different networks. In this case, the network layer would route the data from your computer to the Zoom servers over the internet. Zoom uses the network layer to route data between different networks and to ensure that the data reaches its destination.  Transport Layer: The transport layer deals with the reliability of data transmission. It ensures that data is transmitted correctly and in the correct order. Zoom uses the transport layer to ensure that data is transmitted reliably over the internet using protocols such as TCP or UDP."
    },
    {
        prompt: "When should you use TCP vs UDP?", term: "TCP UDP",
        description: "Transmission Control Protocol (TCP) is connection-oriented, meaning once a connection has been established, data can be transmitted in two directions. TCP has built-in systems to check for errors and to guarantee data will be delivered in the order it was sent, making it the perfect protocol for transferring information like still images, data files, and web pages.\n\
        User Datagram Protocol (UDP) is a simpler, connectionless Internet protocol wherein error-checking and recovery services are not required. With UDP, there is no overhead for opening a connection, maintaining a connection, or terminating a connection; data is continuously sent to the recipient, whether or not they receive it."
    },
    {
        prompt: 'Why time-to-live (TTL) is useful?', term: "ttl", description: "Time to live (TTL) refers to the amount of time or “hops” that a packet is set to exist inside a network before being discarded by a router. TTL is also used in other contexts including CDN caching and DNS caching."
    },
    {
        prompt: "How could do you design a CDN in real life?", term: "cdn", description: "A content delivery network (CDN) is a group of geographically distributed servers that speed up the delivery of web content by bringing it closer to where users are. Data centers across the globe use caching, a process that temporarily stores copies of files, so that you can access internet content from a web-enabled device or browser more quickly through a server near you. CDNs cache content like web pages, images, and video in proxy servers near to your physical location. This allows you to do things like watch a movie, download software, check your bank balance, post on social media, or make purchases, without having to wait for content to load. CDNs cache content like web pages, images, and video in proxy servers near to your physical location. This allows you to do things like watch a movie, download software, check your bank balance, post on social media, or make purchases, without having to wait for content to load. You could think of a CDN like an ATM."
    },
    {
        prompt: "Example of Network Switch equivalent in other than internet usage?", term: "Network Switch",
        description: "A network switch connects users, applications, and equipment across a network so that they can communicate with one another and share resources. The simplest network switches offer connectivity exclusively to devices on a single local-area network (LAN). More advanced switches can connect devices from multiple LANs and may even incorporate basic data security functions. \n\
        Network switches are used to allow communication and sharing of resources between multiple devices on a network. They help in forwarding data packets to their destination and improve network performance by reducing network congestion and network collisions. Additionally, switches provide network segmentation, which enhances network security, and support advanced networking features like Quality of Service (QoS) and VLANs."
    },
    {
        term: "Mac", prompt: "What has a Mac address? And if you design a what it would require a Mac address?",
        description: "A MAC (Media Access Control) address is a unique identifier assigned to network interfaces for use as a network address in communications within a network segment. This use is common in most IEEE 802 networking technologies, including Ethernet, Wi-Fi, and Bluetooth.",
        example: "Every network interface, whether it's an Ethernet card or a Wi-Fi adapter, has a unique MAC address, which makes it possible for devices to communicate with each other on the same network."
    },
    {
        term: "Load Balancing", prompt: "Why would you use Load Balancing?", description: "Load balancing lets you evenly distribute network traffic to prevent failure caused by overloading a particular resource. This strategy **improves the performance and availability of applications, websites, databases, and other computing resources**. It also helps process user requests quickly and accurately.\n\
        **Scalability is hampered for most load balancers by a limited number of nodes for distributing processes**. Other challenges include energy consumption, performance monitoring, QoS management, resource scheduling, and service availability in the cloud."
    },
    {
        term: "DHCP", prompt: "When do you encounter DHCP working?", description: "DHCP (Dynamic Host Configuration Protocol) is a network protocol that automatically assigns IP addresses, subnet masks, default gateways, and other network configuration parameters to client devices. It's used to simplify the task of configuring devices on a network, as the DHCP server manages the assignment of IP addresses, rather than requiring manual configuration of each device.\n\
        When a device, such as a computer, connects to a network, it sends a broadcast request for an IP address. The DHCP server, which is usually built into a router, receives the request and assigns the device an available IP address from a pool of addresses. The DHCP server also assigns the device other information, such as the subnet mask, default gateway, and DNS server addresses. This process is called leasing an IP address and the lease has a limited time, after which the device will request a new lease.\n\
        DHCP makes it easy to add or remove devices from a network, as the DHCP server automatically assigns new addresses as needed and frees up addresses when devices are disconnected. This makes it an important component of most networks, especially in home or small office environments."
    },
    {
        term: "Clonning vs Automation", prompt: "In what situations would you clone vs automate an installation?", example: "In general, automation is a better option for large organizations that need to perform installations on a large scale, while cloning is a good choice for small organizations or individual users who want a simple and fast installation process.",
        description: "Advantages of Automation:\n 1. Flexibility: Automation allows you to perform installations in a flexible manner, making it easier to adapt to changes in the environment. For example, you can add or remove components of your installation process as needed, which can save time and effort.\n2. Repeatability: Automation can ensure that installations are performed consistently and reliably, even across multiple systems. This reduces the risk of errors or inconsistencies in the installation process.\n3. Scalability: Automation can be used to automate installations across large numbers of systems, which makes it an attractive option for large organizations or data centers.\n Disadvantages of Automation:\n 1. Complexity: Automation can be complex to set up, particularly for inexperienced users.\n2. Maintenance: Automated installation processes need to be maintained, and updates need to be made as the environment changes.\n Advantages of Cloning:\n 1. Simplicity: Cloning is a simple process that can be performed quickly and easily, making it an attractive option for smaller organizations or individual users.\n2. Speed: Cloning can be faster than other installation methods, as the entire operating system and all installed software is copied to the target system.\n Disadvantages of Cloning:\n 1. Inflexibility: Cloning does not offer the same level of flexibility as automation, as changes made to the original system will be reflected in all cloned systems.\n2. Compatibility: Cloning may not always be compatible with different systems, and compatibility issues can arise if hardware components are not identical between systems."
    },
    {
        term: "Preboot Execution Environment (PXE)", prompt: "When is this useful?",
        description: "Network booting is generally applied in a diskless environment using routers and centrally managed computers, also known as thin clients. \n\
        Centralized computing environments provide reduced maintenance costs, enhanced security and enhanced control over the system's workstations. \n\
        PXE code is generally delivered with computer machines on a ROM chip or a boot disk to enable remote boot and configuration. The process makes use of network protocols such as User Datagram Protocol (UDP), Trivial File Transfer Protocol (TFTP), Internet Protocol (IP) and Dynamic Host Configuration Protocol (DHCP)."
    },
    {
        term: "mke2fs", description: "A set of inode storage cells – each holds info about one file ● A set of scattered “superblocks” – holds global filesystem info (multiple copies for reliability) – size and location of inode tables, block map and usage, etc. ● A map of the disk blocks in the filesystem (used and free) ● The set of data blocks",
        prompt: "Whatis it used and why ?"
    },
    {
        term: "Mounting a filesystem", prompt: "What to consider when mounting a filesystem?",
        example: "When mounting a filesystem, there are several factors to consider, including:      Filesystem type: Different filesystem types have different properties and may be optimized for different use cases. Some common filesystem types in Linux include ext4, NTFS, and XFS. You should choose the appropriate filesystem type based on your needs and the capabilities of your operating system.      Mount point: The mount point is the directory on the existing filesystem where the new filesystem will be mounted. It is important to choose a mount point that makes sense for the purpose of the new filesystem. For example, if you are mounting a network share, you might want to use a mount point under /mnt.      Filesystem options: When mounting a filesystem, you can specify a variety of options that control how the filesystem is mounted and used. Some common options include read-only mode, user permissions, and disk caching.      Device and partition: You need to identify the device and partition that contains the filesystem you want to mount. This could be a physical disk, a network share, or a virtual device.      Security: Depending on the sensitivity of the data stored on the filesystem, you may want to consider security measures such as encrypting the filesystem or using access controls to restrict who can mount and access the filesystem.      Persistence: If you want the filesystem to be automatically mounted at boot time, you need to add an entry to the /etc/fstab file. This will ensure that the filesyste",
        description: "Filesystem must be mounted before use ● Must be made part of root filesystem\n\
        Can be mounted on (top of) any directory # mount /dev/sda1 /usr/local # df /usr/local – Use /mnt for temporary mounts – Want to set up automatic mounting"
    },
    {
        term: "fsck", prompt: "How does the FSCK handle failure and not written blocks?",
        example: "In general, when a power outage occurs during a filesystem check, fsck will detect the interruption when the system boots up again. It will then attempt to resume the check from where it left off. If the outage was brief and there was no damage to the filesystem, fsck may be able to complete the check successfully without any further action.  However, if the power outage was more severe and caused data corruption or other issues, fsck may not be able to complete the check without manual intervention. In some cases, it may even be necessary to restore from a backup to ensure data integrity.  To minimize the risk of data corruption during a power outage, it's recommended to use a battery backup or uninterruptible power supply (UPS) to keep the system running during a filesystem check. This can help ensure that the check is completed successfully and prevent data loss.",
        description: "During power failure, superblock, inodes, and data blocks may not get written to disk – fsck can fix minor damage (ext3/4 systems quickly) ● unreferenced inodes ● inexplicably large link counts ● unused data blocks not recorded in block maps ● data blocks listed as free that are also used in a file ● incorrect summary info in superblock – More complex damage will make fsck ask human ● Places unfixable files in lost+found directory ● You should re-run fsck until no errors are found"
    },
    {
        term: "The Filesystem", prompt: "Explain what  types of files are defined by linux",
        description: "● Linux defines seven types of files [-] - Regular files [d] - Directories [c] - Character device files [b] - Block device files [s] - Local domain sockets [p] - Named pipes (FIFO) [l] - Symbolic links ● ls -ld shows the filetype of a file"
    },
    {
        term: "Sockets & Pipes", prompt: "Whats the difference between local domain sockets and named pipes?",
        example: "local domain sockets are more powerful and versatile than named pipes, supporting many communication protocols and providing secure communication between processes on the same machine or across the network. Named pipes are simpler and less powerful, but are useful for basic one-way communication between processes running on the same machine.",
        description: "Local domain sockets ● Sockets provide connections between processes ● Local/UNIX domain sockets are only accessible through the filesystem ● Only used by processes involved in connection ● Created with socket, deleted by rm or unlink ● Used by X Windows, syslog, and printing system\n\n\
        Named pipes ● FIFO files that allow communication between processes on same host ● Created with mknod and deleted with rm"
    },
    {
        term: "Symbolic Links", prompt: "Give yourself owner execute",
        example: "700",
        description: "Nine permission bits – User:owner read, write, execute ● 400, 200, 100 – Group read, write, execute ● 40, 20, 10 – Other:world read, write execute ● 4,2,1 ● Ability to delete or rename is controlled by permissions on directory"
    },
    {
        term: "chmod", prompt: "What command for changing permssion | of a group? | How to give permission to everything ot the owner?",
        description: "– chmod changes permissions – chown changes ownership and group # chown -R user.group /home/user – umask ● Set shell parameters to control default permissions ● umask 027 gives everything to owner, forbids writes to group, and gives nothing to other users ● Usually set in /etc/profile or /etc/csh.login"
    },
    {
        term: "disk components", prompt: "What are the disk components? What is RAID or Host Bus Adapter or Drive Controller?",
        description: "Spinning Disk (magnetic) SSD (solid state disk) Drive Controller Host Bus Adapter RAID\n\
        Hard disk drive (HDD): This is the physical storage device that stores the data. It consists of one or more spinning disks that read and write data using read/write heads.      Solid-state drive (SSD): This is a newer type of storage device that uses flash memory to store data. It has no moving parts and can be faster and more reliable than HDDs.      RAID: RAID stands for \"redundant array of independent disks.\" It is a technology that combines multiple hard drives into a single logical unit. RAID can provide increased performance, data redundancy, and fault tolerance.      Host Bus Adapter (HBA): This is a component that connects the disk system to the computer's motherboard. It manages the data transfer between the disk system and the computer.      Drive controller: This is a component that manages the individual hard drives or SSDs in the disk system. It controls the read/write operations and other functions of the drive.  RAID is a technology that allows multiple hard drives to be combined into a single logical unit. There are several types of RAID configurations, including RAID 0, RAID 1, RAID 5, RAID 6, and RAID 10. Each RAID configuration provides different levels of performance, data redundancy, and fault tolerance.",
        example: " RAID employs the techniques of disk mirroring or disk striping. Mirroring will copy identical data onto more than one drive. Striping partitions help spread data over multiple disk drives. CAREFUL IS NOT BACKUP BECAUSE ERROR GETS MIRROWED\n\
        A host bus adapter (HBA) is a circuit board or integrated circuit adapter that connects a host system, such as a server, to a storage or network device.\n\
        A device that connects an unenclosed hard drive to the computer via USB. Drive adapters are generally used to clone the contents of an existing drive to a new drive."
    },
    {
        term: "Storage Needs", prompt: "How to check your storage needs, what to check for?",
        example: "Check with your departments to see what they need and current usage. See storage use trends and growth needs."
    },
    {
        term: 'NAS', example: "You can have multiple network interfaces on different networks to help increase the system in case of a network outage.",
        prompt: "What can you use NAS for?",
        description: "A NAS system is a storage device connected to a network that allows storage and retrieval of data from a centralized location for authorized network users and heterogeneous clients. NAS systems are flexible and scale-out, meaning that as you need additional storage, you can add on to what you have. NAS is like having a private cloud in the office. It’s faster, less expensive and provides all the benefits of a public cloud on site, giving you complete control. \n\n\
        Network Outage means an unscheduled period in which the Service is interrupted and not usable for sixty (60) or more seconds within a 15-minute period, as measured by Supplier"
    },
    {
        term: "Monitoring", example: "Various different aspects of the system, to detect a possible problem before it happens, or to fix a problem after it has happened before people complain. Disk Failures Running out of disk space System Running Networking Issues For printers (out of paper or paper jam) System Temperature Other Outages\n\
        System resource usage: You should monitor system resource usage, such as CPU, memory, and disk usage, to ensure that the system is not overloaded and is functioning efficiently.      System logs: You should monitor system logs, including the system log, application logs, and security logs, for errors, warnings, and other important messages. This can help you identify and troubleshoot issues before they become major problems.      Network traffic: You should monitor network traffic to ensure that the system is not being attacked or experiencing excessive traffic that could affect performance.      User activity: You should monitor user activity, including login attempts, file access, and system commands, to ensure that users are not abusing the system or engaging in malicious activity.      Backup and recovery: You should monitor backup and recovery processes to ensure that backups are being performed correctly and regularly, and that recovery processes are tested and ready to use in case of a system failure or disaster.      System updates and patches: You should monitor system updates and patches to ensure that the system is up-to-date and secure, and that updates and patches are applied in a timely manner.",
        prompt: "What to be monitoring on a system when u are a sys admin??"
    },
    {
        term: "sudo usermod", prompt: "The command \"sudo usermod -aG sudo theo\" will",
        description: "Add theo to the sudo group",
        example: "Adds the user theo to the sudo group, making it a secondary group for him."
    },
    {
        term: "membership permission on-creation", prompt: "When a user creates a new file or folder, which group membership is used to create the group permissions?",
        example: "The Primary group of the user is used to create assign the file to a group"
    },
    {
        term: "mv-command", prompt: "The command mv file1 file2 will",
        example: "Rename file1 to file2 and move file1 to file2"
    },
    {
        term: "chmod 755", prompt: "The command chmod 755 file1 will",
        example: "Change the permissions of file1 to rwxr-xr-x. Which is: Owner: Read, Write, Execute Group: Read, Execute Other: Read, Execute"
    },
    {
        term: "chmod o-x", prompt: "The command chmod o-x file1 will",
        example: "Remove the execute permission for the other group"
    },
    {
        term: "soft-link", prompt: "ln -s file1 file2 will",
        example: "Create a soft link from file1 to file2. Deleting, changing the name of the original file, will break the link. \n\
        You can confirm it with ls -l file1"
    },
    {
        term: "scp",
        prompt: "Problem: Copy a file named example.txt from your local machine to a remote server with the IP address 192.168.1.100, and save it in the /home/user directory on the remote server. Assume your username on the remote server is user.",
        example: "scp example.txt user@192.168.1.100:/home/user"
    },
    {
        term: "curl",
        prompt: "Retrieve the contents of the web page https://www.example.com/index.html and save it to a file named index.html in your current directory.",
        example: "curl https://www.example.com/index.html -o index.html",
        description: "-o is used to specify the file to save the contents to"
    },
    {
        term: "wget",
        prompt: "Download a file named file.zip from the web server https://example.com/downloads/file.zip and save it to a directory named downloads in your home directory.",
        example: "wget https://example.com/downloads/file.zip -P ~/downloads",
        description: "-P is used to specify the directory to save the file to"
    }, {
        term: "Bash scripting",
        prompt: "Write a script that takes two integer arguments and prints the sum of the two numbers. If no arguments are provided, print an error message.",
        description: "if [ $# -ne 2 ]; then\n  echo 'Usage: script_name num1 num2'\n  exit 1\nfi\n\n\
        \necho \"The sum of $num1 and $num2 is: $sum\"",
        example: "if [ $# -ne 2 ]; then\n  echo 'Usage: script_name num1 num2'\n  exit 1\nfi\n\nnum1=$1\nnum2=$2\nsum=$((num1 + num2))\necho \"The sum of $num1 and $num2 is: $sum\""
    },
    {
        term: "Bash scripting",
        prompt: "Write a script that takes a file name as an argument and checks if the file exists. If it does, print a message saying the file exists. If it doesn't, print a message saying the file doesn't exist.",
        example: "if [ $# -ne 1 ]; then\n  echo 'Usage: script_name filename'\n  exit 1\nfi\n\nfilename=$1\nif [ -e \"$filename\" ]; then\n  echo 'The file exists.'\nelse\n  echo 'The file does not exist.'\nfi",
        description: "if [ $# -ne 1 ]; then\n  echo 'Usage: script_name filename'\n  exit 1\nfi\n\n"
    },
    {
        term: "Bash scripting ",
        prompt: "Write a script that takes a file name as an argument and deletes the file if it exists. If it doesn't exist, print a message saying the file doesn't exist.",
        example: "if [ $# -ne 1 ]; then\n  echo 'Usage: script_name filename'\n  exit 1\nfi\n\nfilename=$1\nif [ -e \"$filename\" ]; then\n  rm \"$filename\"\n  echo 'File deleted.'\nelse\n  echo 'The file does not exist.'\nfi",
        description: "if [ $# -ne 1 ]; then\n  echo 'Usage: script_name filename'\n  exit 1\nfi\n\nfilename=$1\nif [ -e \"$filename\" ]; then\n\nelse\n  echo 'The file does not exist.'\nfi"
    },
    {
        term: "Bash scripting append_text_to_file",
        prompt: "Write a function that takes two arguments, a file name and a string of text, and appends the string of text to the end of the file. Call the function with the arguments 'file.txt' and 'Hello, world!'.",
        example: "append_text_to_file() {\n  filename=$1\ntext=$2\necho \"$text\" >> \"$filename\"\necho 'Text appended to file.'\n}\n\nappend_text_to_file 'file.txt' 'Hello, world!'",
        description: "\nappend_text_to_file 'file.txt' 'Hello, world!'"
    },
    {
        term: "Bash scripting count_file_stats",
        prompt: "Write a function that takes a file name as an argument and outputs the number of lines, words, and characters in the file. Call the function with the argument 'file.txt'.",
        example: "count_file_stats() {\n  filename=$1\nlines=$(wc -l < \"$filename\")\nwords=$(wc -w < \"$filename\")\ncharacters=$(wc -c < \"$filename\")\necho \"Lines: $lines\"\necho \"Words: $words\"\necho \"Characters: $characters\"\n}\n\ncount_file_stats 'file.txt'"
    },
    {
        term: "grep search",
        prompt: "Search for the word 'example' in a file named file.txt.",
        example: "grep 'example' file.txt",
        description: 'Print lines containing a pattern: grep [pattern] [file]\n' +
            'Print line numbers of matches: grep -n [pattern] [file]\n' +
            'Print number of matches: grep -c [pattern] [file]\n' +
            'Search recursively: grep -r [pattern] [directory]\n' +
            'Case-insensitive search: grep -i [pattern] [file]\n' +
            'Invert the match: grep -v [pattern] [file]\n' +
            'Match whole words only: grep -w [pattern] [file]\n'
    },
    {
        term: "grep line number",
        prompt: "Search for the word 'example' in a file named file.txt and print the line number where the word appears.",
        example: "grep -n 'example' file.txt",
        description: 'Print lines containing a pattern: grep [pattern] [file]\n' +
            'Print line numbers of matches: grep -n [pattern] [file]\n' +
            'Print number of matches: grep -c [pattern] [file]\n' +
            'Search recursively: grep -r [pattern] [directory]\n' +
            'Case-insensitive search: grep -i [pattern] [file]\n' +
            'Invert the match: grep -v [pattern] [file]\n' +
            'Match whole words only: grep -w [pattern] [file]\n'

    },
    {
        term: "grep count",
        prompt: "Search for the word 'example' in a file named file.txt and print the number of times the word appears.",
        example: "grep -c 'example' file.txt",
        description: 'Print lines containing a pattern: grep [pattern] [file]\n' +
            'Print line numbers of matches: grep -n [pattern] [file]\n' +
            'Print number of matches: grep -c [pattern] [file]\n' +
            'Search recursively: grep -r [pattern] [directory]\n' +
            'Case-insensitive search: grep -i [pattern] [file]\n' +
            'Invert the match: grep -v [pattern] [file]\n' +
            'Match whole words only: grep -w [pattern] [file]\n'

    },
    {
        term: "grep file extension",
        prompt: "Search for the word 'example' in all files in the current directory that have the .txt file extension.",
        example: "grep 'example' *.txt",
        description: 'Print lines containing a pattern: grep [pattern] [file]\n' +
            'Print line numbers of matches: grep -n [pattern] [file]\n' +
            'Print number of matches: grep -c [pattern] [file]\n' +
            'Search recursively: grep -r [pattern] [directory]\n' +
            'Case-insensitive search: grep -i [pattern] [file]\n' +
            'Invert the match: grep -v [pattern] [file]\n' +
            'Match whole words only: grep -w [pattern] [file]\n'

    },
    {
        term: "grep recursive",
        prompt: "Search for the word 'example' in all files in the current directory and its subdirectories.",
        example: "grep -r 'example' .",
        description: 'Print lines containing a pattern: grep [pattern] [file]\n' +
            'Print line numbers of matches: grep -n [pattern] [file]\n' +
            'Print number of matches: grep -c [pattern] [file]\n' +
            'Search recursively: grep -r [pattern] [directory]\n' +
            'Case-insensitive search: grep -i [pattern] [file]\n' +
            'Invert the match: grep -v [pattern] [file]\n' +
            'Match whole words only: grep -w [pattern] [file]\n'

    },
    {
        term: "grep case insensitive",
        prompt: "Search for the word 'example' in all files in the current directory and its subdirectories, ignoring case.",
        example: "grep -ri 'example' .",
        description: 'Print lines containing a pattern: grep [pattern] [file]\n' +
            'Print line numbers of matches: grep -n [pattern] [file]\n' +
            'Print number of matches: grep -c [pattern] [file]\n' +
            'Search recursively: grep -r [pattern] [directory]\n' +
            'Case-insensitive search: grep -i [pattern] [file]\n' +
            'Invert the match: grep -v [pattern] [file]\n' +
            'Match whole words only: grep -w [pattern] [file]\n'

    },
    {
        term: "Piping - ls and grep",
        prompt: "List all files in the current directory that contain the word 'example'.",
        description: "Use ls to get all files",
        example: "ls | grep 'example'"
    },
    {
        term: "Piping - ps and grep",
        prompt: "Find all processes that contain the word 'chrome' in their name.",
        description: "Use ps to get all processes and grep to filter the results\n aux is an option to ps that shows all processes",
        example: "ps aux | grep 'chrome'"
    },
    {
        term: "Piping - find and xargs",
        prompt: "Find all files in the current directory and its subdirectories that have the '.jpg' extension and delete them.",
        description: "Use find to get all files and xargs to execute a command for each result\n -name is an option to find that filters by file name",
        example: "find . -name '*.jpg' | xargs rm"
    },
    {
        term: "Piping - sort and uniq",
        prompt: "Count the number of occurrences of each line in a file named 'data.txt'.",
        description: "Use sort to sort the lines and uniq to count the occurrences\n -c is an option to uniq that counts the occurrences",
        example: "sort data.txt | uniq -c"
    },
    {
        term: "Piping - wc",
        prompt: "Count the number of lines in a file named 'example.txt'.",
        example: "cat example.txt | wc -l",
        description: "The `wc` command can be used to count the number of lines, words, and characters in a file or stream.\n\
         By default, `wc` counts all three of these statistics, but you can use the `-l` option to count only the number of lines.\n\n\
         In this example, we use the `cat` command to output the contents of the file 'example.txt', which is then piped to `wc -l` to count the number of lines."
    },
    {
        term: "Shbang - Bash script",
        prompt: "Create a Bash script named 'hello.sh' that prints the message 'Hello, World!' to the console when executed.",
        example: "#!/bin/bash\n\necho 'Hello, World!'",
        description: "The shebang `#!/bin/bash` is used to specify that the script should be executed using the Bash shell. The `echo` command is used to print the message 'Hello, World!' to the console. Save the script as a file named 'hello.sh' and make it executable with the command `chmod +x hello.sh`. You can then run the script by typing `./hello.sh` in the terminal."
    },
    {
        term: "Starting ssh Server",
        prompt: "Start the ssh server on your machine. How do you check status? How do you get your inet address?",
        example: "sudo service ssh start\nCheck status using: sudo service ssh status\nGet inet address using: ip addr | grep inet",
    },
    {
        term: "Tee - Append output to file",
        prompt: "Create a script named 'test.sh' that contains the following code:\n\n`#!/bin/bash`\n\n`echo 'Hello, world!' | tee -a output.txt`\n\nRun the script to append the output of the 'echo' command to a file named 'output.txt'.",
        example: "#!/bin/bash\n\necho 'Hello, world!' | tee -a output.txt",
        description: "The `tee` command allows you to write the output of a command to both the console and a file. The `-a` option tells `tee` to append to the file instead of overwriting it. In this example, we use `echo` to output a message, and then pipe it to `tee -a output.txt` to save it to a file named 'output.txt' and display it on the console."
    },
    {
        term: "cat - Display file contents",
        prompt: "Create a file named 'test.txt' that contains the following text:\n\n`Hello, world!`\n\nUse the `cat` command to display the contents of the file on the console.",
        example: "cat test.txt",
        description: "The `cat` command is used to display the contents of a file on the console. In this example, we create a file named 'test.txt' with the message 'Hello, world!', and then use `cat test.txt` to display the contents of the file on the console."
    },
    {
        term: "less - View file contents page-by-page",
        prompt: "Create a file named 'test.txt' that contains the following text:\n\n`Line 1\nLine 2\nLine 3\nLine 4\nLine 5`\n\nUse the `less` command to view the contents of the file page-by-page.",
        example: "less test.txt",
        description: "The `less` command is used to view the contents of a file page-by-page. This is useful for files that are too long to display on the console at once. In this example, we create a file named 'test.txt' with several lines of text, and then use `less test.txt` to view the contents of the file page-by-page."
    },
    {
        term: "man - View manual page",
        prompt: "Use the `man` command to view the manual page for the `ls` command.",
        example: "man ls",
        description: "The `man` command is used to view the manual page for a command or other topic. This provides detailed information on how to use the command, including all of its available options and arguments. In this example, we use `man ls` to view the manual page for the `ls` command."
    },
    {
        term: "cp - Copy files",
        prompt: "Create a file named 'test.txt' that contains the following text:\n\n`Hello, world!`\n\nUse the `cp` command to create a copy of the file named 'test_copy.txt'.",
        example: "cp test.txt test_copy.txt",
        description: "The `cp` command is used to copy files. In this example, we create a file named 'test.txt' with the message 'Hello, world!', and then use `cp test.txt test_copy.txt` to create a copy of the file named 'test_copy.txt'."
    },
    {
        term: "rm - Remove files",
        prompt: "Create a file named 'test.txt' that contains the following text:\n\n`Hello, world!`\n\nUse the `rm` command to delete the file.",
        example: "rm test.txt",
        description: "The `rm` command is used to delete files. In this example, we create a file named 'test.txt' with the message 'Hello, world!', and then use `rm test.txt` to delete the file."
    },
    {
        term: "rmdir - Remove an empty directory",
        prompt: "Remove the empty directory named 'testdir' that was created in the previous example.",
        example: "rmdir testdir",
        description: "The `rmdir` command is used to remove an empty directory. In this example, we assume that there is already an empty directory named 'testdir' (which was created in the previous example), and then use `rmdir testdir` to remove the directory."
    },
    {
        term: "mv - Move or rename files",
        prompt: "Rename the file named 'oldname.txt' to 'newname.txt'.",
        example: "mv oldname.txt newname.txt",
        description: "The `mv` command is used to move or rename files. In this example, we assume that there is already a file named 'oldname.txt', and then use `mv oldname.txt newname.txt` to rename the file to 'newname.txt'."
    },
    {
        term: "chmod - Change file permissions",
        prompt: "Change the permissions of a file named 'myfile.txt' to allow the owner to read, write, and execute the file, but only allow other users to read the file.",
        example: "chmod 744 myfile.txt",
        description: "The `chmod` command is used to change the permissions of a file. In this example, we use `chmod 744 myfile.txt` to allow the owner to read, write, and execute the file (represented by the digits '7', '4', and '4'), and to allow other users to read the file only (represented by the digits '4', '4', and '4')."
    },
    {
        term: "ps - List running processes",
        prompt: "List all running processes on the system.",
        example: "ps -e",
        description: "The `ps` command is used to list the running processes on the system. By default, it only lists the processes that are running in the current shell. In this example, we use the `-e` option to list all running processes on the system."
    },
    {
        term: "top - Display system resource usage",
        prompt: "Display the top processes consuming CPU resources.",
        example: "top",
        description: "The `top` command is used to display the system resource usage. By default, it displays the processes consuming the most CPU resources. In this example, we use `top` to display the top processes consuming CPU resources."
    },
    {
        term: "du - Show disk usage",
        prompt: "Show the disk usage of the current working directory.",
        example: "du",
        description: "The `du` command is used to show the disk usage of a file or directory. By default, it shows the disk usage of the current working directory. In this example, we use `du` to show the disk usage of the current working directory."
    },
    {
        term: "df - Show disk free space",
        prompt: "Show the free space on all mounted filesystems.",
        example: "df -h",
        description: "The `df` command is used to show the free space on all mounted filesystems. In this example, we use the `-h` option to display the free space in a human-readable format."
    },
    {
        term: "tar - Compress or extract files",
        prompt: "Create a compressed archive of a directory named 'mydir' and save it to a file named 'myarchive.tar.gz'.",
        example: "tar -czf myarchive.tar.gz mydir",
        description: "The `tar` command is used to create or extract compressed archives. In this example, we use `tar -czf myarchive.tar.gz mydir` to create a compressed archive of the directory 'mydir' and save it to a file named 'myarchive.tar.gz'. The `-c` option is used to create a new archive, the `-z` option is used to compress the archive using gzip, and the `-f` option is used to specify the output file name."
    },
    {
        term: "Grep - Invert match",
        prompt: "Search for all lines that do not contain the word 'example' in a file named 'file.txt'.",
        example: "grep -v 'example' file.txt",
        description: "This command searches for all lines in the file 'file.txt' that do not contain the word 'example'."
    }, {
        term: "Grep - Search for lines starting with a pattern",
        prompt: "Find all lines in a file named 'file.txt' that start with the word 'example'.",
        example: "grep '^example' file.txt",
        description: "This command searches for all lines in the file 'file.txt' that start with the word 'example'. The caret (^) symbol is used to match the start of a line."
    },
    {
        term: "Grep - Search for lines ending with a pattern",
        prompt: "Find all lines in a file named 'file.txt' that end with the word 'example'.",
        example: "grep 'example$' file.txt",
        description: "This command searches for all lines in the file 'file.txt' that end with the word 'example'. The dollar sign ($) symbol is used to match the end of a line."
    },
    {
        term: "Grep - Search for lines between patterns",
        prompt: "Find all lines in a file named 'file.txt' that are between the patterns 'start' and 'end'.",
        example: "grep -E 'start.*end' file.txt",
        description: "This command searches for all lines in the file 'file.txt' that are between the patterns 'start' and 'end'. The -E option is used to enable extended regular expressions."
    },
    {
        term: "Grep - Search for lines that match any of several patterns",
        prompt: "Find all lines in a file named 'file.txt' that contain either the word 'example1' or 'example2'.",
        example: "grep -e 'example1' -e 'example2' file.txt",
        description: "This command searches for all lines in the file 'file.txt' that contain either the word 'example1' or 'example2'. The -e option is used to specify multiple patterns."
    },
    {
        term: "Grep - Search for lines that match a specific pattern",
        prompt: "Find all lines in a file named 'file.txt' that match the regular expression pattern '[0-9]+'.",
        example: "grep -E '[0-9]+' file.txt",
        description: "This command searches for all lines in the file 'file.txt' that contain one or more digits. The -E option is used to enable extended regular expressions."
    },
    {
        term: "Find the path to the home directory",
        prompt: "What is the full path to the home directory of the current user?",
        description: "The home directory contains a user's personal files and settings. It is located within the /home directory and named after the user.",
        example: "echo $HOME"
    },
    {
        term: "Find the path to the current working directory",
        prompt: "What is the full path to the current working directory?",
        description: "The current working directory is the directory that the user is currently located in. It can be found using the 'pwd' command.",
        example: "pwd"
    },
    {
        term: "Find the path to the root directory",
        prompt: "What is the full path to the root directory?",
        description: "The root directory is the top-level directory in the filesystem hierarchy. It is represented by a single forward slash (/).",
        example: "echo /"
    },
    {
        term: "Find the path to the system logs directory",
        prompt: "What is the full path to the system logs directory?",
        description: "The system logs directory contains log files that record system events and errors. It is typically located in the /var/log directory.",
        example: "echo /var/log"
    },
    {
        term: "Find the path to the Apache configuration file",
        prompt: "What is the full path to the Apache configuration file?",
        description: "The Apache web server configuration file is used to specify settings for the server, such as which ports to listen on, which files to serve, and how to handle requests. It is typically located in the /etc/apache2 directory.",
        example: "echo /etc/apache2/apache2.conf"
    }
    ,
    {
        term: "Find the path to the passwd file",
        prompt: "What is the full path to the passwd file?",
        description: "The passwd file contains information about user accounts on the system, including usernames, user IDs, home directories, and login shells. It is typically located in the /etc directory.",
        example: "echo /etc/passwd"
    },
    {
        term: "Find the path to the group file",
        prompt: "What is the full path to the group file?",
        description: "The group file contains information about user groups on the system, including group names, group IDs, and the users who belong to each group. It is typically located in the /etc directory.",
        example: "echo /etc/group"
    },
    {
        term: "Find the path to the shadow file",
        prompt: "What is the full path to the shadow file?",
        description: "The shadow file contains encrypted password information for user accounts on the system. It is typically located in the /etc directory.",
        example: "echo /etc/shadow"
    },
    {
        term: "Find the path to the fstab file",
        prompt: "What is the full path to the fstab file?",
        description: "The fstab file contains information about file systems that are mounted at boot time, including their device names, mount points, and file system types. It is typically located in the /etc directory.",
        example: "echo /etc/fstab"
    },
    {
        term: "Find the path to the hosts file",
        prompt: "What is the full path to the hosts file?",
        description: "The hosts file contains mappings of hostnames to IP addresses, allowing the system to resolve domain names to IP addresses. It is typically located in the /etc directory.",
        example: "echo /etc/hosts"
    },
    {
        term: "Find the path to the hostname file",
        prompt: "What is the full path to the hostname file?",
        description: "The hostname file contains the hostname of the system. It is typically located in the /etc directory.",
        example: "echo /etc/hostname"
    },
    {
        term: "Find the path to the sudoers file",
        prompt: "What is the full path to the sudoers file?",
        description: "The sudoers file contains configuration information for the 'sudo' command, allowing users to execute commands with superuser privileges. It is typically located in the /etc directory.",
        example: "echo /etc/sudoers"
    },
    {
        term: "Find the path to the resolv.conf file",
        prompt: "What is the full path to the resolv.conf file?",
        description: "The resolv.conf file contains information about the DNS servers that are used by the system to resolve domain names to IP addresses. It is typically located in the /etc directory.",
        example: "echo /etc/resolv.conf"
    },
    {
        term: "List all repositories",
        prompt: "What command is used to list all repositories on an Ubuntu system?",
        description: "The 'sudo cat /etc/apt/sources.list' command can be used to list all repositories on an Ubuntu system.",
        example: "sudo cat /etc/apt/sources.list"
    },
    {
        term: "Update repositories",
        prompt: "What command is used to update the repositories on an Ubuntu system?",
        description: "The 'sudo apt-get update' command can be used to update the repositories on an Ubuntu system.",
        example: "sudo apt-get update"
    },
    {
        term: "Upgrade packages",
        prompt: "What command is used to upgrade the packages on an Ubuntu system?",
        description: "The 'sudo apt-get upgrade' command can be used to upgrade the packages on an Ubuntu system.",
        example: "sudo apt-get upgrade"
    },
    {
        term: "Dist-upgrade packages",
        prompt: "What command is used to upgrade the packages, including any dependencies, on an Ubuntu system?",
        description: "The 'sudo apt-get dist-upgrade' command can be used to upgrade the packages, including any dependencies, on an Ubuntu system.",
        example: "sudo apt-get dist-upgrade"
    },
    {
        term: "Remove unused packages",
        prompt: "What command is used to remove unused packages on an Ubuntu system?",
        description: "The 'sudo apt-get autoremove' command can be used to remove unused packages on an Ubuntu system.",
        example: "sudo apt-get autoremove"
    },
    {
        term: "Remove unused packages and their dependencies",
        prompt: "What command is used to remove unused packages and their dependencies on an Ubuntu system?",
        description: "The 'sudo apt-get autoclean' command can be used to remove unused packages and their dependencies on an Ubuntu system.",
        example: "sudo apt-get autoclean"
    },
    {
        term: "Remove unused packages, dependencies, and cached files",
        prompt: "What command is used to remove unused packages, their dependencies, and cached files on an Ubuntu system?",
        description: "The 'sudo apt-get clean' command can be used to remove unused packages, their dependencies, and cached files on an Ubuntu system.",
        example: "sudo apt-get clean"
    },
    {
        term: "Check for broken dependencies",
        prompt: "What command is used to check for broken dependencies on an Ubuntu system?",
        description: "The 'sudo apt-get check' command can be used to check for broken dependencies on an Ubuntu system.",
        example: "sudo apt-get check"
    },
    {
        term: "Remove a package",
        prompt: "What command is used to remove a package named 'nginx'?",
        description: "The 'sudo apt-get remove' command can be used to remove packages on an Ubuntu system.",
        example: "sudo apt-get remove nginx"
    },
    {
        term: "Remove a package and its configuration files",
        prompt: "What command is used to remove a package named 'mysql-server' and its configuration files?",
        description: "The 'sudo apt-get purge' command can be used to remove packages and their configuration files on an Ubuntu system.",
        example: "sudo apt-get purge mysql-server"
    },
    {
        term: "Install a package without confirmation",
        prompt: "What command is used to install a package named 'python3' without asking for confirmation?",
        description: "The 'sudo apt-get install -y' command can be used to install packages without asking for confirmation on an Ubuntu system.",
        example: "sudo apt-get install -y python3"
    },
    {
        term: "Install a package and its dependencies without confirmation",
        prompt: "What command is used to install a package named 'apache2' and its dependencies without asking for confirmation?",
        description: "The 'sudo apt-get install -f' command can be used to install packages and their dependencies without asking for confirmation on an Ubuntu system.",
        example: "sudo apt-get install -f apache2"
    },
    {
        term: "Ubuntu Release Upgrade",
        prompt: "What are the best practices to follow when performing a release upgrade on an Ubuntu system?\n\
        What would you do if your boss asked you to perform a release upgrade on a production system?",
        example: "Backup your data: Always backup your important data before performing a release upgrade. This will ensure that you can recover your data if anything goes wrong during the upgrade process.\n\nPlan the upgrade: Before performing the upgrade, review the release notes and upgrade instructions for the specific release you're upgrading to. This will help you understand the changes that will be made to the system and prepare for any potential issues.\n\nTest the upgrade: If possible, test the release upgrade in a non-production environment before upgrading your production system. This will allow you to identify and resolve any issues before performing the upgrade on your production system.\n\nUpdate packages: Before performing the release upgrade, make sure all currently installed packages are up-to-date by running sudo apt-get update && sudo apt-get upgrade.\n\nClean up the system: Remove any unnecessary packages and files from the system to ensure a clean upgrade. You can use the sudo apt-get autoremove and sudo apt-get autoclean commands to clean up the system.\n\nMonitor the upgrade: During the upgrade process, monitor the system for any issues or errors. You can use the tail -f /var/log/syslog command to monitor the system log file in real-time.\n\nVerify the upgrade: After the upgrade is complete, verify that the system is functioning correctly and all necessary packages and configurations are in place.",
        description: "The best practices to follow when performing a release upgrade on an Ubuntu system are to backup your data, plan the upgrade, test the upgrade, update packages, clean up the system, monitor the upgrade, and verify the upgrade."
    },
    {
        term: "Ubuntu Release Upgrade",
        prompt: "Perform a release upgrade from Ubuntu 18.04 LTS to Ubuntu 20.04 LTS using the command `sudo do-release-upgrade`.",
        example: "sudo do-release-upgrade",
        description: "To perform a release upgrade from Ubuntu 18.04 LTS to Ubuntu 20.04 LTS using the `do-release-upgrade` command, follow these steps:\n\n1. Open a terminal and run the command `sudo do-release-upgrade`\n2. Follow the prompts to confirm the upgrade and provide any necessary input.\n3. Wait for the upgrade process to complete.\n4. After the upgrade is complete, reboot the system to apply the changes."
    },
    {
        term: "Ubuntu Release Distribution Upgrade",
        prompt: "How to upgrade, the current distribution packages?, What is the difference between `sudo do-release-upgrade` and `sudo apt-get dist-upgrade`?",
        example: "sudo apt-get dist-upgrade",
        description: "The `do-release-upgrade` command is specifically designed to upgrade an Ubuntu system to a new release, whereas `apt-get dist-upgrade` is used to upgrade the current distribution's packages to their latest versions. While `apt-get dist-upgrade` can be used to upgrade to a newer version of Ubuntu, it does not handle some aspects of the upgrade process, such as modifying the system's sources.list file to point to the new release's repositories, which is handled by `do-release-upgrade`."
    },
    // Searching for software
    {
        term: "apt-cache search",
        prompt: "Using `apt-cache search`, find a package that provides the `grep` command.",
        example: "apt-cache search grep",
        description: "The `apt-cache search` command searches for packages in the package cache that match the given search term. In this example, we're searching for packages that provide the `grep` command."
    },
    {
        term: "apt-file search",
        prompt: "Using `apt-file search`, find the package that provides the `ls` command.",
        example: "apt-file search /bin/ls",
        description: "The `apt-file search` command searches for packages that provide the specified file. In this example, we're searching for the package that provides the `/bin/ls` file, which contains the `ls` command."
    },
    {
        term: "dpkg -S",
        prompt: "Using `dpkg -S`, find the package that provides the `ssh` command.",
        example: "dpkg -S /usr/bin/ssh",
        description: "The `dpkg -S` command searches for the package that provides the specified file. In this example, we're searching for the package that provides the `/usr/bin/ssh` file, which contains the `ssh` command.\n\
        The dpkg -S command searches for files installed on the local system from installed packages, it does not search on the internet."
    },
    {
        term: "aptitude search",
        prompt: "Using `aptitude search`, find all packages that start with the letters \"python3-\" and end with \"-dev\".",
        example: "aptitude search '^python3-.*-dev$'",
        description: "The `aptitude search` command searches for packages that match a specified pattern. In this example, we're searching for packages that start with \"python3-\" and end with \"-dev\". The `^` and `$` characters are regular expression anchors that match the beginning and end of the package name, respectively.\n\
        aptitude is a package manager for Debian-based Linux systems like Ubuntu that searches and installs packages from online repositories, similar to apt. However, it also has a powerful search function that can be used to find packages locally or remotely. By default, aptitude searches for packages available in the configured repositories, but it can also search for packages that are installed locally."
    },
    // VIM
    {
        term: "Vim word navigation - next word",
        prompt: "Move to the next word in Vim.",
        example: "Press 'w' to move to the next word.",
        description: "In Vim, 'w' moves the cursor to the beginning of the next word. Use this command to quickly move through a file or to navigate to the next word."
    },
    {
        term: "Vim word navigation - beginning of word",
        prompt: "Move to the beginning of the word in Vim.",
        example: "Press 'b' to move to the beginning of the word.",
        description: "In Vim, 'b' moves the cursor to the beginning of the current word and traverses to the previous word. Use this command to quickly move through a file or to navigate to the beginning of a word."
    },
    {
        term: "Vim line navigation - beginning of line",
        prompt: "Move to the beginning of the line in Vim.",
        example: "Press '0' to move to the beginning of the line.",
        description: "In Vim, '0' moves the cursor to the beginning of the line. Use this command to quickly move to the beginning of a line."
    },
    {
        term: "Vim line navigation - end of line",
        prompt: "Move to the end of the line in Vim.",
        example: "Press '$' to move to the end of the line.",
        description: "In Vim, '$' moves the cursor to the end of the line. Use this command to quickly move to the end of a line."
    },
    {
        term: "Vim file navigation - end of file",
        prompt: "Move to the end of the file in Vim.",
        example: "Press 'G' to move to the end of the file.",
        description: "In Vim, 'G' moves the cursor to the end of the file. Use this command to quickly move to the end of a file."
    },
    {
        term: "Vim file navigation - beginning of file",
        prompt: "Move to the beginning of the file in Vim.",
        example: "Press 'gg' to move to the beginning of the file.",
        description: "In Vim, 'gg' moves the cursor to the beginning of the file. Use this command to quickly move to the beginning of a file."
    },

    {
        term: "Vim line deletion - end of line",
        prompt: "Delete from the cursor to the end of the line in Vim.",
        example: "Press 'd$' to delete to the end of the line.",
        description: "In Vim, 'd$' deletes from the current cursor position to the end of the line. Use this command to quickly delete text to the end of a line."
    },
    {
        term: "Vim line deletion - current line",
        prompt: "Delete the current line in Vim.",
        example: "Press 'dd' to delete the current line.",
        description: "In Vim, 'dd' deletes the current line. Use this command to quickly delete the entire current line."
    },
    {
        term: "Vim word deletion - current word",
        prompt: "Delete the current word in Vim.",
        example: "Press 'dw' to delete the current word.",
        description: "In Vim, 'dw' deletes the current word."
    },
    {
        term: "Vim Search",
        prompt: "How do you search for a word in Vim?",
        example: "Type '?' followed by the word you want to search for.",
        description: "In Vim, you can search for a word using the '?' command followed by the word you want to search for. Vim will highlight the first occurrence of the word and you can navigate to the next occurrence using the 'n' command."
    },
    {
        term: "Vim Replace",
        prompt: "How do you replace all occurrences of a word with another word in Vim?",
        example: "Type '%gc/word/anotherword/gc'.",
        description: "In Vim, you can replace all occurrences of a word with another word using the '%gc/word/anotherword/gc' command. This will replace all occurrences of 'word' with 'anotherword', and confirm each replacement before making the change."
    },
    {
        term: "Vim replace",
        prompt: "Replace all occurrences of 'old' with 'new' in the current line in Vim.",
        example: ":s/old/new/g",
        description: "In Vim, ':s/old/new/g' is used to replace all occurrences of 'old' with 'new' in the current line. This command only affects the current line."
    },
    {
        term: "Vim word navigation- previous word",
        prompt: "Move to the end of the word in Vim.",
        example: "Press 'e' to move to the end of the word.",
        description: "In Vim, 'e' moves the cursor to the end of the current word and traverses to the next word. Use this command to quickly move through a file or to navigate to the end of a word."
    },

    // Security
    {
        term: "Fail2ban start",
        prompt: "How do you start Fail2ban?",
        example: "Run 'sudo service fail2ban start' in the terminal.",
        description: "To start Fail2ban, you can run the command 'sudo service fail2ban start' in the terminal. This will start the Fail2ban service on your system."
    },
    {
        term: "Fail2ban status sshd",
        prompt: "How do you check the status of Fail2ban for the sshd service?",
        example: "Run 'sudo service fail2ban status sshd' in the terminal.",
        description: "To check the status of Fail2ban for the sshd service, you can run the command 'sudo service fail2ban status sshd' in the terminal. This will display the current status of the sshd jail, including the number of failed attempts and the time of the last ban action."
    },
    {
        term: "Fail2ban unban IP",
        prompt: "How do you unban an IP address in Fail2ban?",
        example: "Run 'sudo fail2ban-client set sshd unbanip IPADDRESS' in the terminal.",
        description: "To unban an IP address in Fail2ban, you can run the command 'sudo fail2ban-client set sshd unbanip IPADDRESS' in the terminal. Replace 'IPADDRESS' with the IP address that you want to unban. This will remove the IP address from the Fail2ban blacklist for the sshd jail."
    },
    {
        term: "Fail2ban list banned IPs",
        prompt: "How do you list all the IPs that are currently banned by Fail2ban?",
        example: "Run 'sudo fail2ban-client status' in the terminal.",
        description: "To list all the IPs that are currently banned by Fail2ban, you can run the command 'sudo fail2ban-client status' in the terminal. This will display the status of all the jails, including the list of currently banned IPs for each jail."
    },
    {
        term: "Fail2ban ban specific IP",
        prompt: "How do you ban a specific IP address using Fail2ban?",
        example: "Run 'sudo fail2ban-client set sshd banip IPADDRESS' in the terminal.",
        description: "To ban a specific IP address using Fail2ban, you can run the command 'sudo fail2ban-client set sshd banip IPADDRESS' in the terminal. Replace 'IPADDRESS' with the IP address that you want to ban. This will add the IP address to the Fail2ban blacklist for the sshd jail, preventing further access from that IP address."
    },
    // UFW commands
    {
        term: "UFW deny incoming",
        prompt: "How do you deny all incoming connections using UFW?",
        example: "Run 'sudo ufw default deny incoming' in the terminal.",
        description: "To deny all incoming connections using UFW, you can run the command 'sudo ufw default deny incoming' in the terminal. This will set the default policy to deny incoming connections."
    },
    {
        term: "UFW allow outgoing",
        prompt: "How do you allow all outgoing connections using UFW?",
        example: "Run 'sudo ufw default allow outgoing' in the terminal.",
        description: "To allow all outgoing connections using UFW, you can run the command 'sudo ufw default allow outgoing' in the terminal. This will set the default policy to allow outgoing connections."
    },
    {
        term: "UFW allow ssh",
        prompt: "How do you allow SSH connections using UFW?",
        example: "Run 'sudo ufw allow ssh' in the terminal.",
        description: "To allow SSH connections using UFW, you can run the command 'sudo ufw allow ssh' in the terminal. This will add a rule to allow incoming SSH connections on port 22."
    },
    {
        term: "UFW enable",
        prompt: "How do you enable UFW?",
        example: "Run 'sudo ufw enable' in the terminal.",
        description: "To enable UFW, you can run the command 'sudo ufw enable' in the terminal. This will activate the firewall and enable the rules that have been configured."
    },
    {
        term: "UFW list rules",
        prompt: "How do you list the rules that have been configured in UFW?",
        example: "Run 'sudo ufw -L' in the terminal.",
        description: "To list the rules that have been configured in UFW, you can run the command 'sudo ufw -L' in the terminal. This will display a list of the rules that have been added to the firewall, including the default policies and any custom rules that have been added."
    },
    {
        term: "UFW allow HTTP",
        prompt: "How do you allow HTTP connections using UFW?",
        example: "Run 'sudo ufw allow http' in the terminal.",
        description: "To allow HTTP connections using UFW, you can run the command 'sudo ufw allow http' in the terminal. This will add a rule to allow incoming HTTP connections on port 80."
    },
    {
        term: "UFW allow HTTPS",
        prompt: "How do you allow HTTPS connections using UFW?",
        example: "Run 'sudo ufw allow https' in the terminal.",
        description: "To allow HTTPS connections using UFW, you can run the command 'sudo ufw allow https' in the terminal. This will add a rule to allow incoming HTTPS connections on port 443."
    },
    {
        term: "UFW status verbose",
        prompt: "How do you display the current status of UFW in verbose mode?",
        example: "Run 'sudo ufw status verbose' in the terminal.",
        description: "To display the current status of UFW in verbose mode, you can run the command 'sudo ufw status verbose' in the terminal. This will show the current status of the firewall, including the list of rules that have been configured and the current default policies."
    },
    {
        term: "UFW list rules",
        prompt: "How do you list the rules that have been configured in UFW?",
        example: "Run 'sudo ufw status verbose' in the terminal.",
        description: "To list the rules that have been configured in UFW, you can run the command 'sudo ufw status verbose' in the terminal. This will display a list of the rules that have been added to the firewall, including the default policies and any custom rules that have been added."
    },
    {
        term: "UFW delete rule",
        prompt: "How do you delete a specific rule in UFW? e..g rule Number 2 appear as\n\
         [ 2] Apache                     ALLOW IN    Anywhere \n\n\
         And you want to delete Apache",
        example: "Run 'sudo ufw delete RULENUMBER' in the terminal. e.g.",
        description: "To delete a specific rule in UFW, you can run the command 'sudo ufw delete RULENUMBER' in the terminal. Replace 'RULENUMBER' with the number of the rule that you want to delete, as listed in the output of the 'sudo ufw status verbose' command. This will remove the selected rule from the firewall configuration."
    },
    {
        term: "Process Status Symbols",
        prompt: "What does the 'D' status symbol mean in the `ps aux` command output?",
        example: "The 'D' status symbol in `ps aux` output means that the process is blocked waiting for I/O to complete.",
        description: "In the `ps aux` command output, the 'D' status symbol indicates that the process is blocked and waiting for I/O to complete. This is also known as disk sleep. The other common status symbols in `ps aux` output include 'S' for sleep, 'R' for running, and 'T' for stopped.\n\
        S: Sleep. The process is sleeping and waiting for some event to occur.     R: Running. The process is currently running or executing.     D: Disk sleep. The process is blocked waiting for I/O to complete.     T: Stopped. The process has been stopped, usually by receiving a signal.     Z: Zombie. The process has completed execution but is still listed in the process table because its parent process hasn't yet read its exit status.     I: Idle. The process is idle or is running with a low priority.     <: High-priority. The process is running with a high priority.     N: Low-priority. The process is running with a low priority.     s: Session leader. The process is a session leader.     l: Multithreaded. The process is multithreaded (using CLONE_THREAD, like NPTL pthreads do).     +: Foreground. The process is running in the foreground process group of its controlling terminal."
    },
    {
        term: "cpu-usage-stat-us",
        prompt: "What does the 'us' CPU usage statistic represent?",
        example: "The 'us' CPU usage statistic represents the percentage of time that the CPU is being used in user space.",
        description: "In CPU usage statistics, the 'us' value represents the percentage of time that the CPU is being used in user space, or in other words, the amount of time that processes are spending in user mode. This value is often displayed as part of the output of commands like `top` or `vmstat`." + sample_otutput_top
    },
    {
        term: "cpu-usage-stat-us-sy",
        prompt: "What does the 'sy' CPU usage statistic represent?",
        example: "The 'sy' CPU usage statistic represents the percentage of time that the CPU is being used in system space.",
        description: "In CPU usage statistics, the 'sy' value represents the percentage of time that the CPU is being used in system space, or in other words, the amount of time that the kernel is spending in kernel mode. This value is often displayed as part of the output of commands like `top` or `vmstat`." + sample_otutput_top
    },
    {
        term: "cpu-usage-stat-us-sy",
        prompt: "What does the 'ni' CPU usage statistic represent?",
        example: "The 'ni' CPU usage statistic represents the percentage of time that the CPU is being used by processes with a low priority (nice value).",
        description: "In CPU usage statistics, the 'ni' value represents the percentage of time that the CPU is being used by processes with a low priority (nice value). This value is often displayed as part of the output of commands like `top` or `vmstat`." + sample_otutput_top
    },
    {
        term: "cpu-usage-stat-us-id",
        prompt: "What does the 'id' CPU usage statistic represent?",
        example: "The 'id' CPU usage statistic represents the percentage of time that the CPU is idle.",
        description: "In CPU usage statistics, the 'id' value represents the percentage of time that the CPU is idle, or in other words, the amount of time that there are no processes running on the CPU. This value is often displayed as part of the output of commands like `top` or `vmstat`." + sample_otutput_top
    },
    {
        term: "cpu-usage-stat-us-hi",
        prompt: "What does the 'hi' CPU usage statistic represent?",
        example: "The 'hi' CPU usage statistic represents the percentage of time that the CPU is interrupted by hardware.",
        description: "In CPU usage statistics, the 'hi' value represents the percentage of time that the CPU is interrupted by hardware, or in other words, the amount of time that the CPU spends handling hardware interrupts. This value is often displayed as part of the output of commands like `top` or `vmstat`." + sample_otutput_top
    },
    {
        term: "cpu-usage-stat-us-si",
        prompt: "What does the 'si' CPU usage statistic represent?",
        example: "The 'si' CPU usage statistic represents the percentage of time that the CPU is interrupted by software.",
        description: "In CPU usage statistics, the 'si' value represents the percentage of time that the CPU is interrupted by software, or in other words, the amount of time that the CPU spends handling software interrupts. This value is often displayed as part of the output of commands like `top` or `vmstat`." + sample_otutput_top
    },
    {
        term: "Free Memory Display",
        prompt: "How do you display the amount of free memory in the system?",
        example: "Run 'free -h' in the terminal.",
        description: "To display the amount of free memory in the system, you can run the command 'free -h' in the terminal. This will show the memory usage in human-readable format, with the amount of free, used, and available memory."
    },
    {
        term: "Watch Command",
        prompt: "How do you continuously display the amount of free memory in the system every second using the watch command?",
        example: "Run 'watch -n 1 free -h' in the terminal.",
        description: "To continuously display the amount of free memory in the system every second using the watch command, you can run the command 'watch -n 1 free -h' in the terminal. This will show the memory usage in human-readable format every second, and you can exit the command by pressing Ctrl + C."
    }
]

// I got the study set way too long... This is a specific focus for the midterm
const network_midterm = [

]

const artificialIntelligence = [
    {
        term: "Backpropagation Neural Network",
        description: "A backpropagation neural network is an approach to train neural networks using a supervised learning algorithm. It involves providing the neural network with input-output pairs where the correct output is already known. The network processes the input, generates an output, and compares it to the correct value. If the output is incorrect, adjustments are made to the network's weights and biases through a process called backpropagation. This process is iteratively repeated until the network can produce the desired output.",
        prompt: "Design an application using a backpropagation neural network"
    },
    {
        term: "AI Definitions",
        prompt: "Define in your own words at least one of the following: (a) intelligence, (b) artificial intelligence, (c) agent, (d) rationality, (e) logical reasoning.",
        description: "a. Intelligence refers to the ability of a system or organism to acquire, apply, and adapt knowledge and skills in order to perform well in various environments. b. Artificial intelligence is the field of study that focuses on creating and implementing computer systems capable of performing tasks that typically require human intelligence. c. An agent is an entity that perceives its environment, processes the information, and responds with appropriate actions. d. Rationality is the quality of a system that makes optimal decisions based on its knowledge and available information. e. Logical reasoning is the process of drawing conclusions from premises or facts, ensuring that the resulting conclusions are valid and consistent with the initial information."
    },
    {
        term: "Evan-analogy-Program",
        prompt: "What is the Evan's ANALOGY Program?",
        description: "The Evan's ANALOGY Program (EAP) is a computer-based test designed to measure verbal reasoning ability through analogy questions. The test is often used for admissions purposes by universities, graduate programs, and certain professions, such as law and medicine.",
        example: "The Evan's ANALOGY Program (EAP) is a computer-based test designed to measure verbal reasoning ability through analogy questions. The test is often used for admissions purposes by universities, graduate programs, and certain professions, such as law and medicine."
    },
    {
        term: "evans-analogy-program-extension",
        prompt: "Suppose we extend Evans’s ANALOGY program so that it can score 200 on a standard IQ test. Would we then have a program more intelligent than a human? Explain.",
        example: "The program would not be more intelligent than a human at present, as its proficiency in standard IQ tests only indicates its ability to perform well in these evaluations. These tests do not encompass the other aspects of human intelligence, such as the capacity to formulate strategy, retain information, or reach conclusions through introspection and reflection."
    },
    {
        term: "science-ai-engineering",
        prompt: "Is AI a science, or is it engineering? Or neither or both? Expain.",
        example: "A science can be defined as the systematic acquisition of empirical knowledge through the application of the scientific method. Engineering, on the other hand, involves the practical utilization of scientific knowledge to address societal issues. Artificial Intelligence can be seen as a science in that it involves the systematic study and understanding of AI systems with the aim of advancing the knowledge domain. At the same time, it can also be viewed as an engineering discipline as it leverages this knowledge base to develop practical applications and solutions."
    },
    {
        term: "rationality-ai",
        attachment: "./img/2023-03-26-20-47-01.png",
        prompt: "2.1 Let us examine the rationality of various vacuum-cleaner agent functions. a. Show that the simple vacuum-cleaner agent function described in Figure 2.3 is indeed rational under the assumptions",
        description: "Asumptions: The performance measure awards one point for each clean square at each time step, over a “lifetime” of 1000 time steps. • The “geography” of the environment is known a priori (Figure 2.2) but the dirt distribution and the initial location of the agent are not. Clean squares stay clean and sucking cleans the current square. The Left and Right actions move the agent left and right except when this would take the agent outside the environment, in which case the agent remains where it is. • The only available actions are Left, Right, and Suck. • The agent correctly perceives its location and whether that location contains dir",
        example: "Rational according to ( section 1.1, Russell & Norvig, 2010), is the measure against an ideal performance measure. The system is rational if it does the correct approach given Assignment #2 2 what it knows about the environment (Section 1.1, Russell & Norvig, 2010)\n\
        It can be seen that the agent is indeed doing the right thing, given the perception sequence it has of the environment. b. Describe a rational agent function for the case in which each movement costs one point. Does the corresponding agent program require internal state? If the amount of unclean pieces is known or the environment does not get dirty in the future, the rational agent could stop moving once it knows that the environment is clean, based on the number of pieces collected or after visiting all squares. This would require the agent to use memory to keep track of which areas have been cleaned or to keep count of the number of pieces collected."
    },
    {
        term: "rational-agent",
        prompt: "2.2 What is a rational agent? What is a rational agent function? What is a rational performance measure? What is a rational environment?",
        description: "A rational agent is an agent that does the right thing, given what it knows about the environment. A rational agent function is a function that maps a perception sequence to an action. A rational performance measure is a measure that awards the agent points for doing the right thing. A rational environment is an environment that is such that the agent can do the right thing, given what it knows about the environment.",
        example: " A rational agent is an agent that does the right thing, given what it knows about the environment.\n\
        A rational agent function is a function that maps a perception sequence to an action. A rational performance measure is a measure that awards the agent points for doing the right thing. A rational environment is an environment that is such that the agent can do the right thing, given what it knows about the environment."
    },
    {
        term: "rational-agent-costs-one",
        prompt: "Describe a rational agent function for the case in which each movement costs one point. Does the corresponding agent program require internal state?",
        example: "If the amount of unclean pieces is known or the environment does not get dirty in the future, the rational agent could stop moving once it knows that the environment is clean, based on the number of pieces collected or after visiting all squares. This would require the agent to use memory to keep track of which areas have been cleaned or to keep count of the number of pieces collected."
    },
    {
        term: "rational-agent-clean-squares-dirty",
        prompt: "Discuss possible agent designs for the cases in which clean squares can become dirty and the geography of the environment is unknown. Does it make sense for the agent to learn from its experience in these cases? If so, what should it learn? If not, why not?",
        example: "If this is the case, an agent could learn to predict where dirt is more likely to accumulate on the geography based on past experiences. For example, certain areas may be more likely to become dirty during holidays or at specific times of day, such as morning rush hours. An agent could learn from past experiences and identify patterns or correlations to predict future unclean areas."
    },
];


// Things that I research by my own
const artificialIntelligence_2 = [
    // Agents
    {
        term: "Rule-based agents",
        prompt: "What are rule-based agents in AI? Provide an example.",
        example: "An example of a rule-based agent is a medical diagnosis system that offers recommendations based on a set of rules derived from medical expertise and patient input.",
        description: "Rule-based agents are AI systems that make decisions according to a predetermined set of rules. These rules, often designed by domain experts, guide the agent's decision-making process in a specific context."
    },
    {
        term: "Utility-based agents",
        prompt: "What are utility-based agents in AI?",
        example: "An example of a utility-based agent is a financial investment algorithm that selects stocks based on maximizing expected returns and minimizing risks.",
        description: "Utility-based agents are AI systems that make decisions by considering the utility or value of each possible outcome. The agent selects the action that maximizes its expected utility, aiming for the most favorable result."
    },
    {
        term: "Learning agents",
        prompt: "What are learning agents in AI?",
        example: "An example of a learning agent is an e-commerce recommendation system that adapts its suggestions based on a user's browsing history and purchase patterns.",
        description: "Learning agents are AI systems that improve their performance over time by learning from experience. These agents employ machine learning algorithms to analyze data, identify patterns, and make better decisions in the future."
    },
    {
        term: "Reflex agents",
        prompt: "What are reflex agents in AI? Provide an example.",
        example: "An example of a reflex agent is a light-sensitive switch that turns on the lights when the ambient light level falls below a predefined threshold.",
        description: "Reflex agents are AI systems that make decisions solely based on their current percepts or sensory input, without considering past experiences or future outcomes."
    },
    {
        term: "Goal-based agents",
        prompt: "What are goal-based agents in AI?, provide an example.",
        example: "An example of a goal-based agent is a personal assistant that helps a user achieve specific goals, such as booking a flight or scheduling a meeting.",
        description: "Goal-based agents are AI systems that have a specific goal they are trying to achieve. They use their percept history to make decisions that will help them achieve their goal."
    },
    {
        term: "Multi-agent systems",
        prompt: "What are multi-agent systems in AI?, provide an example.",
        example: "An example of a multi-agent system is a swarm of drones that work together to survey a large area.",
        description: "Multi-agent systems are AI systems in which multiple agents work together to achieve a common goal. They can be used in a wide range of applications, from robotics to video games."
    },
    {
        term: "Intelligent virtual agents",
        prompt: "What are intelligent virtual agents in AI?, provide an example.",
        example: "An example of an intelligent virtual agent is a chatbot that can answer customer questions and provide support.",
        description: "Intelligent virtual agents are AI systems that interact with humans in a virtual environment. They can be used for a variety of applications, including customer service, education, and entertainment."
    },
    {
        term: "Cognitive architectures",
        prompt: "What are cognitive architectures in AI?, provide an example.",
        example: "An example of a cognitive architecture is ACT-R, a framework for modeling human cognition and decision-making.",
        description: "Cognitive architectures are AI systems that attempt to model human cognition and reasoning. They are used to study how humans think and make decisions, and to develop more intelligent AI systems."
    },
    {
        term: "Hierarchical agents",
        prompt: "What are hierarchical agents in AI?, provide an example.",
        example: "An example of a hierarchical agent is a robot that can perform multiple tasks by breaking them down into smaller subtasks and executing them in a hierarchical manner.",
        description: "Hierarchical agents are AI systems that can perform complex tasks by breaking them down into smaller subtasks and executing them in a hierarchical manner. This allows the agent to handle large, complex problems by dividing them into smaller, more manageable parts."
    },
    {
        term: "Simple reflex agents",
        prompt: "What are simple reflex agents in AI?, provide an example.",
        example: "An example of a simple reflex agent is a thermostat that turns on the heating or cooling system if the temperature goes above or below a certain threshold.",
        description: "Simple reflex agents are a type of AI agent that operate using a set of predefined rules or heuristics based on the current state of the environment. They only react to the current state and do not take into account any history or future states. Simple reflex agents are often used in control systems and other applications where a set of rules can be easily defined."
    },
    {
        term: "Model-based agents",
        prompt: "What are model-based agents in AI?, provide an example.",
        example: "An example of a model-based agent is a self-driving car that uses a map of the environment to plan the best route to a destination.",
        description: "Model-based agents are a type of AI agent that maintain an internal model of the environment and use it to make decisions. They can handle more complex environments than simple reflex agents and can adapt to changing situations more easily. However, model-based agents can be more computationally intensive and may require more resources than simple reflex agents."
    },
    // Lets get into specific searches.
    {
        term: "admissible-heuristic",
        prompt: "What is admissible heuristic in AI? And what algorithms use it?",
        description: "An admissible heuristic is a heuristic function used in heuristic search algorithms that never overestimates the cost of reaching the goal. In other words, an admissible heuristic is a function that always provides an estimate that is less than or equal to the actual cost of reaching the goal.",
        example: "A* search, Greedy best-first search, and Hill climbing are examples of algorithms that use admissible heuristics."
    },
    {
        term: "informed-search",
        prompt: "What is informed search in AI? And what algorithms use it? When in the real world you can use it?",
        description: "Informed search is a type of search algorithm that uses a heuristic function to guide the search towards the goal. Informed search algorithms are more efficient than uninformed search algorithms because they can eliminate many of the nodes that would otherwise be explored.",
        example: "A* search, Greedy best-first search, and Hill climbing are examples of informed search algorithms.\n\
        GPS Navigation, Chess, Solving a Rubik's Cube, and Solving a Sudoku Puzzle are examples of real-world applications of informed search algorithms."
    },
    {
        term: "uninformed-search",
        prompt: "What is uninformed search in AI? And what algorithms use it?",
        description: "Uninformed search is a type of search algorithm that does not use any additional information to guide the search. Uninformed search algorithms are less efficient than informed search algorithms because they must explore all possible nodes in the search space.",
        example: "Breadth-first search and depth-first search are examples of uninformed search algorithms.\n\
        Solving a maze, finding the shortest path between two points, are examples of uninformed search algorithms."
    },
    // https://www.geeksforgeeks.org/introduction-hill-climbing-artificial-intelligence/?ref=lbp
    {
        term: "breadth-first-search",
        prompt: "What is breadth-first search in AI? And what algorithms use it? When in the real world you can use it?",
        description: "Breadth-first search (BFS) is an uninformed search algorithm that explores nodes in a tree or graph level by level. It starts at the root node and expands all neighboring nodes before moving on to the next level of neighbors. BFS is complete and optimal for problems with uniform path costs.\n\
        time complexity: O(b^d) where b is the branching factor and d is the depth of the goal node.\n\
        space complexity: O(b^d) where b is the branching factor and d is the depth of the goal node.",
        example: "Breadth-first search can be used on its own or as a component of other algorithms, such as Iterative Deepening Depth-First Search.\n\
        Finding the shortest path in an unweighted graph, social network analysis, web crawlers, and spreading information in a network are examples of real-world applications of breadth-first search."
    },
    {
        term: "astarsearch",
        prompt: "What is A* search in AI? And what algorithms use it? When in the real world you can use it?",
        description: "A* search is an informed search algorithm that uses a heuristic function to guide the search towards the goal. It combines the advantages of Dijkstra's Algorithm (considering the cost from the start node) and Greedy Best-First Search (using a heuristic function to estimate the remaining cost to the goal). A* search is complete and optimal when used with an admissible and consistent heuristic.\n\
        time complexity: O(b^d)* where b is the branching factor and d is the depth of the goal node. (Given an admissible heuristic)\n\
        space complexity: O(b^d)* where b is the branching factor and d is the depth of the goal node. (Given an admissible heuristic) ",
        example: "A* search is often used on its own or as a component of other algorithms, such as IDA* (Iterative Deepening A*).\n\
        Pathfinding in maps (e.g., GPS navigation), route planning, puzzle-solving (e.g., 8-puzzle, Rubik's Cube), and game AI (e.g., Chess, Go) are examples of real-world applications of A* search."
    },
    {
        term: "depth-first-search",
        prompt: "What is depth-first search in AI? And what algorithms use it? When in the real world you can use it?",
        description: "Depth-first search (DFS) is an uninformed search algorithm that explores nodes in a tree or graph by visiting a node and recursively exploring its children before backtracking. DFS goes as deep as possible before backtracking (Which menas it doesn't stop even after finding the goal), making it memory efficient but not always optimal or complete.",
        example: "Depth-first search can be used on its own or as a component of other algorithms, such as Iterative Deepening Depth-First Search (IDDFS).\n\
        Solving mazes, generating spanning trees for graphs, analyzing network connectivity, and searching for solutions in state - space problems are examples of real- world applications of depth - first search."
    },
    {
        term: "greedy-best-first-search",
        prompt: "What is greedy best-first search in AI? And what algorithms use it? When in the real world you can use it?",
        description: "Greedy best-first search is an informed search algorithm that uses a heuristic function to guide the search towards the goal. It selects the node with the lowest estimated cost to the goal as the next node to explore. Greedy best-first search is not guaranteed to be complete or optimal but can be faster than other search algorithms in certain cases.",
        example: "Greedy best-first search can be used on its own or as a component of other algorithms, such as A* search.\n\
    Pathfinding in maps with simple heuristics, approximate solutions for NP - hard problems(e.g., Traveling Salesman Problem), and solving puzzles with suboptimal solutions are examples of real - world applications of greedy best - first search."
    },
    {
        term: "beam-search",
        prompt: "What is beam search in AI? And what algorithms use it? When in the real world you can use it?",
        description: "Beam search is an informed search algorithm that uses a heuristic function to guide the search towards the goal. It maintains a fixed-size 'beam' of the most promising nodes at each level of the search tree. Beam search explores only the best nodes, making it memory efficient but not always optimal or complete.",
        example: "Beam search can be used on its own or as a component of other algorithms.\n\
        Natural language processing(e.g., speech recognition, machine translation), solving large - scale optimization problems, and real - time decision making in resource - constrained environments are examples of real - world applications of beam search."
    },
    {
        term: "hill-climbing",
        prompt: "What is hill climbing in AI? And  what is the difference between hill climbing and greedy best-first search?",
        description: "",
    },
    {
        term: "adversarial-min-max-logic",
        prompt: "What are the min and max logic in adversarial search with Prunging?",
        example: "Maximizer: \n\
        Initializes with Alpha = -Inf\n\
        for each child of the current node\n\
        Alpha = max(Alpha, MinValue(child, Alpha, Beta))\n\
        if Alpha >= Beta\n\
        ---- return Alpha\n\
        return Alpha\n\
        \n\n\n\
        Minimizer: \n\
        Initializes with Beta = Inf\n\
        for each child of the current node\n\
        Beta = min(Beta, MaxValue(child, Alpha, Beta))\n\
        if Alpha >= Beta | Prunes if Alpha returned is  \n\
        ---- return Beta (Prune)\n\
        return Beta"
    }
]


// From Math for Business

const algebra = [
    { term: "arithmetic operations", description: "((a/b)/c)", example: "a/(bc)", prompt: "Solve the following" },
    {
        term: "y = log_b(x)", description: "y = log_b(x) convert into power expression",
        example: "x = b^y", prompt: "convert it into the power expression"
    },
    {
        term: "y = log_b(x^r)", description: "log_b(x^r) ", prompt: "what can you do with the r?",
        example: "r*(log_b(x))"
    },
    {
        term: "log_b(x*y)", description: "log_b(x*y)", prompt: "Convert it into the sum for",
        example: "log_b(x) + log_b(y)"
    },
    {
        term: "log_b(x/y) ", description: "log_b(x/y)",
        prompt: "Convert it into the partitioned form", example: "log_b(x) - log_b(y)"
    },
    {
        term: "x^2 + (a+b) x + a*b", description: "x^2 + (a+b) x + a*b",
        prompt: "factor it into two sections multiplying themselves", example: "(x+a)(x+b)"
    },
    {
        term: "(x - a) ^ 3", prompt: "Expand it into addition form",
        example: "x^3 - 3a(x^2) + 3(a^2)x - a^3"
    },
    {
        term: "x^3 + a^3", prompt: "Expand it, knowing that is a factor of (x+a)",
        example: "(x+a)(x^2 - ax + a^2)"
    },
    {
        term: "x^3 - a^3", prompt: "Expand it, knowing that is a factor of (x-a)",
        example: "(x-a) (x^2 + ax + a^2)"
    },
    {
        term: "x^(2n) - a ^(2n)", prompt: "Expand it into the general formula",
        example: "(x^n - a^n) * (x^n + a^n)"
    },
    {
        term: "Quadratic formula",
        description: "Calculate x given: 4*x^2 + 26*x + 12, knwoing that 26^2 = 676",
        prompt: "Solve using quadratic formula, How to detect if unequal solution, repeated solution or two complex?",

        example: "{x = -6, x = -1/2}, You detect by the b^2 - 4 *ac if positive there are two unequal... "

    },
    {
        term: "Inequalities with Absolute",
        prompt: "Write Expersion for x in |3-x| < 6",
        // description: "",
        example: "{x>3, x<9} (1) x < 3: 3-x < 6 x>3 3+x > -6 (2) Then solve"
    },
    {
        term: "Summation", prompt: "What is the sum rule, the difference rule, the constant rule and the constant value rule",
    },
    {
        term: "domain range", prompt: "What is the domain of sqrt(x+3)/(x-3). ",
        description: "Use the teacher's notation",
        example: "D = [-3; +inf[ \\ {3} || [-3; 3)U(3; +inf)"
    },
    {
        term: "newton-f(x)=3-2x",
        prompt: "Find the Newton Quotient for f(x) = 3 - 2x",
        example: "f'(x) = -2"
    },
    {
        term: "newton-f(x)=x^2 + 1",
        prompt: "Find the Newton Quotient for f(x) = x^2 + 1",
        example: "f'(x) = 2x"
    },
    {
        term: "newton-f(x)=1/(x+2)",
        prompt: "Find the Newton Quotient for f(x) = 1/(x+2)",
        example: "f'(x) = -1/(x+2)^2"
    },
    {
        term: "constants k in f(tk)",
        prompt: "For which constant k is F(tK) = t^(k) * F(K) for t >=0",
        description: "F(K) = 10*K^(1/2)",
        example: "k = 1/2"
    },
    {
        term: "log_a (1) = 0",
        description: "log_2 (8) = 3",
        prompt: "What is the value of log_a (1) = 0",
        example: "a = 1"

    },
    {
        term: "log_b^n (a^m)",
        description: "log_10 (1000) = 3",
        attachment: "./img/2023-03-27-19-56-32.png",
        prompt: "What is the value of log_b^n (a^m)",
        example: "n/m log_b(a)"
    },
    {
        term: "what is e?",
        prompt: "What is e in values aprox? How could you think of it in terms of compound interest?",
        description: "e is the base of the natural logarithm",
        example: "e = 2.7.. e is the maximum compound over one time period with 100% interest"
    },
    {
        term: "log_10 (100)",
        prompt: "What is the value of log_10 (100)",
        example: "2",
        description: "log_10 (10000) = 4"
    },
    {
        term: "reciprocal rule ln",
        prompt: "ln(1/x) = ?",
        example: "-ln(x)",
        description: "The natural log of the reciprocal of x is the opposite of the ln of x"
    },
    {
        term: "ln(e)/7",
        prompt: "What is the value of ln(e)/7",
        example: "1/7",
        description: "ln(e) = 1"
    },
    {
        term: "ln(e)",
        prompt: "What is the value of ln(e)",
        example: "1",
        description: "e^1 = e"
    },
    {
        term: "ln product rule",
        prompt: "ln(x*y) = ?",
        example: "ln(x) + ln(y)",
        description: "log_5 (10) = log_5 (2) + log_5 (5)"
    },
    {
        term: "ln quotient rule",
        prompt: "ln(x/y) = ?",
        example: "ln(x) - ln(y)",
        description: "log_5 (2) = log_5 (10) - log_5 (5)"
    },
    {
        term: "adding to f(x) vs f(x+b)",
        prompt: "What is the difference between adding to f(x) vs f(x+b)",
        description: "f(x) +b vs f(x+b) if f(x) = 2x => f(2) + 1 => 5 vs f(2+1) => 6",
        example: "When adding to f(x) you are adding to the domain making the function to go up or down, when adding to f(x+b) you are adding to the range making the graph go right or left"
    },
    {
        term: "average cost given AvC(q) and Afe(q)",
        prompt: "What is the average Total cost given AvC(q) and Afe(q) that are two functions?",
        example: "atc(q) = avc(q) + afe(q)"
    },
    {
        term: "distance between two points",
        prompt: "What is the distance between two points (x1,y1) and (x2,y2)",
        example: "sqrt((x2-x1)^2 + (y2-y1)^2)",
        description: "distance of (1, 3) and (4, 5) = sqrt((4-1)^2 + (5-3)^2) = sqrt(9+4) = sqrt(13)"
    }






];

const calculousOne = [


];

module.exports = { network, artificialIntelligence, artificialIntelligence_2, algebra, calculousOne, network_midterm };