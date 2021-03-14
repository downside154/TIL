# 제어문 연습 문제




## 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라

```
var x = 15;

if (x > 10 && x <20){
    console.log(x)
}
```

var x 의 값이 고정 되어있고 매 iteration에 변하지 않는다고 가정하면 위에 쓰인 코드로 x의 값이 10보다 크고 20보다 작은지 확인 할 수 있다.


## 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

```
var even; 
for (even = 0; even < 10; even++){
    if (even % 2 == 0){
        console.log(even);
    }
}  
```


## 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

```
var even;
var list = ''; 
for (even = 0; even < 10; even++){
    if (even % 2 == 0){
        list += even;
    }
} 
console.log(list)
```

리스트에 짝수만 가진 array 를 만들기 위해서는 문자열로 변환이 필요하기 때문에 str로 만든다.

memo point: console.log 를 실행할 scope 생각하기!


## 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

```
var odd; 
for (odd = 10; odd > 0; odd--){
    if (odd % 2 == 1){
        console.log(odd);
    }
}  
```

짝수를 나열 했었던 2 번 문제와 흡사하지만 역순으로 나열하기 위해서는 for문의 initial value랑 컨디션, 그리고 incrementation을 모두 역순으로 바꾸면 원하는대로 나열 할 수 있다.


## 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

```
var even = 0;

while (even < 10){
    if (even % 2 ==0){
        console.log(even)
    }
    even++;
}
```

여러가지의 컨디션을 while문으로 사용하기 위해서는 각자의 스코프를 생각하면서 작성하면 위와 비슷한 코드가 노을 것이다.


## 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

```
var odd = 10;

while (odd > 0){
    if (odd % 2 == 1){
        console.log(odd)
    }
    odd--;
}
```

5번을 역순으로 나열하기 위해서 역방향으로 iteration을 진행하게 작성함.


## 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

```
var nums;
var sum = 0;

for (nums = 0; nums < 10; nums++){
    sum += nums;
}
console.log(sum)
```


## 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

```
var nums;
var sum = 0;

for (nums = 0; nums < 20; nums++){
    if ((nums % 3 !== 0) && (nums % 2 !== 0)){
        sum += nums;
    }
}
console.log(sum)

```
memo point: 코드를 조금 더 단략하고 가독성 높일 방법은 없을까??


## 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

```
var nums;
var sum = 0;

for (nums = 0; nums < 20; nums++){
    if ((nums % 3 == 0) || (nums % 2 == 0)){
        sum += nums;
    }
}
console.log(sum)
```

memo point: 코드를 조금 더 단략하고 가독성 높일 방법은 없을까??


## 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.


```
var x;
var sumsix = [];

for (x = 1; x <6; x++){
    sumsix += "[" + (x) + "," + (6 - x) + "]"
}
console.log(sumsix)
```

원하는 아웃풋은 받았으나 좋은 코드라고 볼 수는 없다. 
로직 차원으로 부족하다고 느껴짐. 다이스라는 class나 object로 하는 것이 더 합당한 코딩 아닐까??
또한 마지막 sumsix를 조합 하는 방식이 매우 거슬린다.


## 11. 삼각형 출력하기 - pattern 1

```
var star;

for (star = 1; star <6; star++){
    console.log("*".repeat(star))
}
```

## 12. 삼각형 출력하기 - pattern 2
다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

```
var star;

for (star = 5; star > 0; star--){
    console.log((" ".repeat(5 - star)) + ("*".repeat(star)))
}
```

다만 parameter가 별할때마다 변해야 할 부분이 많기 때문에 자주 변한다면 변수로 지정해두는 방법도 생각할 필요가 있다.
15번 문제의 space 변수를 참조.



## 13. 삼각형 출력하기 - pattern 3
다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.


```
var star;

for (star = 5; star > 0; star--){
    console.log("*".repeat(star))
}
```

## 14. 삼각형 출력하기 - pattern 4
다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.


```
var star;

for (star = 1; star < 6; star++){
    console.log((" ".repeat(5 - star)) + ("*".repeat(star)))
}
```


## 15. 정삼각형 출력하기


```
var star;

for (star = 1; star < 10; star++){
        if (star % 2 != 0){
            var space = ((9 - star)/2);
            console.log( (" ".repeat(space)) + ("*".repeat(star)) + (" ".repeat(space))) 
        }
}
```


## 16. 역정삼각형 출력하기

```

var star;

for (star = 10; star > 0; star--){
        if (star % 2 != 0){
            var space = ((9 - star)/2);
            console.log( (" ".repeat(space)) + ("*".repeat(star)) + (" ".repeat(space))) 
        }
}
```

단순히 15번의 parameter반 변경하면 같은 코드로 탄생!

