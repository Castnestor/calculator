let result = 0;

function operation() {
    
    switch (mathOperation) {
case '+':
    return (float1 * 100 + float2* 100) / 100; 
break;
case '-':
    return float1 - float2;
break;
case '*':
    return ((float1 *100) * (float2 * 100)) / (100 * 100);
break;
case '/':
    return float1 / float2;
break;
default:
    console.log("Usage: value1, value2, 'operator(+, -, *, /)'");
    return NaN;
}
}