clear
echo "SHELL SCRIPT TO FIND FACTORIAL"
echo "Enter the number : "
f=1
i=1
read n
while [ $i -le $n ]
do
f=`expr $i \* $f`
i=`expr $i + 1`
done
echo "factorial of $n = " $f
