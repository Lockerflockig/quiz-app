export const questions = [
  {
    "id": 1,
    "question": "What are the differences between hard disk drives and solid state disks?",
    "options": [
      "Hard disks use NAND flash memory to store data persistently.",
      "Solid state disks provide faster access to stored data than hard disks.",
      "Solid state disks consume more power than hard disks.",
      "Solid state disks are louder during operation than hard disks.",
      "Hard disks have a motor and moving parts, solid state disks do not."
    ],
    "correct": [
      "Hard disks have a motor and moving parts, solid state disks do not.",
      "Solid state disks provide faster access to stored data than hard disks."
    ],
    "isMulti": true
  },
  {
    "id": 2,
    "question": "Members of a team already have experience using Red Hat Enterprise Linux. For a small hobby project, the team wants to set up a Linux server without paying for a subscription. Which of the following Linux distributions allows the team members to apply as much of their Red Hat Enterprise Linux knowledge as possible?",
    "options": [
      "Debian",
      "openSUSE Leap",
      "CentOS",
      "Fedora"
    ],
    "correct": [
      "CentOS"
    ],
    "isMulti": false
  },
  {
    "id": 3,
    "question": "Reverse DNS assigns hostnames to IP addresses. How is the name of the IP address 198.51.100.165 stored on a DNS server?",
    "options": [
      "In the A record for 198.51.100.165.in-addr.arpa.",
      "In the PTR record for 198.51.100.165.in-addr.arpa.",
      "In the CNAME record for 165.100.51.198.in-addr.arpa.",
      "In the PTR record for 165.100.51.198.in-addr.arpa."
    ],
    "correct": [
      "In the PTR record for 165.100.51.198.in-addr.arpa."
    ],
    "isMulti": false
  },
  {
    "id": 4,
    "question": "Which of the following types of bus can connect hard disk drives with the motherboard?",
    "options": [
      "The PCIe bus",
      "The USB bus",
      "The SATA bus",
      "The ISA bus"
    ],
    "correct": [
      "The SATA bus"
    ],
    "isMulti": false
  },
  {
    "id": 5,
    "question": "Which of the following commands can be used to resolve a DNS name to an IP address?",
    "options": [
      "traceroute",
      "netstat",
      "route",
      "host"
    ],
    "correct": [
      "host"
    ],
    "isMulti": false
  },
  {
    "id": 6,
    "question": "What information can be displayed by top?",
    "options": [
      "Network interfaces and their current bandwidth usage.",
      "Disk partitions and their current read/write utilization.",
      "The last 10 executed commands with their exit codes.",
      "Running processes, ordered by CPU or RAM consumption."
    ],
    "correct": [
      "Running processes, ordered by CPU or RAM consumption."
    ],
    "isMulti": false
  },
  {
    "id": 7,
    "question": "Which of the following outputs comes from the command free?",
    "options": [
      "PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND\n  1 root      20   0  168928  12548   8352 S   0.0   0.1   0:03.12 systemd",
      "Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G   18G   29G  39% /\ntmpfs           7.8G     0  7.8G   0% /dev/shm",
      "total        used        free      shared  buff/cache   available\nMem:            15Gi       2.3Gi         9Gi       910Mi       3.0Gi        11Gi\nSwap:          2.0Gi          0B       2.0Gi",
      "NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda           8:0    0   256G  0 disk\n└─sda1        8:1    0   256G  0 part /"
    ],
    "correct": [
      "total        used        free      shared  buff/cache   available\nMem:            15Gi       2.3Gi         9Gi       910Mi       3.0Gi        11Gi\nSwap:          2.0Gi          0B       2.0Gi"
    ],
    "isMulti": false
  },
  {
    "id": 8,
    "question": "What is true about the dmesg command?",
    "options": [
      "It might not display older information because it was overwritten by newer information.",
      "It requires root privileges to run on all Linux distributions.",
      "It displays the content of the Linux kernel’s ring buffer.",
      "dmesg output is written to /var/log/dmesg and persists across reboots.",
      "Its output cannot be filtered using standard text processing tools."
    ],
    "correct": [
      "It displays the content of the Linux kernel’s ring buffer.",
      "It might not display older information because it was overwritten by newer information."
    ],
    "isMulti": true
  },
  {
    "id": 9,
    "question": "Which of the following outputs could stem from the command last?",
    "options": [
      "root tty2 Wed May 17 21:11 - 21:11 (00:00)",
      "USER     TTY      FROM             LOGIN@   IDLE JCPU PCPU WHAT",
      "root     pts/0        :0               Wed May 17 21:11   still logged in",
      "May 17 21:11:03 hostname sshd[1234]: Accepted password for root"
    ],
    "correct": [
      "root tty2 Wed May 17 21:11 - 21:11 (00:00)"
    ],
    "isMulti": false
  },
  {
    "id": 10,
    "question": "What is true about the owner of a file?",
    "options": [
      "Files on a Linux system do not require group ownership.",
      "The owner of a file is always the user who last modified it.",
      "Each file is owned by exactly one user and one group.",
      "A file can be owned by multiple users simultaneously."
    ],
    "correct": [
      "Each file is owned by exactly one user and one group."
    ],
    "isMulti": false
  },
  {
    "id": 11,
    "question": "What is the UID of the user root?",
    "options": [
      "65534",
      "1",
      "1000",
      "0"
    ],
    "correct": [
      "0"
    ],
    "isMulti": false
  },
  {
    "id": 12,
    "question": "Which permissions are set on a regular file once the permissions have been modified with the command chmod 654 file.txt?",
    "options": [
      "-rw-rw-r--",
      "-rwxr-xr--",
      "-rw-r--r-x",
      "-rw-r-xr--"
    ],
    "correct": [
      "-rw-r-xr--"
    ],
    "isMulti": false
  },
  {
    "id": 13,
    "question": "Which of the following tar options handle compression?",
    "options": [
      "-x",
      "-j",
      "-z",
      "-v",
      "-c"
    ],
    "correct": [
      "-z",
      "-j"
    ],
    "isMulti": true
  },
  {
    "id": 14,
    "question": "Which of the following permissions are set on the /tmp/ directory?",
    "options": [
      "rwxr-xr-x",
      "rwxr-xr-t",
      "rwxrwxrwx",
      "rwxrwxrwt"
    ],
    "correct": [
      "rwxrwxrwt"
    ],
    "isMulti": false
  },
  {
    "id": 15,
    "question": "What information is stored in /etc/passwd?",
    "options": [
      "The username",
      "The user’s default shell",
      "The user's hashed password",
      "The user's sudo privileges",
      "The numerical user ID",
      "The user's SSH public key"
    ],
    "correct": [
      "The user’s default shell",
      "The username",
      "The numerical user ID"
    ],
    "isMulti": true
  },
  {
    "id": 16,
    "question": "Which command adds the new user tux and creates the user’s home directory with default configuration files?",
    "options": [
      "useradd tux",
      "adduser tux",
      "useradd --create-home-dir tux",
      "useradd –m tux"
    ],
    "correct": [
      "useradd –m tux"
    ],
    "isMulti": false
  },
  {
    "id": 17,
    "question": "Which of the following commands creates an archive file work.tar from the contents of the directory ./work/?",
    "options": [
      "tar –xf work.tar ./work/",
      "tar –rf work.tar ./work/",
      "tar –cf work.tar ./work/",
      "tar –tf work.tar ./work/"
    ],
    "correct": [
      "tar –cf work.tar ./work/"
    ],
    "isMulti": false
  },
  {
    "id": 18,
    "question": "The current directory contains the following file: -rwxr-xr-x 1 root root 859688 Feb 7 08:15 test.sh Given that the file is a valid shell script, how can this script be executed?",
    "options": [
      "run ./test.sh",
      "test.sh",
      "./test.sh",
      "execute test.sh",
      "bash test.sh"
    ],
    "correct": [
      "bash test.sh",
      "./test.sh"
    ],
    "isMulti": true
  },
  {
    "id": 19,
    "question": "Which of the following keys can be pressed to exit less?",
    "options": [
      "Ctrl+C",
      "x",
      "q",
      "Escape"
    ],
    "correct": [
      "q"
    ],
    "isMulti": false
  },
  {
    "id": 20,
    "question": "What keyword is used in a shell script to begin a loop? (Specify one keyword only, without any additional information.)",
    "options": [
      "each",
      "loop",
      "for",
      "repeat"
    ],
    "correct": [
      "for"
    ],
    "isMulti": false
  },
  {
    "id": 21,
    "question": "Which of the following commands will search for the file foo.txt under the directory /home?",
    "options": [
      "find /home foo.txt",
      "search /home –name foo.txt",
      "locate /home –name foo.txt",
      "find /home –name foo.txt"
    ],
    "correct": [
      "find /home –name foo.txt"
    ],
    "isMulti": false
  },
  {
    "id": 22,
    "question": "A directory contains the following files: a.txt and b.txt. What would be the output of the following shell script? for file in *.txt",
    "options": [
      "a.txt\nb.txt\n(one per line)",
      "b.txt a.txt",
      "a.txt b.txt",
      "*.txt"
    ],
    "correct": [
      "a.txt b.txt"
    ],
    "isMulti": false
  },
  {
    "id": 23,
    "question": "The current directory contains the following file: -rw-r—r— 1 root exec 24551 Apr 2 12:36 test.sh The file contains a valid shell script, but executing this file using ./test.sh leads to this error: bash: ./test.sh: Permission denied What should be done in order to successfully execute the script?",
    "options": [
      "The script's shebang line must point to /bin/bash explicitly.",
      "The execute bit should be set in the file’s permissions.",
      "The file should be moved to /usr/local/bin/ first.",
      "The file's owner must be changed to the current user with chown."
    ],
    "correct": [
      "The execute bit should be set in the file’s permissions."
    ],
    "isMulti": false
  },
  {
    "id": 24,
    "question": "Which of the following commands sorts the output of the command export-logs?",
    "options": [
      "sort | export-logs",
      "sort < export-logs",
      "export-logs | sort",
      "export-logs > sort"
    ],
    "correct": [
      "export-logs | sort"
    ],
    "isMulti": false
  },
  {
    "id": 25,
    "question": "What is a Linux distribution?",
    "options": [
      "An implementation of the POSIX standard for Unix-like operating systems.",
      "A collection of hardware device drivers for the Linux kernel.",
      "A version of the Linux kernel released by Linus Torvalds.",
      "A bundling of the Linux kernel, system utilities and other software."
    ],
    "correct": [
      "A bundling of the Linux kernel, system utilities and other software."
    ],
    "isMulti": false
  },
  {
    "id": 26,
    "question": "Where is the operating system of a Raspberry Pi stored?",
    "options": [
      "In ROM chips soldered directly onto the board.",
      "On a USB flash drive plugged into one of the USB ports.",
      "On a removable SD card which is put into the Raspberry Pi.",
      "On an internal eMMC flash chip permanently attached to the PCB."
    ],
    "correct": [
      "On a removable SD card which is put into the Raspberry Pi."
    ],
    "isMulti": false
  },
  {
    "id": 27,
    "question": "Which of the following programs is a graphical editor for vector graphics?",
    "options": [
      "Scribus",
      "GIMP",
      "Inkscape",
      "Blender"
    ],
    "correct": [
      "Inkscape"
    ],
    "isMulti": false
  },
  {
    "id": 28,
    "question": "Which package management tool is used in Red Hat-based Linux Systems?",
    "options": [
      "rpm",
      "apt",
      "dpkg",
      "zypper"
    ],
    "correct": [
      "rpm"
    ],
    "isMulti": false
  },
  {
    "id": 29,
    "question": "Which of the following characters in a shell prompt indicates the shell is running with root privileges?",
    "options": [
      "@",
      "#",
      "%",
      "$"
    ],
    "correct": [
      "#"
    ],
    "isMulti": false
  },
  {
    "id": 30,
    "question": "Which of the following are typical services offered by public cloud providers?",
    "options": [
      "Infrastructure as a Service(IaaS)",
      "Database as a Service (DBaaS)",
      "Hardware as a Service (HaaS)",
      "Software as a Service (SaaS)",
      "Network as a Service (NaaS)",
      "Platform as a Service(PaaS)"
    ],
    "correct": [
      "Infrastructure as a Service(IaaS)",
      "Platform as a Service(PaaS)",
      "Software as a Service (SaaS)"
    ],
    "isMulti": true
  },
  {
    "id": 31,
    "question": "What is defined by a Free Software license?",
    "options": [
      "Requirements for attributing the original author in all publications.",
      "Conditions for modifying and distributing the licensed software.",
      "The price at which the software may be sold to end users.",
      "Restrictions on the number of simultaneous users who may run the software."
    ],
    "correct": [
      "Conditions for modifying and distributing the licensed software."
    ],
    "isMulti": false
  },
  {
    "id": 32,
    "question": "Why are web browser cookies considered dangerous?",
    "options": [
      "Cookies support identification and tracking of users.",
      "Cookies allow websites to read files from the local file system directly.",
      "Cookies permanently store passwords in plain text on the user's disk.",
      "Cookies can execute arbitrary code in the user's browser."
    ],
    "correct": [
      "Cookies support identification and tracking of users."
    ],
    "isMulti": false
  },
  {
    "id": 33,
    "question": "Running the command rm Downloads leads to the following error: rm: cannot remove ‘Downloads/’: Is a directory Which of the following commands can be used instead to remove Downloads, assuming Downloads is empty?",
    "options": [
      "rmdir Downloads",
      "rm Downloads",
      "rm -f Downloads",
      "rmdir --recursive Downloads",
      "rm -r Downloads"
    ],
    "correct": [
      "rm -r Downloads",
      "rmdir Downloads"
    ],
    "isMulti": true
  },
  {
    "id": 34,
    "question": "What is true about a recursive directory listing?",
    "options": [
      "It includes the content of sub-directories.",
      "It shows the content of each file in addition to file names.",
      "It displays hidden files and directories.",
      "It sorts files by size in descending order."
    ],
    "correct": [
      "It includes the content of sub-directories."
    ],
    "isMulti": false
  },
  {
    "id": 35,
    "question": "Which of the following commands are used to get information on the proper use of ls?",
    "options": [
      "help ls",
      "ls --manual",
      "info ls",
      "man ls",
      "doc ls"
    ],
    "correct": [
      "man ls",
      "info ls"
    ],
    "isMulti": true
  },
  {
    "id": 36,
    "question": "Which of the following directories contains information, documentation and example configuration files for installed software packages?",
    "options": [
      "/usr/share/doc/",
      "/etc/doc/",
      "/usr/lib/doc/",
      "/var/lib/doc/"
    ],
    "correct": [
      "/usr/share/doc/"
    ],
    "isMulti": false
  },
  {
    "id": 37,
    "question": "A user is currently in the directory /home/user/Downloads/ and runs the command ls ../Documents/. Assuming it exists, which directory’s content is displayed?",
    "options": [
      "/home/user/Downloads/Documents/",
      "/Documents/",
      "/home/Documents/",
      "/home/user/Documents/"
    ],
    "correct": [
      "/home/user/Documents/"
    ],
    "isMulti": false
  },
  {
    "id": 38,
    "question": "Which of the following commands adds the directory /new/dir/ to the PATH environment variable?",
    "options": [
      "export PATH=/new/dir: $PATH",
      "PATH=/new/dir",
      "addpath /new/dir",
      "set PATH=/new/dir:$PATH"
    ],
    "correct": [
      "export PATH=/new/dir: $PATH"
    ],
    "isMulti": false
  },
  {
    "id": 39,
    "question": "A directory contains the following three files: texts 1.txt texts 2.txt texts 3.csv Which command copies the two files ending in .txt to the /tmp/ directory?",
    "options": [
      "cp *txt /tmp/",
      "cp .txt /tmp/",
      "copy *.txt /tmp/",
      "cp *.txt /tmp/"
    ],
    "correct": [
      "cp *.txt /tmp/"
    ],
    "isMulti": false
  },
  {
    "id": 40,
    "question": "FILL BLANK When typing a long command line at the shell, what single character can be used to split a command across multiple lines?",
    "options": [
      "&",
      "\\",
      ";",
      "|"
    ],
    "correct": [
      "\\"
    ],
    "isMulti": false
  },
  {
    "id": 41,
    "question": "Which of the following DNS record types hold an IP address?",
    "options": [
      "CNAME",
      "AAAA",
      "NS",
      "A",
      "MX"
    ],
    "correct": [
      "AAAA",
      "A"
    ],
    "isMulti": true
  },
  {
    "id": 42,
    "question": "Which of the following values could be a process ID on Linux?",
    "options": [
      "-1",
      "21398",
      "0",
      "4294967296"
    ],
    "correct": [
      "21398"
    ],
    "isMulti": false
  },
  {
    "id": 43,
    "question": "Which of the following is a protocol used for automatic IP address configuration?",
    "options": [
      "ICMP",
      "DHCP",
      "ARP",
      "DNS"
    ],
    "correct": [
      "DHCP"
    ],
    "isMulti": false
  },
  {
    "id": 44,
    "question": "Which of the following devices represents a hard disk partition?",
    "options": [
      "/dev/part2",
      "/dev/hda",
      "/dev/disk/partition2",
      "/dev/sda2"
    ],
    "correct": [
      "/dev/sda2"
    ],
    "isMulti": false
  },
  {
    "id": 45,
    "question": "Which of the following statements regarding Linux hardware drivers is correct?",
    "options": [
      "Linux requires all hardware drivers to be compiled directly into the kernel.",
      "Hardware drivers are stored in /etc/drivers/ and loaded automatically at boot.",
      "Drivers are either compiled into the Linux kernel or are loaded as kernel modules.",
      "Linux downloads missing drivers from the internet automatically at runtime."
    ],
    "correct": [
      "Drivers are either compiled into the Linux kernel or are loaded as kernel modules."
    ],
    "isMulti": false
  },
  {
    "id": 46,
    "question": "What can be found in the /proc/ directory?",
    "options": [
      "Log files generated by running processes since last boot.",
      "One directory per running process.",
      "Configuration files for all installed software packages.",
      "Binary executables for essential system processes."
    ],
    "correct": [
      "One directory per running process."
    ],
    "isMulti": false
  },
  {
    "id": 47,
    "question": "A new server needs to be installed to host services for a period of several years. Throughout this time, the server should receive important security updates from its Linux distribution. Which of the following Linux distributions meet these requirements?",
    "options": [
      "Gentoo Linux",
      "Kali Linux",
      "Arch Linux",
      "Red Hat Enterprise Linux",
      "Ubuntu Linux LTS"
    ],
    "correct": [
      "Ubuntu Linux LTS",
      "Red Hat Enterprise Linux"
    ],
    "isMulti": true
  },
  {
    "id": 48,
    "question": "Which of the following directories must be mounted with read and write access if it resides on its own dedicated file system?",
    "options": [
      "/bin",
      "/usr",
      "/boot",
      "/var"
    ],
    "correct": [
      "/var"
    ],
    "isMulti": false
  },
  {
    "id": 49,
    "question": "The ownership of the file doku.odt should be changed. The new owner is named tux. Which command accomplishes this change?",
    "options": [
      "chmod tux doku.odt",
      "usermod -f tux doku.odt",
      "chown doku.odt tux",
      "chown tux doku.odt"
    ],
    "correct": [
      "chown tux doku.odt"
    ],
    "isMulti": false
  },
  {
    "id": 50,
    "question": "What happens to a file residing outside the home directory when the file owner&#x27;s account is deleted?",
    "options": [
      "The file becomes inaccessible to all users except root.",
      "The UID of the former owner is shown when listing the file's details.",
      "The file is automatically deleted along with the user account.",
      "The file's ownership is transferred to root automatically.",
      "Ownership and permissions of the file remain unchanged."
    ],
    "correct": [
      "The UID of the former owner is shown when listing the file's details.",
      "Ownership and permissions of the file remain unchanged."
    ],
    "isMulti": true
  },
  {
    "id": 51,
    "question": "Which statements about the directory /etc/skel are correct?",
    "options": [
      "The directory contains a default set of configuration files used by the useradd command.",
      "Modifying /etc/skel retroactively updates the home directories of existing users.",
      "The files from the directory are copied to the home directory of a new user when the account is created.",
      "Files in /etc/skel are executed as login scripts when a user logs in for the first time.",
      "The directory is the default home directory assigned to all new users."
    ],
    "correct": [
      "The files from the directory are copied to the home directory of a new user when the account is created.",
      "The directory contains a default set of configuration files used by the useradd command."
    ],
    "isMulti": true
  },
  {
    "id": 52,
    "question": "What is true about links in a Linux file system?",
    "options": [
      "A symbolic link can point to a file on another file system.",
      "Hard links and symbolic links are functionally interchangeable in all contexts.",
      "A hard link can point to a file on another file system.",
      "A symbolic link always occupies the same disk space as the original file."
    ],
    "correct": [
      "A symbolic link can point to a file on another file system."
    ],
    "isMulti": false
  },
  {
    "id": 53,
    "question": "Which files are the source of the information in the following output? uid=1000 (bob) gid=1000 (bob) groups=1000 (bob), 10 (wheel), 150 (wireshark), 989 (docker), 1001 (libvirt)",
    "options": [
      "/etc/group",
      "/etc/shadow",
      "/etc/passwd",
      "/etc/login.defs",
      "/etc/sudoers"
    ],
    "correct": [
      "/etc/passwd",
      "/etc/group"
    ],
    "isMulti": true
  },
  {
    "id": 54,
    "question": "Which of the following tasks can the command passwd accomplish?",
    "options": [
      "Create a new user account.",
      "Delete a user account and remove its home directory.",
      "Grant a user administrative sudo privileges.",
      "Change a user's password.",
      "Lock a user account."
    ],
    "correct": [
      "Change a user's password.",
      "Lock a user account."
    ],
    "isMulti": true
  },
  {
    "id": 55,
    "question": "What is true about the su command?",
    "options": [
      "It updates the user's entry in /etc/passwd with a new login shell.",
      "It runs a shell or command as another user.",
      "It suspends the current process and resumes a previously stopped one.",
      "It encrypts the current shell session to prevent eavesdropping."
    ],
    "correct": [
      "It runs a shell or command as another user."
    ],
    "isMulti": false
  },
  {
    "id": 56,
    "question": "What parameter of ls prints a recursive listing of a directory&#x27;s content? (Specify ONLY the option name without any values or parameters.)",
    "options": [
      "ls -r",
      "ls -l",
      "ls -a",
      "ls -R"
    ],
    "correct": [
      "ls -R"
    ],
    "isMulti": false
  },
  {
    "id": 57,
    "question": "Most commands on Linux can display information on their usage. How can this information typically be displayed?",
    "options": [
      "By running explain followed by the command name.",
      "By looking in /usr/share/man/ for the corresponding entry directly.",
      "By running the command with the option -h or --help.",
      "By running the command without any arguments."
    ],
    "correct": [
      "By running the command with the option -h or --help."
    ],
    "isMulti": false
  },
  {
    "id": 58,
    "question": "Which of the following commands shows the absolute path to the current working directory?",
    "options": [
      "cwd",
      "whereis",
      "pwd",
      "dir"
    ],
    "correct": [
      "pwd"
    ],
    "isMulti": false
  },
  {
    "id": 59,
    "question": "Which of the following commands output the content of the file Texts 2.txt?",
    "options": [
      "cat Texts\\ 2.txt",
      "cat $Texts 2.txt",
      "cat 'Texts 2.txt'",
      "cat \"Texts\" 2.txt",
      "cat Texts 2.txt"
    ],
    "correct": [
      "cat 'Texts 2.txt'",
      "cat Texts\\ 2.txt"
    ],
    "isMulti": true
  },
  {
    "id": 60,
    "question": "Which command displays file names only and no additional information?",
    "options": [
      "ls -la",
      "ls -l",
      "ls -a",
      "ls -lh"
    ],
    "correct": [
      "ls -a"
    ],
    "isMulti": false
  },
  {
    "id": 61,
    "question": "What is the purpose of the PATH environment variable?",
    "options": [
      "It specifies the directories searched for shared libraries at runtime.",
      "It defines the default working directory for new shell sessions.",
      "It allows the execution of commands without the need to know the location of the executable.",
      "It contains the list of users permitted to execute commands as root."
    ],
    "correct": [
      "It allows the execution of commands without the need to know the location of the executable."
    ],
    "isMulti": false
  },
  {
    "id": 62,
    "question": "Which of the following commands sets the variable USERNAME to the value bob?",
    "options": [
      "let USERNAME=bob",
      "set USERNAME=bob",
      "USERNAME:=bob",
      "USERNAME=bob"
    ],
    "correct": [
      "USERNAME=bob"
    ],
    "isMulti": false
  },
  {
    "id": 63,
    "question": "What command displays manual pages?",
    "options": [
      "man",
      "doc",
      "help",
      "info"
    ],
    "correct": [
      "man"
    ],
    "isMulti": false
  },
  {
    "id": 64,
    "question": "Which command copies the contents of the directory /etc/, including all sub-directories, to /root/?",
    "options": [
      "cp /etc/* /root",
      "cp -r /etc/* /root",
      "cp -R /etc /root",
      "cp --all /etc/* /root"
    ],
    "correct": [
      "cp -r /etc/* /root"
    ],
    "isMulti": false
  },
  {
    "id": 65,
    "question": "Which of the following commands puts the lines of the file data.csv into alphabetical order?",
    "options": [
      "ls --sort data.csv",
      "cat data.csv | order",
      "order data.csv",
      "sort data.csv"
    ],
    "correct": [
      "sort data.csv"
    ],
    "isMulti": false
  },
  {
    "id": 66,
    "question": "Which of the following examples shows the general structure of a for loop in a shell script?",
    "options": [
      "foreach file in *.txt { echo $i }",
      "for file = *.txt; do echo $i; end",
      "for file in *.txt do echo $i done",
      "for (file in *.txt) { echo $i; }"
    ],
    "correct": [
      "for file in *.txt do echo $i done"
    ],
    "isMulti": false
  },
  {
    "id": 67,
    "question": "Which operator in a regular expression matches the preceding character either zero or one time?",
    "options": [
      "+",
      ".",
      "?",
      "*"
    ],
    "correct": [
      "?"
    ],
    "isMulti": false
  },
  {
    "id": 68,
    "question": "How should MYVAR be set in order to make script.sh display the content of MYVAR?",
    "options": [
      "set MYVAR=value",
      "export MYVAR=value",
      "global MYVAR=value",
      "MYVAR=value"
    ],
    "correct": [
      "export MYVAR=value"
    ],
    "isMulti": false
  },
  {
    "id": 69,
    "question": "What is the return value of a shell script after successful execution?",
    "options": [
      "true",
      "0",
      "1",
      "255"
    ],
    "correct": [
      "0"
    ],
    "isMulti": false
  },
  {
    "id": 70,
    "question": "Which of the following commands creates the ZIP archive poems.zip containing all files in the current directory whose names end in .txt?",
    "options": [
      "gzip -c *.txt > poems.zip",
      "compress *.txt poems.zip",
      "tar -czf poems.zip *.txt",
      "zip poems.zip *.txt"
    ],
    "correct": [
      "zip poems.zip *.txt"
    ],
    "isMulti": false
  },
  {
    "id": 71,
    "question": "Which of the following statements are true regarding a typical shell script?",
    "options": [
      "It starts with the two character sequence #!.",
      "It must be located in /usr/local/bin/ to be executed by the shell.",
      "It is compiled into a binary before execution.",
      "It requires the .sh file extension to be recognized as a script.",
      "It has the executable permission bit set."
    ],
    "correct": [
      "It has the executable permission bit set.",
      "It starts with the two character sequence #!."
    ],
    "isMulti": true
  },
  {
    "id": 72,
    "question": "Which of the following commands extracts the contents of the compressed archive file1.tar.gz?",
    "options": [
      "tar -xzf file1.tar.gz",
      "tar -tzf file1.tar.gz",
      "gunzip file1.tar.gz",
      "tar -czf file1.tar.gz"
    ],
    "correct": [
      "tar -xzf file1.tar.gz"
    ],
    "isMulti": false
  },
  {
    "id": 73,
    "question": "Which of the following commands finds all lines in the file operating-systems.txt which contain the term linux, regardless of the case?",
    "options": [
      "grep -c linux operating-systems.txt",
      "grep linux operating-systems.txt",
      "grep -i linux operating-systems.txt",
      "grep -v linux operating-systems.txt"
    ],
    "correct": [
      "grep -i linux operating-systems.txt"
    ],
    "isMulti": false
  },
  {
    "id": 74,
    "question": "Which one of the following statements concerning Linux passwords is true?",
    "options": [
      "Passwords are stored in plain text but protected by strict file permissions.",
      "Passwords are encrypted with AES-256 and stored in /etc/passwd.",
      "Passwords are stored as base64-encoded strings in /etc/shadow.",
      "Passwords are only stored in hashed form."
    ],
    "correct": [
      "Passwords are only stored in hashed form."
    ],
    "isMulti": false
  },
  {
    "id": 75,
    "question": "Which of the following programs are web servers?",
    "options": [
      "vsftpd",
      "MySQL",
      "NGINX",
      "Postfix",
      "Apache"
    ],
    "correct": [
      "Apache",
      "NGINX"
    ],
    "isMulti": true
  },
  {
    "id": 76,
    "question": "Which of the following Linux Distributions is derived from Red Hat Enterprise Linux?",
    "options": [
      "CentOS",
      "Linux Mint",
      "Ubuntu",
      "openSUSE"
    ],
    "correct": [
      "CentOS"
    ],
    "isMulti": false
  },
  {
    "id": 77,
    "question": "Which of the following statements is true about Free Software?",
    "options": [
      "It may only be used for non-commercial and educational purposes.",
      "Its source code must be reviewed and approved by the Free Software Foundation.",
      "It may be modified by anyone using it.",
      "It must be available at no monetary cost to all users."
    ],
    "correct": [
      "It may be modified by anyone using it."
    ],
    "isMulti": false
  },
  {
    "id": 78,
    "question": "How is a new Linux computing instance provisioned in an laaS cloud?",
    "options": [
      "The cloud provider installs Linux directly onto the user's local hardware remotely.",
      "A dedicated physical server is shipped to the user's premises.",
      "The cloud hosting organization provides a set of pre-prepared images of popular Linux distributions.",
      "The user must compile the Linux kernel from source and upload it to the provider."
    ],
    "correct": [
      "The cloud hosting organization provides a set of pre-prepared images of popular Linux distributions."
    ],
    "isMulti": false
  },
  {
    "id": 79,
    "question": "What are the differences between a private web browser window and a regular web browser window?",
    "options": [
      "Private browser windows prevent websites from logging the user's IP address.",
      "Private web browser windows do not keep records in the browser history.",
      "Private browser windows encrypt all network traffic end-to-end automatically.",
      "Private web browser windows do not store cookies persistently.",
      "Private web browser windows do not send regular stored cookies.",
      "Private browser windows block all JavaScript execution to prevent tracking."
    ],
    "correct": [
      "Private web browser windows do not store cookies persistently.",
      "Private web browser windows do not keep records in the browser history.",
      "Private web browser windows do not send regular stored cookies."
    ],
    "isMulti": true
  },
  {
    "id": 80,
    "question": "What is the preferred source for the installation of new applications in a Linux based operating system?",
    "options": [
      "Installing from physical media such as DVDs or USB installation drives.",
      "Copying pre-built binary files from another Linux system of the same version.",
      "The distribution&#x27;s package repository",
      "Downloading source tarballs from the developer's website and compiling manually."
    ],
    "correct": [
      "The distribution&#x27;s package repository"
    ],
    "isMulti": false
  }
];
