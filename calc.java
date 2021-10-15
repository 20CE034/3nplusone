import java.util.*;

public class calc{
    
    void logic_stuff(){
        int i=0;
        int cc=0;
        Scanner sc=new Scanner(System.in);
        long n;
        n=sc.nextInt();  
        
        for(i=0;i<100;i++){
            
        if(n!=1){
        if(n%2==0){
            n=n/2;
            cc++;
        }
        else{
            n=(3*n)+1;
            cc++;
        }
        System.out.println(n);
        }
        }
        System.out.println("\nlevels: "+ cc);
    }
    public static void main(String []args){
        calc o=new calc();
        o.logic_stuff();
    }
}


