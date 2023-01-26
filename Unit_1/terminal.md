# The Terminal

The terminal is how we interact with out computer and it's directories(folders) and files.

It is a CLI: Command Line Interface, a text based interface to the computer.

We can type commands, manipulate files, execute programs, or open documents. It is more powerful and faster than a GUI.

(GUI is a graphical user interface, using icons, menus, and windows for us to interact with in a visual way.)

<hr />

## Terminal Commands

- Print Working Directory
    - `pwd`
    - Shows the name of the current directory. Prints the full directory folder path.
- List Directory
    - `ls`
    - Shows the content of the current directory. Shows all the folders and/or files at the current directory path.
- Make Directory
    - `mkdir`
    - Creates a new directory inside the current one. Makes a new folder.
- Touch or New Items
    - `touch filename.filetype`
    - `ni filename.filetype`
    - Creates a new file at the current directory path.
- Change Directory
    - `cd`
    - Moves us into a different directory
    - to move forward 'cd fileORfoldername
    - to move backwards `cd ..`

- Clear
    - `clear` or `cls`
    - clears the terminal

<hr>

## Other Terminal Commands

- Copy file
    - `cp`
    - Copies a file ex: `cp index.html copyindex.html`
- Move File
    - `mv`
    - Moves a file, ex: `mv index.html ./newFolderPath`
- Help
    - `help`
    - provides a list of commands/opens a help menu
- Remove Here
    - `rm-r` or `rmdir`
    - Removes files/folders, WARNING: these can not be recovered as files permanently get deleted and not sent to the recycle bin.
    - `rm-r` removes a directory's contents (all/any folders and file it contains)
    - `rmdir` removes an empty directory/folder

<hr>

###  Other things to Note:

- In the terminal a file path divides parent and child folders and files with a forward slash: /

- ex: desktop/PTSB_Jan_2023/lecture/unit_1/terminal.md

- Using the tab key can help us finish a folder or file name we are typing out.

- We do need to type file/folder name exactly

- How to stop the terminal from running.
    - Use `ctrl + c` and enter/return
    - Stops the terminal from running something and/or exits what is currently running/a menu, appears in the terminal as an `^C`

- On mac `sudo` may need to be used before commands where we need to elevate from user to admin privileges.
    - a password field will appear and your user password needs to be entered.
    