#/bin/bash
count=0;
for (( ; ; ))
do
  echo 'ABRACADABRASA' >> ./input.txt;
  count=$(($count+1));
  if [[ $count -eq 10000 ]]
  then
    break;
  fi
done