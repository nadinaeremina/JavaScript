class Fraction{

    constructor(numerator, denominator)
    {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    Addition(numerator, denominator){

        return new Fraction(this.numerator*denominator+this.denominator*numerator, this.denominator*denominator);
    }

    Subtraction(numerator, denominator){

        if (this.numerator*denominator-this.denominator*numerator==0)
        {
            return new Fraction(0,0);
        }
        return new Fraction(this.numerator*denominator-this.denominator*numerator, 
            this.denominator*denominator); 
    }

    Multiply(numerator, denominator){

        return new Fraction(this.numerator*numerator, this.denominator*denominator);
    }

    Division(numerator, denominator){

        return new Fraction(this.numerator*denominator, this.denominator*numerator);
    }

    Reduction(fraction){

        let integer=0;

        if(fraction.denominator==0 && fraction.numerator==0)
        {
            return `${integer}`; 
        }

        if (fraction.numerator>fraction.denominator){
            
            integer=Math.floor(fraction.numerator/fraction.denominator);
            fraction.numerator-=integer*fraction.denominator;
        }

        if (fraction.denominator%fraction.numerator==0){
            fraction.denominator=fraction.denominator/fraction.numerator;
            fraction.numerator=1;  
            
            if(fraction.denominator==fraction.numerator)
            {
                integer=1;

                fraction.denominator=0;
                fraction.numerator=0;
            }
        }
        else{
            for (let index = fraction.numerator-1; index>1 ; index--) {
                if(fraction.denominator%index==0 && fraction.numerator%index==0){
                    fraction.numerator/=index;
                    fraction.denominator/=index;
                    break;
                }2
            }
        }

        if (integer && fraction.numerator && fraction.denominator){
            return `${integer} ${fraction.numerator}/${fraction.denominator}`;
        }
        else if(integer && !fraction.numerator && !fraction.denominator)
        {
            return `${integer}`; 
        }

        return `${fraction.numerator}/${fraction.denominator}`;
    }
}

let numerator;
let denominator;

let fraction;
let new_fraction;

let numerator2;
let denominator2;

let choose;
let flag=1;

do {
    numerator=+prompt("Введите числитель:");
    denominator=+prompt("Введите знаменатель:");
    
    fraction = new Fraction(numerator, denominator);
    
    numerator2=+prompt("Введите числитель:");
    denominator2=+prompt("Введите знаменатель:");
    
    do {
        choose=prompt("Выберите необходимую операцию: '+', '-', '/', '*'");
        
        switch (choose) {
            case '+': new_fraction=fraction.Addition(numerator2, denominator2); 
                break;
            case '-': new_fraction=fraction.Subtraction(numerator2, denominator2);
                break;
            case '/': new_fraction=fraction.Division(numerator2, denominator2);
                break;
            case '+': new_fraction=fraction.Multiply(numerator2, denominator2);
                break;
            default: alert("Вы ввели недопустимый символ!");
                break;
    
                alert(choose);
        }
    } while (choose!='+' && choose!='-' && choose!='/' && choose!='*');
    
    alert(fraction.Reduction(new_fraction));

    do {
        flag=prompt("Желаете продолжить? '1'-да, '2'-нет");

        if (flag!='1' && flag!='2')
        {
            alert("Введите '1' или '2'");
        }
    } while (flag!='1' && flag!='2');
    
} while (flag=='1');

window.location.href="index.html";