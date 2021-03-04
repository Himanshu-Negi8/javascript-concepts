function myfunc(){
	var str = document.getElementById("str").value;
	console.log(str);
	var flag=true;
	for(var i=0;i<str.length;i++){
		if(str[i]>='A' && str[i]<='Z'){
			
			continue;
		}else{
			flag=false;
			break;
		}
	}
	
	if(flag){
		var count=0;
		var space=0;
		for(var i=0;i<str.length;i++){
			if(str[i]=='A' || str[i]=='E'||str[i]=='I' || str[i]=='O'|| str[i]=='U'){
				count++;
			}
			else if(str[i]==' '){
				space++;
			}
		}
		document.getElementById("output").innerHTML=count+" vowels "+space+" spaces "+"Uppercase"
	}
	else{
		var count=0;
		var space=0;
		for(var i=0;i<str.length;i++){
			if(str[i]=='A' || str[i]=='E'||str[i]=='I' || str[i]=='O'|| str[i]=='U'){
				count++;
			}
			else if(str[i]==' '){
				space++;
			}
		}
		document.getElementById("output").innerHTML=count+" vowels "+space+" spaces "+ "not uppercase"
	}
}
