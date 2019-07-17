lines = []
import json
with open('text.txt','r') as f:
    lines= f.readlines()

data = {}
curNum = 0
for line in lines:
    if line[0] in "0123456789":
        num, name = line.split('.')
        name = name.strip()
        num = num.strip()
        curNum = num
        data[curNum] = {}
        data[curNum]["name"]=name
        data[curNum]["abilities"]=[]
    else:
        data[curNum]["abilities"].append(line.strip())

with open('r.json','wb') as f:
    json.dump(data, f)