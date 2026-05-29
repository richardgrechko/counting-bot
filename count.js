let count = 0n;
window.writeTextAt = function writeTextAt(text,color,x,y) {
   let k=text.split("\n")
   void (function e(t) {
      if(t>=k.length) {
         return
      }
      void (function r(a) {
         if(a>=k[t].length){
            setTimeout(e,33,t+1)
            return
         }
         (writeCharAt(k[t][a],color instanceof Array?color[(a-t)%color.length]:color,x+a,y+t),r(a+1),k[t][a])
      })(0)
   })(0)
}
window.writeTextCenterAt = function writeTextCenterAt(text,color,x,y) {
   let k=text.split("\n")
   void (function e(t) {
      if(t>=k.length) {
         return
      }
      writeTextAt(k[t],color,x-Math.floor(k[t].length/2),y+t)
		setTimeout(e,33,t+1)
   })(0)
}
function getWordInfo(x,y,xr=1,yr=1) {
	const word = [];
	for (let i = 0; i < yr; i++) {
		word.push("")
		for (let j = 0; j < xr; j++) {
			word[i]+=getCharInfoXY(x+j,y+i)?.char??" "
		}
	}
	return word.join("\n")
}
setInterval(_=>{
	let a = getWordInfo(-20,-8,40).toLowerCase().trim().split(" ")
	if (a.join(" ").endsWith("->")) {
		writeTextAt(" ".repeat(40),0,-20,-8);
		writeTextAt(" ".repeat(40),0,-20,-6);
		if (a[0].replace("->","")===(count+1n).toString()) {
			count++;
			writeTextAt("✓",[[64,255,64]],0,-7);
			writeTextCenterAt(count.toString(),0,0,-6);
		} else {
			count=0n;
			writeTextAt("X",[[255,64,64]],0,-7);
			writeTextCenterAt("Ruined the count!",[[255,128,128]],0,-6);
		}
	}
},100)
