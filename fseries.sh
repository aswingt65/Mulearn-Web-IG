clear
echo "SHELL SCRIPT TO PRINT FIBONACCI SERIES"
echo "Enter the limit : "
read n
n1=0
n2=1
for ((i=0 ; i<n; i++))
do
echo "$n1 "
n3=`expr $n1 + $n2`
n1=$n2
n2=$n3
done
