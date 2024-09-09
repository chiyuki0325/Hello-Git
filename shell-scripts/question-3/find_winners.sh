#!/bin/bash

# 假设获奖者名单为 winners.txt (题目中写的 name.txt 实际上为万人大名单，怀疑是题目错误？)
# 万人大相册为 pictures 文件夹

mkdir winners_pic
cp winners.txt winners_tmp.txt

echo "Finding winners..."

i=1
while read name; do
    j=1
    while read -r winner; do
        j=$(($j + 1))
        if [ "$winner" == "$name" ]; then
            echo "Got winner ${i} - ${name}"
            sed -i "${j}d" winners_tmp.txt
            cp "pictures/${i}${name}.jpg" "winners_pic/"
            break
        fi
    done <winners_tmp.txt
    i=$(($i + 1))
done <name.txt

rm winners_tmp.txt
