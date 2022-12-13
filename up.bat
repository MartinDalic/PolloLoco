Rem UNDO THE LAST PUSH in GITHUB
Rem WARNING: delete pushed content 
:: git reset --hard 
:: git push --force
:: git pull
git add .
git commit -m "%*"
git push