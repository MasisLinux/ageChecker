let age = prompt('What is your age?')


if (age > 0 && age < 18) {

    alert(`You are not allowed, your age is ${age}`)
}

else if (age > 18 && age < 47) { 
    alert(`Ok man you can pass,your age is ${age}`)
}

else {
    alert(`you shall not pass your age is ${age}` )
}


