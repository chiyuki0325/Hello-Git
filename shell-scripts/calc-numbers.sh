#!/bin/bash
# ニャー

lines=$(sed '/^[[:space:]]*$/d' numbers.txt | wc -l)

while read -r number; do
    if [ ! -z "$number" ]; then
        sum=$(($sum + $number))
    fi
done <numbers.txt

average="$(echo "scale=21; ${sum} / ${lines}" | bc | sed -e 's/\.\?0*$//')"
echo "Sum: ${sum}, Average: ${average}"

echo "{ \"sum\": ${sum}, \"average\": ${average} }" >numbers_calc.json
