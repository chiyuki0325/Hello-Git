#!/bin/bash

media="/home/chiyuki/视频/原神启动.mp4"

cat <<EOF >~/.config/autostart/genshin-impact-launch.desktop
[Desktop Entry]
Name=你说得对 但是原神
Type=Application
Exec=/usr/bin/mpv --no-border --fullscreen "${media}"
Terminal=false
X-GNOME-Autostart-enabled=true
EOF
