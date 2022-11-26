 function myFunction_1()
{
	var n,i,flag=true;
	n=document.getElementById("user_input_1").value;
	if(n==0)
	{
	    alert(n + " is  neither prime nor composite");
        document.getElementById("user_input_1").value="";		
	}
	else
	{
		for(i=2;i<n-1;i++)
		{
			if(n%1==0)
			{
				flag=false;
				break;
			}
		}
		if(flag==true)
		   alert(n + " is prime");
		else
		   alert(n + " is not prime");
		document.getElementById("user_input_1").value="";
	}
}
function myFunction_2()
{
	var n,i,count,num,ans="",c;
	n=document.getElementById("user_input_2").value;
	for(num = 1;num<=n;num++)
	{
         count = 0;
         for(i=2;i<=num/2;i++)
		 {
             if(num%i==0)
			 {
                 count++;
                 break;
             }
        }
         if(count==0 && num!= 1)
             ans+=num+" ";
    }
    alert("The prime Numbers are "+ ans);
	document.getElementById("user_input_2").value="";
}
