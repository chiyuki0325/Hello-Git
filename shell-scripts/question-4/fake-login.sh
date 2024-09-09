#!/bin/bash

printf "Enter username: "
read username
echo "User $username logged in at $(date "+%Y-%m-%d %H:%M:%S")" >>log.log
