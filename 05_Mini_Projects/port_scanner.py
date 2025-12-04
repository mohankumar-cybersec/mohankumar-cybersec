import socket
import threading
import sys
from datetime import datetime

# Define the target
if len(sys.argv) == 2:
    target = sys.argv[1]
else:
    print("Invalid amount of arguments.")
    print("Syntax: python port_scanner.py <ip>")
    sys.exit()

# Pretty print
print("-" * 50)
print(f"Scanning target: {target}")
print(f"Time started: {datetime.now()}")
print("-" * 50)

try:
    # Resolve hostname to IP
    target_ip = socket.gethostbyname(target)
except socket.gaierror:
    print("Hostname could not be resolved.")
    sys.exit()

def scan_port(port):
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        socket.setdefaulttimeout(1)
        result = s.connect_ex((target_ip, port))
        if result == 0:
            print(f"Port {port} is open")
        s.close()
    except KeyboardInterrupt:
        print("\nExiting program.")
        sys.exit()
    except socket.error:
        print("Could not connect to server.")
        sys.exit()

# Multi-threading for faster scanning
threads = []

# Scan ports 1 to 1024 (Common ports)
# You can increase the range if needed, e.g., range(1, 65535)
for port in range(1, 1025):
    thread = threading.Thread(target=scan_port, args=(port,))
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()

print("-" * 50)
print("Scanning completed.")
print("-" * 50)
