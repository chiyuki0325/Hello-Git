#!/bin/bash

echo "Generating names..."

for i in {1..10000}; do
	echo "$(cat /dev/urandom | head -1 | base64 | head -c11)" >>name.txt
done

echo "Generating attended names..."
cp names.txt names_attend.txt
for i in {1..10}; do
	sed -i "$((RANDOM % 10000 + 1))d" names_attend.txt
done
