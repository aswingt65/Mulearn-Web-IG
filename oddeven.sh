clear
echo "SHELL SCRIT TO FIND ODD OR EVEN"
echo "Enter the number : "
read n
rem=$(($n % 2))
if [ $rem -eq 0 ]
then 
echo $n "is even"
else
echo $n "is odd"
fi    
