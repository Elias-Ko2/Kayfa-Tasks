function analyzeRange(start, end) 
{
    let even_counter=0;
    let odd_counter=0;
    let even_sum=0;
    let odd_sum=0;
    let sum=0;
    if(start>end)
    {
        return "Invalid range";
    }
    else
    {
        for(let i=start;i<=end;i++)
        {
            sum+=i;
            if(i % 2 ==0)
            {
                even_counter+=1;
                even_sum+=i;
            }
            else
            {
                odd_counter+=1;
                odd_sum+=i;
            }
        }
        return `
        even count : ${even_counter}
        odd count : ${odd_counter}
        even sum : ${even_sum}
        odd sum : ${odd_sum}
        sum all numbers : ${sum}
        `;
    }
}

const result = analyzeRange(1,10);
console.log(result);

// Bonus //

function countMultiples(start, end, divisor) 
{
    let counter =0;
    for(let i=start;i<=end;i++)
    {
        if(divisor==0)
        {
            return "you cant divide by 0"
        }
        else 
        {
            if(i % divisor ==0)
            {
                counter+=1;
            }
        }
    }
    return counter;
}

const result_multi = countMultiples(1,10,2);
console.log(result_multi);