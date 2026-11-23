import*as F from"node:fs"
let O
const T=e=>{throw e}
const K="+,-,*,/,%,/,%,,&,|,^,,<<,>>,>>>,,==,<,<".split(",")
function R(p,x){
let S=[],C=[],M=[],N=p.length,c=0,i=0,k=0,o,v,l,t,a,b,r
while(k++<1e6){
if(c<0|c>=N)T(9)
o=p[c];v=' 4d!)*./pppppppp&&&&&&&%&&&%&&&p&&&ppppppppppppp@AA@ ppppppppppp%"pppppppppppppp!!$!'.charCodeAt(o)-32
if(o>83|v>79)T(5)
if(c+(l=v>>4)>=N)T(9)
if((t=S.length-(v&3))<0|t+((v>>2)&3)>256)T(t<0?2:3)
c+=1+l;t=S.length-1
if(o<3){if(o==0)return 0;S.push(o==1?p[c-1]<<24>>24:p[c-4]|p[c-3]<<8|p[c-2]<<16|p[c-1]<<24)}
else if(o<8){if(o==3)S.pop();else S.push((o%2?S.splice(t-(o-3)/2|0,1):[S[t-(o-4)/2|0]])[0])}
else if(o<35){
if(v==5)S[t]=o==23?-S[t]|0:~S[t]
else{
b=S[t];a=S[t-1]
if(!b&o>18&o<23)T(4)
if(o>20&o<23|o==34){a>>>=0;b>>>=0}
r=o==18?Math.imul(a,b):eval("a"+K[o-16]+"b")|0
S.pop();S[t-1]=r
}
}
else if(o<53){
r=p[c-2]|p[c-1]<<8
if(o<51){if(o==48||(o==49?!S.pop():S.pop()))c+=(r<<16)>>16}
else if(o==51){if(C.length==64)T(7);C.push(c);c=r}
else{if(!C.length)T(8);c=C.pop()}
}
else if(o<66){a=S[t];if(a<0|a>255)T(6);o==64?S[t]=M[a]|0:(M[a]=S[t-1],S.length-=2)}
else if(o<82){if(O.length+(o==80?(""+S[t]).length:1)>65536)T(11);O+=o==80?""+S.pop():String.fromCharCode(S.pop()&255)}
else if(o==82)S.push(i<x.length?x[i++]:-1)
else return S.pop()&255
}
return 10
}
let{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:D="/output"}=process.env,d
for(d of F.readdirSync(I)){
let r=n=>F.readFileSync(I+"/"+d+"/"+n),u=D+"/"+d,y
O="";try{y=R(r("program.bin"),r("input.bin"))}catch(z){y=z}
F.mkdirSync(u,{recursive:!0})
F.writeFileSync(u+"/stdout.bin",O,"latin1")
F.writeFileSync(u+"/exit.txt",y+"\n")
}
