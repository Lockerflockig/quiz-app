export const questionsDE = [
  {
    "id": 1,
    "question": "Was sind die Unterschiede zwischen Hard Disk Drives und Solid State Disks?",
    "options": [
      "Hard Disks verwenden NAND-Flash-Speicher zur dauerhaften Datenspeicherung.",
      "Solid State Disks ermöglichen schnelleren Zugriff auf gespeicherte Daten als Hard Disks.",
      "Solid State Disks verbrauchen mehr Strom als Hard Disks.",
      "Solid State Disks sind lauter im Betrieb als Hard Disks.",
      "Hard Disks haben einen Motor und bewegliche Teile, Solid State Disks nicht."
    ],
    "correct": [
      "Hard Disks haben einen Motor und bewegliche Teile, Solid State Disks nicht.",
      "Solid State Disks ermöglichen schnelleren Zugriff auf gespeicherte Daten als Hard Disks."
    ],
    "isMulti": true
  },
  {
    "id": 2,
    "question": "Mitglieder eines Teams haben bereits Erfahrung mit Red Hat Enterprise Linux. Für ein kleines Hobbyprojekt möchte das Team einen Linux-Server einrichten, ohne für ein Abonnement zu bezahlen. Welche der folgenden Linux-Distributionen ermöglicht es den Teammitgliedern, ihr Red Hat Enterprise Linux-Wissen bestmöglich anzuwenden?",
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
    "question": "Reverse-DNS ordnet IP-Adressen Hostnamen zu. Wie wird der Name der IP-Adresse 198.51.100.165 auf einem DNS-Server gespeichert?",
    "options": [
      "Im A-Eintrag für 198.51.100.165.in-addr.arpa.",
      "Im PTR-Eintrag für 198.51.100.165.in-addr.arpa.",
      "Im CNAME-Eintrag für 165.100.51.198.in-addr.arpa.",
      "Im PTR-Eintrag für 165.100.51.198.in-addr.arpa."
    ],
    "correct": [
      "Im PTR-Eintrag für 165.100.51.198.in-addr.arpa."
    ],
    "isMulti": false
  },
  {
    "id": 4,
    "question": "Welcher der folgenden Bustypen kann Festplatten mit dem Motherboard verbinden?",
    "options": [
      "Der PCIe-Bus",
      "Der USB-Bus",
      "Der SATA-Bus",
      "Der ISA-Bus"
    ],
    "correct": [
      "Der SATA-Bus"
    ],
    "isMulti": false
  },
  {
    "id": 5,
    "question": "Welcher der folgenden Befehle kann verwendet werden, um einen DNS-Namen in eine IP-Adresse aufzulösen?",
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
    "question": "Welche Informationen kann top anzeigen?",
    "options": [
      "Netzwerkschnittstellen und ihre aktuelle Bandbreitennutzung.",
      "Festplattenpartitionen und ihre aktuelle Lese-/Schreib-Auslastung.",
      "Die letzten 10 ausgeführten Befehle mit ihren Exit-Codes.",
      "Laufende Prozesse, geordnet nach CPU- oder RAM-Verbrauch."
    ],
    "correct": [
      "Laufende Prozesse, geordnet nach CPU- oder RAM-Verbrauch."
    ],
    "isMulti": false
  },
  {
    "id": 7,
    "question": "Welche der folgenden Ausgaben stammt vom Befehl free?",
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
    "question": "Was trifft auf den Befehl dmesg zu?",
    "options": [
      "Er zeigt möglicherweise keine älteren Informationen an, weil diese durch neuere überschrieben wurden.",
      "Er erfordert auf allen Linux-Distributionen Root-Rechte zum Ausführen.",
      "Er zeigt den Inhalt des Ring-Puffers des Linux-Kernels an.",
      "Die Ausgabe von dmesg wird in /var/log/dmesg geschrieben und bleibt nach Neustarts erhalten.",
      "Die Ausgabe kann nicht mit Standard-Textverarbeitungswerkzeugen gefiltert werden."
    ],
    "correct": [
      "Er zeigt den Inhalt des Ring-Puffers des Linux-Kernels an.",
      "Er zeigt möglicherweise keine älteren Informationen an, weil diese durch neuere überschrieben wurden."
    ],
    "isMulti": true
  },
  {
    "id": 9,
    "question": "Welche der folgenden Ausgaben könnte vom Befehl last stammen?",
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
    "question": "Was trifft auf den Eigentümer einer Datei zu?",
    "options": [
      "Dateien auf einem Linux-System benötigen keine Gruppenzugehörigkeit.",
      "Der Eigentümer einer Datei ist immer der Benutzer, der sie zuletzt geändert hat.",
      "Jede Datei gehört genau einem Benutzer und einer Gruppe.",
      "Eine Datei kann gleichzeitig mehreren Benutzern gehören."
    ],
    "correct": [
      "Jede Datei gehört genau einem Benutzer und einer Gruppe."
    ],
    "isMulti": false
  },
  {
    "id": 11,
    "question": "Wie lautet die UID des Benutzers root?",
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
    "question": "Welche Berechtigungen sind auf einer regulären Datei gesetzt, nachdem die Berechtigungen mit dem Befehl chmod 654 file.txt geändert wurden?",
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
    "question": "Welche der folgenden tar-Optionen behandeln die Komprimierung?",
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
    "question": "Welche der folgenden Berechtigungen sind auf dem Verzeichnis /tmp/ gesetzt?",
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
    "question": "Welche Informationen werden in /etc/passwd gespeichert?",
    "options": [
      "Der Benutzername",
      "Die Standard-Shell des Benutzers",
      "Das gehashte Passwort des Benutzers",
      "Die sudo-Berechtigungen des Benutzers",
      "Die numerische Benutzer-ID",
      "Der öffentliche SSH-Schlüssel des Benutzers"
    ],
    "correct": [
      "Die Standard-Shell des Benutzers",
      "Der Benutzername",
      "Die numerische Benutzer-ID"
    ],
    "isMulti": true
  },
  {
    "id": 16,
    "question": "Welcher Befehl fügt den neuen Benutzer tux hinzu und erstellt das Home-Verzeichnis des Benutzers mit Standard-Konfigurationsdateien?",
    "options": [
      "useradd tux",
      "adduser tux",
      "useradd --create-home-dir tux",
      "useradd -m tux"
    ],
    "correct": [
      "useradd -m tux"
    ],
    "isMulti": false
  },
  {
    "id": 17,
    "question": "Welcher der folgenden Befehle erstellt eine Archivdatei work.tar aus dem Inhalt des Verzeichnisses ./work/?",
    "options": [
      "tar -xf work.tar ./work/",
      "tar -rf work.tar ./work/",
      "tar -cf work.tar ./work/",
      "tar -tf work.tar ./work/"
    ],
    "correct": [
      "tar -cf work.tar ./work/"
    ],
    "isMulti": false
  },
  {
    "id": 18,
    "question": "Das aktuelle Verzeichnis enthält folgende Datei: -rwxr-xr-x 1 root root 859688 Feb 7 08:15 test.sh. Wie kann dieses gültige Shell-Skript ausgeführt werden?",
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
    "question": "Welche Taste kann gedrückt werden, um less zu beenden?",
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
    "question": "Welches Schlüsselwort wird in einem Shell-Skript verwendet, um eine Schleife zu beginnen?",
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
    "question": "Welcher der folgenden Befehle sucht nach der Datei foo.txt im Verzeichnis /home?",
    "options": [
      "find /home foo.txt",
      "search /home -name foo.txt",
      "locate /home -name foo.txt",
      "find /home -name foo.txt"
    ],
    "correct": [
      "find /home -name foo.txt"
    ],
    "isMulti": false
  },
  {
    "id": 22,
    "question": "Ein Verzeichnis enthält die Dateien a.txt und b.txt. Was wäre die Ausgabe des folgenden Shell-Skripts? for file in *.txt",
    "options": [
      "a.txt\\nb.txt\\n(je eine pro Zeile)",
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
    "question": "Das aktuelle Verzeichnis enthält: -rw-r--r-- 1 root exec 24551 Apr 2 12:36 test.sh. Das Ausführen mit ./test.sh führt zu: bash: ./test.sh: Permission denied. Was muss getan werden?",
    "options": [
      "Die Shebang-Zeile des Skripts muss explizit auf /bin/bash zeigen.",
      "Das Execute-Bit muss in den Dateiberechtigungen gesetzt werden.",
      "Die Datei muss zuerst nach /usr/local/bin/ verschoben werden.",
      "Der Eigentümer der Datei muss mit chown auf den aktuellen Benutzer geändert werden."
    ],
    "correct": [
      "Das Execute-Bit muss in den Dateiberechtigungen gesetzt werden."
    ],
    "isMulti": false
  },
  {
    "id": 24,
    "question": "Welcher der folgenden Befehle sortiert die Ausgabe des Befehls export-logs?",
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
    "question": "Was ist eine Linux-Distribution?",
    "options": [
      "Eine Implementierung des POSIX-Standards für Unix-ähnliche Betriebssysteme.",
      "Eine Sammlung von Hardware-Gerätetreibern für den Linux-Kernel.",
      "Eine Version des Linux-Kernels, veröffentlicht von Linus Torvalds.",
      "Eine Zusammenstellung des Linux-Kernels, Systemwerkzeugen und anderer Software."
    ],
    "correct": [
      "Eine Zusammenstellung des Linux-Kernels, Systemwerkzeugen und anderer Software."
    ],
    "isMulti": false
  },
  {
    "id": 26,
    "question": "Wo wird das Betriebssystem eines Raspberry Pi gespeichert?",
    "options": [
      "In ROM-Chips, die direkt auf der Platine verlötet sind.",
      "Auf einem USB-Stick, der in einen der USB-Anschlüsse gesteckt wird.",
      "Auf einer entfernbaren SD-Karte, die in den Raspberry Pi eingesetzt wird.",
      "Auf einem internen eMMC-Flash-Chip, der dauerhaft auf der Leiterplatte befestigt ist."
    ],
    "correct": [
      "Auf einer entfernbaren SD-Karte, die in den Raspberry Pi eingesetzt wird."
    ],
    "isMulti": false
  },
  {
    "id": 27,
    "question": "Welches der folgenden Programme ist ein grafischer Editor für Vektorgrafiken?",
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
    "question": "Welches Paketverwaltungswerkzeug wird in Red Hat-basierten Linux-Systemen verwendet?",
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
    "question": "Welches Zeichen in einer Shell-Eingabeaufforderung zeigt an, dass die Shell mit Root-Rechten ausgeführt wird?",
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
    "question": "Welche der folgenden sind typische Dienste öffentlicher Cloud-Anbieter?",
    "options": [
      "Infrastructure as a Service (IaaS)",
      "Database as a Service (DBaaS)",
      "Hardware as a Service (HaaS)",
      "Software as a Service (SaaS)",
      "Network as a Service (NaaS)",
      "Platform as a Service (PaaS)"
    ],
    "correct": [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)"
    ],
    "isMulti": true
  },
  {
    "id": 31,
    "question": "Was wird durch eine Free-Software-Lizenz definiert?",
    "options": [
      "Anforderungen zur Nennung des ursprünglichen Autors in allen Veröffentlichungen.",
      "Bedingungen für die Änderung und Weitergabe der lizenzierten Software.",
      "Der Preis, zu dem die Software an Endnutzer verkauft werden darf.",
      "Beschränkungen für die Anzahl gleichzeitiger Benutzer, die die Software ausführen dürfen."
    ],
    "correct": [
      "Bedingungen für die Änderung und Weitergabe der lizenzierten Software."
    ],
    "isMulti": false
  },
  {
    "id": 32,
    "question": "Warum gelten Web-Browser-Cookies als gefährlich?",
    "options": [
      "Cookies ermöglichen die Identifizierung und Verfolgung von Benutzern.",
      "Cookies ermöglichen es Websites, Dateien direkt aus dem lokalen Dateisystem zu lesen.",
      "Cookies speichern Passwörter dauerhaft im Klartext auf der Festplatte des Benutzers.",
      "Cookies können beliebigen Code im Browser des Benutzers ausführen."
    ],
    "correct": [
      "Cookies ermöglichen die Identifizierung und Verfolgung von Benutzern."
    ],
    "isMulti": false
  },
  {
    "id": 33,
    "question": "Das Ausführen von rm Downloads führt zu: rm: cannot remove 'Downloads/': Is a directory. Welche Befehle können stattdessen verwendet werden, wenn Downloads leer ist?",
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
    "question": "Was trifft auf eine rekursive Verzeichnisauflistung zu?",
    "options": [
      "Sie umfasst den Inhalt von Unterverzeichnissen.",
      "Sie zeigt den Inhalt jeder Datei zusätzlich zu den Dateinamen an.",
      "Sie zeigt versteckte Dateien und Verzeichnisse an.",
      "Sie sortiert Dateien nach Größe in absteigender Reihenfolge."
    ],
    "correct": [
      "Sie umfasst den Inhalt von Unterverzeichnissen."
    ],
    "isMulti": false
  },
  {
    "id": 35,
    "question": "Welche der folgenden Befehle werden verwendet, um Informationen zur Verwendung von ls zu erhalten?",
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
    "question": "Welches Verzeichnis enthält Informationen, Dokumentation und Beispiel-Konfigurationsdateien für installierte Softwarepakete?",
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
    "question": "Ein Benutzer befindet sich im Verzeichnis /home/user/Downloads/ und führt ls ../Documents/ aus. Welcher Verzeichnisinhalt wird angezeigt?",
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
    "question": "Welcher der folgenden Befehle fügt das Verzeichnis /new/dir/ zur PATH-Umgebungsvariable hinzu?",
    "options": [
      "export PATH=/new/dir:$PATH",
      "PATH=/new/dir",
      "addpath /new/dir",
      "set PATH=/new/dir:$PATH"
    ],
    "correct": [
      "export PATH=/new/dir:$PATH"
    ],
    "isMulti": false
  },
  {
    "id": 39,
    "question": "Ein Verzeichnis enthält: texts 1.txt, texts 2.txt, texts 3.csv. Welcher Befehl kopiert die zwei .txt-Dateien nach /tmp/?",
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
    "question": "Welches einzelne Zeichen kann verwendet werden, um einen langen Shell-Befehl über mehrere Zeilen aufzuteilen?",
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
    "question": "Welche der folgenden DNS-Eintragstypen enthalten eine IP-Adresse?",
    "options": [
      "A",
      "MX",
      "AAAA",
      "NS",
      "CNAME"
    ],
    "correct": [
      "AAAA",
      "A"
    ],
    "isMulti": true
  },
  {
    "id": 42,
    "question": "Welcher der folgenden Werte könnte eine Prozess-ID unter Linux sein?",
    "options": [
      "0",
      "4294967296",
      "21398",
      "-1"
    ],
    "correct": [
      "21398"
    ],
    "isMulti": false
  },
  {
    "id": 43,
    "question": "Welches der folgenden Protokolle wird zur automatischen IP-Adresskonfiguration verwendet?",
    "options": [
      "ARP",
      "ICMP",
      "DNS",
      "DHCP"
    ],
    "correct": [
      "DHCP"
    ],
    "isMulti": false
  },
  {
    "id": 44,
    "question": "Welches der folgenden Geräte stellt eine Festplattenpartition dar?",
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
    "question": "Welche der folgenden Aussagen zu Linux-Hardware-Treibern ist korrekt?",
    "options": [
      "Hardware-Treiber werden in /etc/drivers/ gespeichert und beim Systemstart automatisch geladen.",
      "Treiber werden entweder direkt in den Linux-Kernel kompiliert oder als Kernel-Module geladen.",
      "Linux lädt fehlende Treiber zur Laufzeit automatisch aus dem Internet herunter.",
      "Linux erfordert, dass alle Hardware-Treiber direkt in den Kernel kompiliert werden."
    ],
    "correct": [
      "Treiber werden entweder direkt in den Linux-Kernel kompiliert oder als Kernel-Module geladen."
    ],
    "isMulti": false
  },
  {
    "id": 46,
    "question": "Was kann im Verzeichnis /proc/ gefunden werden?",
    "options": [
      "Log-Dateien, die von laufenden Prozessen seit dem letzten Start erzeugt wurden.",
      "Ein Verzeichnis pro laufendem Prozess.",
      "Konfigurationsdateien für alle installierten Softwarepakete.",
      "Ausführbare Binärdateien für wesentliche Systemprozesse."
    ],
    "correct": [
      "Ein Verzeichnis pro laufendem Prozess."
    ],
    "isMulti": false
  },
  {
    "id": 47,
    "question": "Ein neuer Server soll für mehrere Jahre Dienste hosten und dabei regelmäßig Sicherheitsupdates erhalten. Welche der folgenden Linux-Distributionen erfüllen diese Anforderungen?",
    "options": [
      "Kali Linux",
      "Ubuntu Linux LTS",
      "Arch Linux",
      "Gentoo Linux",
      "Red Hat Enterprise Linux"
    ],
    "correct": [
      "Ubuntu Linux LTS",
      "Red Hat Enterprise Linux"
    ],
    "isMulti": true
  },
  {
    "id": 48,
    "question": "Welches der folgenden Verzeichnisse muss mit Lese- und Schreibzugriff eingehängt werden, wenn es sich auf einem eigenen Dateisystem befindet?",
    "options": [
      "/usr",
      "/bin",
      "/var",
      "/boot"
    ],
    "correct": [
      "/var"
    ],
    "isMulti": false
  },
  {
    "id": 49,
    "question": "Die Eigentümerschaft der Datei doku.odt soll auf den Benutzer tux übertragen werden. Welcher Befehl führt diese Änderung durch?",
    "options": [
      "chown tux doku.odt",
      "chown doku.odt tux",
      "chmod tux doku.odt",
      "usermod -f tux doku.odt"
    ],
    "correct": [
      "chown tux doku.odt"
    ],
    "isMulti": false
  },
  {
    "id": 50,
    "question": "Was passiert mit einer Datei außerhalb des Home-Verzeichnisses, wenn das Konto des Datei-Eigentümers gelöscht wird?",
    "options": [
      "Eigentümerschaft und Berechtigungen der Datei bleiben unverändert.",
      "Die Datei wird für alle Benutzer außer root unzugänglich.",
      "Die Eigentümerschaft der Datei wird automatisch auf root übertragen.",
      "Die Datei wird automatisch zusammen mit dem Benutzerkonto gelöscht.",
      "Die UID des ehemaligen Eigentümers wird bei der Dateiauflistung angezeigt."
    ],
    "correct": [
      "Die UID des ehemaligen Eigentümers wird bei der Dateiauflistung angezeigt.",
      "Eigentümerschaft und Berechtigungen der Datei bleiben unverändert."
    ],
    "isMulti": true
  },
  {
    "id": 51,
    "question": "Welche Aussagen über das Verzeichnis /etc/skel sind korrekt?",
    "options": [
      "Das Verzeichnis ist das Standard-Home-Verzeichnis für alle neuen Benutzer.",
      "Die Dateien aus dem Verzeichnis werden beim Erstellen eines Kontos in das Home-Verzeichnis des neuen Benutzers kopiert.",
      "Änderungen an /etc/skel aktualisieren rückwirkend die Home-Verzeichnisse bestehender Benutzer.",
      "Das Verzeichnis enthält einen Standard-Satz von Konfigurationsdateien, die vom Befehl useradd verwendet werden.",
      "Dateien in /etc/skel werden als Login-Skripte ausgeführt, wenn sich ein Benutzer zum ersten Mal anmeldet."
    ],
    "correct": [
      "Die Dateien aus dem Verzeichnis werden beim Erstellen eines Kontos in das Home-Verzeichnis des neuen Benutzers kopiert.",
      "Das Verzeichnis enthält einen Standard-Satz von Konfigurationsdateien, die vom Befehl useradd verwendet werden."
    ],
    "isMulti": true
  },
  {
    "id": 52,
    "question": "Was trifft auf Links in einem Linux-Dateisystem zu?",
    "options": [
      "Ein Hard-Link kann auf eine Datei auf einem anderen Dateisystem zeigen.",
      "Ein symbolischer Link kann auf eine Datei auf einem anderen Dateisystem zeigen.",
      "Ein symbolischer Link belegt immer den gleichen Speicherplatz wie die Originaldatei.",
      "Hard-Links und symbolische Links sind in allen Kontexten funktional austauschbar."
    ],
    "correct": [
      "Ein symbolischer Link kann auf eine Datei auf einem anderen Dateisystem zeigen."
    ],
    "isMulti": false
  },
  {
    "id": 53,
    "question": "Welche Dateien sind die Quelle der Informationen in folgender Ausgabe? uid=1000(bob) gid=1000(bob) groups=1000(bob),10(wheel),150(wireshark)",
    "options": [
      "/etc/shadow",
      "/etc/group",
      "/etc/passwd",
      "/etc/sudoers",
      "/etc/login.defs"
    ],
    "correct": [
      "/etc/passwd",
      "/etc/group"
    ],
    "isMulti": true
  },
  {
    "id": 54,
    "question": "Welche der folgenden Aufgaben kann der Befehl passwd ausführen?",
    "options": [
      "Ein Benutzerkonto löschen und sein Home-Verzeichnis entfernen.",
      "Das Passwort eines Benutzers ändern.",
      "Ein neues Benutzerkonto erstellen.",
      "Einem Benutzer administrative sudo-Rechte gewähren.",
      "Ein Benutzerkonto sperren."
    ],
    "correct": [
      "Das Passwort eines Benutzers ändern.",
      "Ein Benutzerkonto sperren."
    ],
    "isMulti": true
  },
  {
    "id": 55,
    "question": "Was trifft auf den Befehl su zu?",
    "options": [
      "Er verschlüsselt die aktuelle Shell-Sitzung zum Schutz vor Abhören.",
      "Er führt eine Shell oder einen Befehl als ein anderer Benutzer aus.",
      "Er hält den aktuellen Prozess an und nimmt einen zuvor gestoppten Prozess wieder auf.",
      "Er aktualisiert den Eintrag des Benutzers in /etc/passwd mit einer neuen Login-Shell."
    ],
    "correct": [
      "Er führt eine Shell oder einen Befehl als ein anderer Benutzer aus."
    ],
    "isMulti": false
  },
  {
    "id": 56,
    "question": "Welcher Parameter von ls gibt eine rekursive Auflistung des Verzeichnisinhalts aus?",
    "options": [
      "ls -a",
      "ls -l",
      "ls -R",
      "ls -r"
    ],
    "correct": [
      "ls -R"
    ],
    "isMulti": false
  },
  {
    "id": 57,
    "question": "Die meisten Linux-Befehle können Informationen zu ihrer Verwendung anzeigen. Wie wird diese Information typischerweise abgerufen?",
    "options": [
      "Indem man direkt in /usr/share/man/ nach dem Eintrag sucht.",
      "Indem man den Befehl ohne Argumente ausführt.",
      "Indem man explain gefolgt vom Befehlsnamen ausführt.",
      "Indem man den Befehl mit der Option -h oder --help ausführt."
    ],
    "correct": [
      "Indem man den Befehl mit der Option -h oder --help ausführt."
    ],
    "isMulti": false
  },
  {
    "id": 58,
    "question": "Welcher der folgenden Befehle zeigt den absoluten Pfad zum aktuellen Arbeitsverzeichnis?",
    "options": [
      "dir",
      "cwd",
      "pwd",
      "whereis"
    ],
    "correct": [
      "pwd"
    ],
    "isMulti": false
  },
  {
    "id": 59,
    "question": "Welche der folgenden Befehle geben den Inhalt der Datei Texts 2.txt aus?",
    "options": [
      "cat Texts 2.txt",
      "cat $Texts 2.txt",
      "cat \"Texts\" 2.txt",
      "cat Texts\\ 2.txt",
      "cat 'Texts 2.txt'"
    ],
    "correct": [
      "cat 'Texts 2.txt'",
      "cat Texts\\ 2.txt"
    ],
    "isMulti": true
  },
  {
    "id": 60,
    "question": "Welcher Befehl zeigt nur Dateinamen ohne zusätzliche Informationen an?",
    "options": [
      "ls -la",
      "ls -a",
      "ls -l",
      "ls -lh"
    ],
    "correct": [
      "ls -a"
    ],
    "isMulti": false
  },
  {
    "id": 61,
    "question": "Was ist der Zweck der PATH-Umgebungsvariable?",
    "options": [
      "Sie gibt die Verzeichnisse an, in denen zur Laufzeit nach gemeinsam genutzten Bibliotheken gesucht wird.",
      "Sie definiert das Standard-Arbeitsverzeichnis für neue Shell-Sitzungen.",
      "Sie ermöglicht die Ausführung von Befehlen, ohne den Speicherort der ausführbaren Datei kennen zu müssen.",
      "Sie enthält die Liste der Benutzer, die Befehle als root ausführen dürfen."
    ],
    "correct": [
      "Sie ermöglicht die Ausführung von Befehlen, ohne den Speicherort der ausführbaren Datei kennen zu müssen."
    ],
    "isMulti": false
  },
  {
    "id": 62,
    "question": "Welcher der folgenden Befehle setzt die Variable USERNAME auf den Wert bob?",
    "options": [
      "USERNAME=bob",
      "USERNAME:=bob",
      "let USERNAME=bob",
      "set USERNAME=bob"
    ],
    "correct": [
      "USERNAME=bob"
    ],
    "isMulti": false
  },
  {
    "id": 63,
    "question": "Welcher Befehl zeigt Handbuchseiten an?",
    "options": [
      "info",
      "help",
      "man",
      "doc"
    ],
    "correct": [
      "man"
    ],
    "isMulti": false
  },
  {
    "id": 64,
    "question": "Welcher Befehl kopiert den Inhalt des Verzeichnisses /etc/ einschließlich aller Unterverzeichnisse nach /root/?",
    "options": [
      "cp /etc/* /root",
      "cp -R /etc /root",
      "cp -r /etc/* /root",
      "cp --all /etc/* /root"
    ],
    "correct": [
      "cp -r /etc/* /root"
    ],
    "isMulti": false
  },
  {
    "id": 65,
    "question": "Welcher der folgenden Befehle bringt die Zeilen der Datei data.csv in alphabetische Reihenfolge?",
    "options": [
      "sort data.csv",
      "order data.csv",
      "ls --sort data.csv",
      "cat data.csv | order"
    ],
    "correct": [
      "sort data.csv"
    ],
    "isMulti": false
  },
  {
    "id": 66,
    "question": "Welches der folgenden Beispiele zeigt die allgemeine Struktur einer for-Schleife in einem Shell-Skript?",
    "options": [
      "foreach file in *.txt { echo $i }",
      "for (file in *.txt) { echo $i; }",
      "for file = *.txt; do echo $i; end",
      "for file in *.txt do echo $i done"
    ],
    "correct": [
      "for file in *.txt do echo $i done"
    ],
    "isMulti": false
  },
  {
    "id": 67,
    "question": "Welcher Operator in einem regulären Ausdruck passt auf das vorherige Zeichen null oder einmal?",
    "options": [
      "+",
      "?",
      ".",
      "*"
    ],
    "correct": [
      "?"
    ],
    "isMulti": false
  },
  {
    "id": 68,
    "question": "Wie muss MYVAR gesetzt werden, damit script.sh den Inhalt von MYVAR anzeigt?",
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
    "question": "Was ist der Rückgabewert eines Shell-Skripts nach erfolgreicher Ausführung?",
    "options": [
      "0",
      "true",
      "255",
      "1"
    ],
    "correct": [
      "0"
    ],
    "isMulti": false
  },
  {
    "id": 70,
    "question": "Welcher der folgenden Befehle erstellt das ZIP-Archiv poems.zip mit allen .txt-Dateien im aktuellen Verzeichnis?",
    "options": [
      "gzip -c *.txt > poems.zip",
      "tar -czf poems.zip *.txt",
      "zip poems.zip *.txt",
      "compress *.txt poems.zip"
    ],
    "correct": [
      "zip poems.zip *.txt"
    ],
    "isMulti": false
  },
  {
    "id": 71,
    "question": "Welche der folgenden Aussagen treffen auf ein typisches Shell-Skript zu?",
    "options": [
      "Es beginnt mit der zweistelligen Zeichenfolge #!.",
      "Es wird vor der Ausführung in eine Binärdatei kompiliert.",
      "Es erfordert die Dateiendung .sh, um als Skript erkannt zu werden.",
      "Es muss sich in /usr/local/bin/ befinden, um von der Shell ausgeführt zu werden.",
      "Das Execute-Bit ist in den Dateiberechtigungen gesetzt."
    ],
    "correct": [
      "Das Execute-Bit ist in den Dateiberechtigungen gesetzt.",
      "Es beginnt mit der zweistelligen Zeichenfolge #!."
    ],
    "isMulti": true
  },
  {
    "id": 72,
    "question": "Welcher der folgenden Befehle extrahiert den Inhalt des komprimierten Archivs file1.tar.gz?",
    "options": [
      "tar -czf file1.tar.gz",
      "gunzip file1.tar.gz",
      "tar -xzf file1.tar.gz",
      "tar -tzf file1.tar.gz"
    ],
    "correct": [
      "tar -xzf file1.tar.gz"
    ],
    "isMulti": false
  },
  {
    "id": 73,
    "question": "Welcher der folgenden Befehle findet alle Zeilen in der Datei operating-systems.txt, die den Begriff linux enthalten – unabhängig von der Groß-/Kleinschreibung?",
    "options": [
      "grep -v linux operating-systems.txt",
      "grep linux operating-systems.txt",
      "grep -i linux operating-systems.txt",
      "grep -c linux operating-systems.txt"
    ],
    "correct": [
      "grep -i linux operating-systems.txt"
    ],
    "isMulti": false
  },
  {
    "id": 74,
    "question": "Welche der folgenden Aussagen über Linux-Passwörter ist wahr?",
    "options": [
      "Passwörter werden ausschließlich in gehashter Form gespeichert.",
      "Passwörter werden im Klartext gespeichert, aber durch strenge Dateiberechtigungen geschützt.",
      "Passwörter werden mit AES-256 verschlüsselt und in /etc/passwd gespeichert.",
      "Passwörter werden als base64-kodierte Zeichenketten in /etc/shadow gespeichert."
    ],
    "correct": [
      "Passwörter werden ausschließlich in gehashter Form gespeichert."
    ],
    "isMulti": false
  },
  {
    "id": 75,
    "question": "Welche der folgenden Programme sind Webserver?",
    "options": [
      "MySQL",
      "Apache",
      "NGINX",
      "vsftpd",
      "Postfix"
    ],
    "correct": [
      "Apache",
      "NGINX"
    ],
    "isMulti": true
  },
  {
    "id": 76,
    "question": "Welche der folgenden Linux-Distributionen ist von Red Hat Enterprise Linux abgeleitet?",
    "options": [
      "openSUSE",
      "Linux Mint",
      "CentOS",
      "Ubuntu"
    ],
    "correct": [
      "CentOS"
    ],
    "isMulti": false
  },
  {
    "id": 77,
    "question": "Welche der folgenden Aussagen über Free Software ist wahr?",
    "options": [
      "Sie darf nur für nicht-kommerzielle und Bildungszwecke verwendet werden.",
      "Sie darf von jedem Benutzer modifiziert werden.",
      "Sie muss für alle Benutzer kostenlos verfügbar sein.",
      "Der Quellcode muss von der Free Software Foundation geprüft und genehmigt werden."
    ],
    "correct": [
      "Sie darf von jedem Benutzer modifiziert werden."
    ],
    "isMulti": false
  },
  {
    "id": 78,
    "question": "Wie wird eine neue Linux-Recheninstanz in einer IaaS-Cloud bereitgestellt?",
    "options": [
      "Der Benutzer muss den Linux-Kernel aus dem Quellcode kompilieren und beim Anbieter hochladen.",
      "Die Cloud-Organisation stellt vorbereitete Images gängiger Linux-Distributionen bereit.",
      "Der Cloud-Anbieter installiert Linux remote direkt auf der lokalen Hardware des Benutzers.",
      "Ein dedizierter physischer Server wird zum Standort des Benutzers geliefert."
    ],
    "correct": [
      "Die Cloud-Organisation stellt vorbereitete Images gängiger Linux-Distributionen bereit."
    ],
    "isMulti": false
  },
  {
    "id": 79,
    "question": "Was sind die Unterschiede zwischen einem privaten Browserfenster und einem normalen Browserfenster?",
    "options": [
      "Private Browserfenster verschlüsseln den gesamten Netzwerkverkehr automatisch Ende-zu-Ende.",
      "Private Browserfenster speichern keine Einträge im Browserverlauf.",
      "Private Browserfenster verhindern, dass Websites die IP-Adresse des Benutzers protokollieren.",
      "Private Browserfenster speichern Cookies nicht dauerhaft.",
      "Private Browserfenster senden keine regulär gespeicherten Cookies.",
      "Private Browserfenster blockieren die Ausführung von JavaScript, um Tracking zu verhindern."
    ],
    "correct": [
      "Private Browserfenster speichern Cookies nicht dauerhaft.",
      "Private Browserfenster speichern keine Einträge im Browserverlauf.",
      "Private Browserfenster senden keine regulär gespeicherten Cookies."
    ],
    "isMulti": true
  },
  {
    "id": 80,
    "question": "Was ist die bevorzugte Quelle für die Installation neuer Anwendungen in einem Linux-basierten Betriebssystem?",
    "options": [
      "Installation von physischen Datenträgern wie DVDs oder USB-Installationslaufwerken.",
      "Das Paket-Repository der Distribution",
      "Vorgefertigte Binärdateien von einem anderen Linux-System gleicher Version kopieren.",
      "Quell-Tarballs von der Website des Entwicklers herunterladen und manuell kompilieren."
    ],
    "correct": [
      "Das Paket-Repository der Distribution"
    ],
    "isMulti": false
  }
]
