#!bin/bash
echo "Enter a : " 
read a
echo "Enter b : "
read b
if [ $a -gt $b ];then
	echo "a is greatest"
else
	echo "b is the greatest"
fi
