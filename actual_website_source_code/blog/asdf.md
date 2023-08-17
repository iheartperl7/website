---
title: asdf cheatsheet
layout: layout.njk
---
 # asdf cheatsheet
 
 ## Install Perl and set as current:
 
 ```bash
 asdf plugin-add perl # gotta install for each language
 asdf list-all perl  # show all available version #s
 asdf install perl 5.38.0
 asdf global perl 5.38.0 #(do this!!!, more info below)
 ```
 
 Check it:
 
 ```bash
 asdf list # all installed versions
 asdf current # (optional) shows what's currently used
 perl --version
 ```
 
 If it doesn't show 5.38.0, try this:
 
 ```bash
 source ~/.bashrc
 ```
 
 ## To uninstall asdf perly stuff:
 
 Remove the perl line(s) from `~/.tool-versions` file using an editor, then
 
 ```bash
 asdf uninstall perl 5.38.0 # addf unistall perl also works
 asdf uninstall perl 5.36.1
 asdf plugin-remove perl # asdf is done with perl!
 ```

 ## More info on asdf global:
 `asdf global perl 5.38.0` will create `~/.tool-versions` which looks like:
 
 ```bash
 perl 5.38.0
  ```
 
 ## Adding and working with another version of perl:
 
 ```bash
 asdf install perl 5.36.1 # install 2nd perl
 asdf global perl 5.36.1
 perl --version # shows 5.36.1
 asdf global perl 5.38.0
 perl --version # now shows 5.38.0
 ```
 
 ## Different development directories need different perl:
 
 In different development directories
 you may want to use a different version
 of perl.

 This will seem like magic,
 but you can make the right perl
 run whenever you are in that directory

 Go to right that development directory
 example: 

 ```bash
 cd ~/my-dev-stuff/perl/myproj
 ```

 Now type the following command:

 ```bash
 asdf local perl 5.38.0 # makes visiting the current directory magically use this version! wow!
 ```

 This will create `./tool-versions`

 ### The end.  Thanks for reading! (like me!)
 