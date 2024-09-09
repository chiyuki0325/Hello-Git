#!/bin/bash

music="/home/chiyuki/音乐/带词的/Robin Schulz,David Guetta,Cheat Codes - Shed a Light.flac"

cat <<EOF >~/.config/autostart/genshin-impact-launch.desktop
[Desktop Entry]
Name=你说得对 但是原神
Exec=/usr/bin/mpv "${music}" --no-border --no-embed --no-video
Terminal=false
X-GNOME-Autostart-enabled=true
EOF
