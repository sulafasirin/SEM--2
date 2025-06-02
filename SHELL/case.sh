#!/bin/bash
echo "Enter the Operator : "
read op
case $op in
	+)
		echo "Addition"
		;;
	-)
		echo "Subtraction"
		;;
	*)
		echo "Multiplication"
		;;
	/)
		echo "Division"
		;;
esac
