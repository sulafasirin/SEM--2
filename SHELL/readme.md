# Simple Shell Script Commands and Terms

This guide explains common shell script commands in simple words. Great for beginners!

---

## Basic Special Words (Variables)

| Term       | Meaning                 | Simple Explanation                                                                                                            |
| ---------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `$0`       | Script name             | The name of the script file itself.                                                                                           |
| `$1`, `$2` | First and second inputs | If you give input when running the script, these hold them. Example: `sh script.sh file1 file2` → `$1 = file1`, `$2 = file2`. |
| `$#`       | Number of inputs        | Tells how many inputs were given to the script.                                                                               |
| `$$`       | Script process number   | A unique number for the running script. Helpful for naming files so they don't clash.                                         |
| `$?`       | Result of last command  | `0` means success, any other number means error.                                                                              |
| `$*`       | All input values        | Shows all the inputs together.                                                                                                |
| `shift`    | Move inputs             | Moves input list to the left. `$2` becomes `$1`, and so on.                                                                   |

---

## Checking Files and Numbers

| Term   | Meaning       | Simple Explanation                           |
| ------ | ------------- | -------------------------------------------- |
| `-f`   | Is file       | Checks if something is a normal file.        |
| `-d`   | Is folder     | Checks if something is a folder.             |
| `-a`   | And condition | Used when checking two things at once.       |
| `-ne`  | Not equal     | Checks if two numbers are different.         |
| `-eq`  | Equal         | Checks if two numbers are same.              |
| `-gt`  | Greater than  | Checks if one number is bigger than another. |
| `-le`  | Less or equal | Checks if one number is smaller or same.     |
| `! -f` | Not a file    | True if it's not a file.                     |

---

## Common Commands

| Command       | Use                      | Simple Explanation                                      |
| ------------- | ------------------------ | ------------------------------------------------------- |
| `man`         | Help manual              | Shows help for any command.                             |
| `ls`          | List files and folders   | Displays files and folders in the current directory.    |
| `echo`        | Show message             | Displays text on the screen.                            |
| `read`        | Get input from user      | Lets user type something.                               |
| `more`        | View file (page-by-page) | Views file content one screen at a time.                |
| `less`        | Scrollable file viewer   | Lets you scroll up/down in file content.                |
| `cat`         | Show file content        | Shows what’s inside a file.                             |
| `cd`          | Go to another folder     | Changes the folder.                                     |
| `mkdir`       | Make new folder          | Creates a new folder.                                   |
| `pwd`         | Show current directory   | Tells the present working directory.                    |
| `find`        | Search files/folders     | Finds files/folders based on name/type/date.            |
| `mv`          | Rename or move file      | Renames or moves a file.                                |
| `cp`          | Copy files               | Makes a copy of a file.                                 |
| `rm`          | Delete file              | Removes a file. `-f` means delete without asking.       |
| `tar`         | Archive/compress files   | Combines files into one archive.                        |
| `wc -l`       | Count lines in a file    | Tells how many lines are in the file.                   |
| `wc -c`       | Count characters         | Tells how big the file is in characters.                |
| `cut -d`      | Split using symbol       | Cuts a part of line using a symbol like space or comma. |
| `paste`       | Merge lines from files   | Joins lines of multiple files side by side.             |
| `head -n`     | Show first lines         | Shows first `n` lines of a file.                        |
| `tail -n`     | Show last lines          | Shows last `n` lines of a file.                         |
| `grep`        | Search in text           | Looks for a word in text.                               |
| `expr`        | Do math                  | Does simple math like adding or subtracting.            |
| `chmod`       | Change file permissions  | Gives read/write/execute access.                        |
| `chown`       | Change file owner        | Changes who owns the file.                              |
| `cmp`         | Compare two files        | Checks if two files are the same.                       |
| `tty`         | Get terminal name        | Shows the name of the terminal (screen).                |
| `set $line`   | Split line into words    | Turns a line into words.                                |
| `exec < file` | Use file as input        | Makes the script read from a file, not from keyboard.   |
| `date -r`     | Get file’s date and time | Shows when the file was last changed.                   |
| `=`           | Compare words            | Checks if two words are the same.                       |
| `useradd`     | Create a user            | Adds a new system user.                                 |
| `usermod`     | Edit user info           | Updates existing user settings.                         |
| `userdel`     | Delete a user            | Removes a user from the system.                         |
| `passwd`      | Set/change password      | Changes user password.                                  |
| `df`          | Disk usage info          | Shows disk space usage.                                 |
| `top`         | Live process monitor     | Displays running processes in real-time.                |
| `ps`          | List processes           | Shows current running processes.                        |
| `ssh`         | Remote login             | Connects to another system securely.                    |
| `scp`         | Secure file copy         | Copies files securely between computers.                |
| `ssh-keygen`  | Create SSH key pair      | Makes a key for secure login.                           |
| `ssh-copy-id` | Copy SSH key to server   | Sends public key to server for passwordless login.      |

---

## Controlling the Script

| Word                       | Meaning        | Simple Explanation                                 |
| -------------------------- | -------------- | -------------------------------------------------- |
| `if`, `then`, `else`, `fi` | Make decisions | Runs certain lines only if some condition is true. |
| `elif`                     | Else if        | Checks another condition if the first one failed.  |
| `for`                      | For loop       | Repeats some lines for each file or value.         |
| `while`                    | While loop     | Repeats some lines while a condition is true.      |
| `exit`                     | Stop script    | Ends the script.                                   |

---

## Example Uses (Snippets)

### Show files like Windows

```sh
for f in *
do
  if [ -d $f ]; then
    echo "$f <DIR>"
  else
    size=`cat $f | wc -c`
    echo "$f $size bytes"
  fi
done
```

---
