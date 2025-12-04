# 🕵️‍♂️ Python Port Scanner

A simple, multi-threaded port scanner built with Python. This tool scans a target IP address for open ports (range 1-1024) and reports the results.

## 🚀 Features
- **Multi-threaded**: Scans ports concurrently for faster results.
- **Simple Interface**: Command-line based usage.
- **Error Handling**: Handles invalid hostnames and connection errors gracefully.

## 📋 Prerequisites
- Python 3.x installed on your system.

## 🛠️ Usage

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/mohankumar-cybersec/mohankumar-cybersec.git
    ```

2.  **Navigate to the project directory**:
    ```bash
    cd 05_Mini_Projects
    ```

3.  **Run the scanner**:
    ```bash
    python port_scanner.py <target_ip_or_hostname>
    ```

    **Example**:
    ```bash
    python port_scanner.py google.com
    ```
    *OR*
    ```bash
    python port_scanner.py 127.0.0.1
    ```

## ⚠️ Disclaimer
This tool is for **educational purposes only**. Do not use this tool to scan networks or systems you do not have permission to access. Unauthorized scanning can be illegal.

## 📝 Code Explanation
- `socket`: Used for network connections.
- `threading`: Used to run multiple port scans simultaneously.
- `sys`: Used for command-line arguments.
