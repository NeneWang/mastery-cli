/**
 * It would be great to take advatnage of online courses to further your knowledge
 * https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/video_galleries/lecture-videos/
 * 
 */

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
    }

]

const artificialIntelligence = [
    { term: "Backpropagation Neural Network", description: "A backpropagation neural network is a way to train neural networks. It involves providing a neural network with a set of input values for which the correct output value is known beforehand. The network processes the input and produces an output value, which is compared to the correct value. If the result is incorrect, gradual changes are propagated backward through the network, and the calculation is made again. This process repeats until the desired output is calculated by the network.", prompt: "Design one using that model" },
    {
        term: "AI Definitions",
        prompt: "Define in your own words (at least 1): (a) intelligence, (b) artificial intelligence, (c) agent, (d) rationality, (e) logical reasoning.",
        description: "Dictionary definitions of intelligence talk about “the capacity to acquire and apply knowledge” or “the faculty of thought and reason” or “the ability to comprehend and profit from experience.” These are all reasonable answers, but if we want something quantifiable we would use something like “the ability to apply knowledge in order to perform better in an environment.” b. We define artificial intelligence as the study and construction of agent programs that perform well in a given environment, for a given agent architecture. c. We define an agent as an entity that takes action in response to percepts from an environment. d. We define rationality as the property of a system which does the “right thing” given what it knows. See Section 2.2 for a more complete discussion. Both describe perfect rationality, however; see Section 27.3. e. We define logical reasoning as the a process of deriving new sentences from old, such that the new sentences are necessarily true if the old ones are true. (Notice that does not refer to any specific syntax oor formal language, but it does require a well-defined notion of truth.)",
    },

];


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
        example: "D = [-3; +inf[ \\ {3}"
    },




];

const calculousOne = [


];

module.exports = { network, artificialIntelligence, algebra, calculousOne };