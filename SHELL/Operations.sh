#!bin/bash
echo "Enter a : "
read a
echo "Enter b : "
read b
sum=$((a + b))
echo "Sum: $sum"
div=$((a/b))
echo "division : $div"
mul=`expr $a \* $b`
echo "Multiplication : $mul"
