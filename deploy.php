<?php

$commands = array(
	'echo $PWD',
	'whoami',
	'git pull',
	'git status',
	'git submodule sync',
	'git submodule update',
	'git submodule status',
    'test -e /usr/share/update-notifier/notify-reboot-required && echo "system restart required"',
);

foreach($commands AS $command){
    $tmp = shell_exec("$command 2>&1");
}

?>
