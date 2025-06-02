#!/bin/bash
clear
factorial() {
  f=1
  i=1
  while [ $i -le $1 ]; do
    f=$((f * i))
    ((i++))
  done
  echo $f
}

read -p "Enter a number : " n

echo "Factorial of $n is: $(factorial $n)"
