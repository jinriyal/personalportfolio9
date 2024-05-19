// 4TH QUARTER DIAGNOSTIC: Scope of Variables

function scopeExample() {
    var a = 10;
    if (true) {
        var a = 20;
        console.log(a);
    }
    console.log(a);
}

/* The result or output of the code would be "20 20" since in the "scopeExample", variable "a" has the value of 10.
While, in the if statement, another variable "a" has the value of 20.
However, because JavaScript has function-level scope for 'var", the if block does not create a new variable with the second declaration of "a" but it changes the value of the existing variable a .
Therefore, when "console.log(a)" is declared in the if block, the outcome is the value 20.
Then, when "console.log(a)" is declared outside the if block, it will print a similar value which is 20. */