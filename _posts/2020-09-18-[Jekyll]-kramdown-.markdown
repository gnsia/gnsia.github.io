---
layout: post
title:  "[Jekyll] Kramdown 문법 정리"
categories: jekyll
---
# Kramdown???
Kramdown은 github x jekyll로 블로그를 만들고 포스팅을 하는 사람이라면 무조건 알아야하는 마크다운 문법이다. 현재 github page 자체가 kramdown만 지원한다. 본격적으로 블로그를 운영하기전에 kramdown 문법을 한 번 정리해보면 좋을 것 같다.

---

# Header
타이틀이 되는 속성을 부여한다.
``<h1>``

## 입력
```
# Hand-stencil
## Hand-stencil
### Hand-stencil
#### Hand-stencil
##### Hand-stencil
###### Hand-stencil
```

## 출력

# Hand-stencil
## Hand-stencil
### Hand-stencil
#### Hand-stencil
##### Hand-stencil
###### Hand-stencil

---

# Horizontal Rules
가로선을 그려준다.
``<hr>``

## 입력
```
* * *
---
 - - - -
-----------
```

## 출력
* * *
---
 - - - -
--------

---

# Line-break
다음 줄로 넘어가기.
``<br>``

## 입력
```
Hand
stencil

Hand \\
stencil
```

## 출력
Hand
stencil

Hand \\
stencil

---

# List
요소를 나열하기.
``<ol>`` ``<ul>`` ``<li>``

## 입력
```
1. 첫번째
1. 두번째
1. 세번째

+ 순서없음
  - 홍길동
    * 임꺽정
      + 제갈량
```
## 출력
1. 첫번째
2. 두번째
3. 세번째

+ 순서없음
  - 홍길동
    * 임꺽정
      + 제갈량

---

# Link
다양한 방식으로 링크를 지원한다.``<a>``

## 입력
```
A [링크](http://kramdown.gettalong.org)

A [링크](http://kramdown.gettalong.org "hp")

A [링크][kramdown hp]
to the homepage.

[kramdown hp]: http://kramdown.gettalong.org "hp"


A link to the [kramdown hp].

[kramdown hp]: http://kramdown.gettalong.org "hp"
```
## 출력
A [링크](http://kramdown.gettalong.org)

A [링크](http://kramdown.gettalong.org "hp")

A [링크][kramdown hp]
to the homepage.

[kramdown hp]: http://kramdown.gettalong.org "hp"


A link to the [kramdown hp].

[kramdown hp]: http://kramdown.gettalong.org "hp"

---

# Bold, Italic, strike
문장 내 단어 강조하기
``<b>`` ``<i>`` ``<s>``

## 입력
```
__진하게__, _기울이기_, ~~아닌가?~~
```

## 출력
__진하게__, _기울이기_, ~~아닌가?~~

---

# Blockquotes
인용구 부분의 디자인을 적용한다.
``<blockquote>``

## 입력
```
> blockquote 첫줄
>
> > 서브 blockquote1
> > 서브 blockquote2
>
> ## blockquote내의 헤더
> 헤더뒤 기본글
```

## 출력
> blockquote 첫줄
>
> > 서브 blockquote1
> > 서브 blockquote2
>
> ## blockquote내의 헤더
> 헤더뒤 기본글

---

#
