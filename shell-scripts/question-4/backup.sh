#!/bin/bash

mkdir -p backups

perform_backup() {
    cp log.log "backups/backup_$(date "+%Y-%m-%d-%H:%M:%S").log"
}

if [ -z "$(ls backups)" ]; then
    perform_backup
    exit 0
fi

last_backup_checksum="$(md5sum "backups/$(ls backups | tail -1)" | head -c16)"
if [ "$(md5sum log.log | head -c16)" != "${last_backup_checksum}" ]; then
    perform_backup
fi
