import java.util.*;

public class calc{
    
    void logic_stuff(){
        int i=0;
        Scanner sc=new Scanner(System.in);
        long n;
        n=sc.nextInt();  
        for(i=0;i<100;i++){
        if(n!=1){
        if(n%2==0){
            n=n/2;
        }
        else{
            n=(3*n)+1;
        }
        System.out.println(n);
        }
        }
     
    }
    public static void main(String []args){
        calc o=new calc();
        o.logic_stuff();
    }
}


