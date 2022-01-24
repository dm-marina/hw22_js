function counter(number=0){
        return{
                increase(){
                    if(+number && !isNaN(number)){
                        numInc = number+1
                    }
                    return numInc
                },
                decrease(){
                    if(+number && !isNaN(number)){
                      numDec=number-1
                    }
                        return numDec 
                    
                },
                value(){
                    
                    return number
                }
        }
    
}
const list = counter(4)
console.log(list.increase())
console.log(list.decrease())
console.log(list.value())
