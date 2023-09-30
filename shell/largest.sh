clear
echo "SHELL SCRIPT TO FIND LARGEST OF TWO NUMBERS"
echo "Enter the first number : "
read n
echo "Enter the second number : "
read m
if [ $n -gt $m ]
then
echo "$n is larger than $m"
else
echo "$m is larger than $n"
fi

