---
layout: post
title:  "[Jekyll] Kramdown 문법 정리"
categories: jekyll
---
* 1
{:toc}

# Kramdown???
Kramdown은 github x jekyll로 블로그를 만들고 포스팅을 하는 사람이라면 무조건 알아야하는 마크다운 문법이다. 현재 github page 자체가 kramdown만 지원한다. 본격적으로 블로그를 운영하기전에 kramdown 문법을 한 번 정리해보면 좋을 것 같다.

---

# Header
타이틀이 되는 속성을 부여한다.
``<h1>``

## 입력
{:.no_toc}
```
# Hand-stencil
## Hand-stencil
### Hand-stencil
#### Hand-stencil
##### Hand-stencil
###### Hand-stencil
```

## 출력
{:.no_toc}

# Hand-stencil
{:.no_toc}
## Hand-stencil
{:.no_toc}
### Hand-stencil
{:.no_toc}
#### Hand-stencil
{:.no_toc}
##### Hand-stencil
{:.no_toc}
###### Hand-stencil
{:.no_toc}

---

# Horizontal Rules
가로선을 그려준다.
``<hr>``

## 입력
{:.no_toc}

```
* * *
---
 - - - -
-----------
```

## 출력
{:.no_toc}

* * *
---
 - - - -
--------

---

# Line-break
다음 줄로 넘어가기.
``<br>``

## 입력
{:.no_toc}

```
Hand
stencil

Hand \\
stencil
```

## 출력
{:.no_toc}

Hand
stencil

Hand \\
stencil

---

# List
요소를 나열하기.
``<ol>`` ``<ul>`` ``<li>``

## 입력
{:.no_toc}

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
{:.no_toc}

1. 첫번째
2. 두번째
3. 세번째

+ 순서없음
  - 홍길동
    * 임꺽정
      + 제갈량

---

# Bold, Italic, strike
문장 내 단어 강조하기
``<b>`` ``<i>`` ``<s>``

## 입력
{:.no_toc}

```
__진하게__, _기울이기_, ~~아닌가?~~
```

## 출력
{:.no_toc}

__진하게__, _기울이기_, ~~아닌가?~~

---

# Link
다양한 방식으로 링크를 지원한다.``<a>``

## 입력
{:.no_toc}

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
{:.no_toc}

A [링크](http://kramdown.gettalong.org)

A [링크](http://kramdown.gettalong.org "hp")

A [링크][kramdown hp]
to the homepage.

[kramdown hp]: http://kramdown.gettalong.org "hp"


A link to the [kramdown hp].

[kramdown hp]: http://kramdown.gettalong.org "hp"

---

# Image
이미지 첨부하기.``<img>``\\
(gibhub 저장소의 이미지 소스 주소를 연결)


## 입력
{:.no_toc}

```
![Logo](/assets/img/logo.png)
```
![Logo](/assets/img/logo.png)

---

# Blockquotes
인용구 부분의 디자인을 적용한다.
``<blockquote>``

## 입력
{:.no_toc}

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
{:.no_toc}

> blockquote 첫줄
>
> > 서브 blockquote1
> > 서브 blockquote2
>
> ## blockquote내의 헤더
> {:.no_toc}
> 헤더뒤 기본글

---

# Footnotes
각주를 선언하여 페이지 맨 아래에서 설명해주는 방식,\\
나무위키에서 자주보던 방식이다. ``[^1]``

## 입력
{:.no_toc}

```
각주1 선언부분 a footnote[^1].  
각주2 선언부분 a footnote[^2].

[^1]: 각주에 대한 설명 내용 부분 (문서 최하단)
[^2]: 각주에 대한 설명 내용 부분 (문서 최하단)
```

## 출력
{:.no_toc}

각주1 선언부분 a footnote[^1].  
각주2 선언부분 a footnote[^2].

[^1]: 각주에 대한 설명 내용 부분 (문서 최하단)
[^2]: 각주에 대한 설명 내용 부분 (문서 최하단)

---

# Inline code
문장내에서 특정 문자를 escape 해준다.


## 입력
{:.no_toc}

```
문장내의 `###` 사용을 무시함

문장내의 `` `code` `` 사용을 무시함
```

## 출력
{:.no_toc}

문장내의 `###` 사용을 무시함

문장내의 ``code`` 사용을 무시함

---

# Code block
내용을 코드 블럭으로 감싸준다.\\
블럭안에 문자는 escape된다.\\
1. 띄어쓰기 네개 또는 탭을 이용한 코드블럭
2. ``~~~~``로 위 아래를 감싸서 만든 코드블럭
3. ```을 위아래로 감싸 만든 코드블럭 \\
      (본 게시물은 이 문법을 이용하여 작성되었다.)

## 1. 입력
{:.no_toc}

```
    블럭내에 첫째줄
    블럭내의 둘째줄

    블럭내의 넷째줄
    #문자escape
    ~~~~
```

## 1. 출력
{:.no_toc}

    블럭내에 첫째줄
    블럭내의 둘째줄

    블럭내의 넷째줄
    #문자escape
    ~~~~

## 2. 입력
{:.no_toc}

```
~~~~~~
블럭내에 첫째줄
블럭내의 둘째줄

블럭내의 넷째줄
#문자escape
~~~~
~~~~~~~
```

## 2. 출력
{:.no_toc}

~~~~~~
블럭내에 첫째줄
블럭내의 둘째줄

블럭내의 넷째줄
#문자escape
~~~~
~~~~~~~

## 3. 입력 (괄호는 지워야 한다.)
{:.no_toc}

```
(```)
블럭내에 첫째줄
블럭내의 둘째줄

블럭내의 넷째줄
#문자escape
~~~~
(```)
```

## 3. 출력
{:.no_toc}

```
블럭내에 첫째줄
블럭내의 둘째줄

블럭내의 넷째줄
#문자escape
~~~~
```


---

# Language Code block
``~~~~~~``뒤에 언어명을 기입하면\\
언어 특성에 맞춰 코드 블럭을 만들어준다.

## 입력
{:.no_toc}

```
~~~ ruby
def what?
 42
end
~~~

~~~ java
public static void main(String[] args){
}
~~~
```

## 출력
{:.no_toc}

~~~ ruby
def what?
 42
end
~~~

~~~ java
public static void main(String[] args){
}
~~~

---

# Table

- `|` 파이프 라인으로 컬럼을 구분
- `:----` 헤더와 바디를 구분
- `-----` 테이블 바디간을 구분
- `=====` 푸터와 바디를 구분
- 내용 위, 아래로 개행이 있어야한다.

## 입력
{:.no_toc}

```

|      | 수학 |  평가  |  
| :--- | ---: | :---: |  
| 철수  | 90  | 참잘했어요. |  
| 영희  | 50  | 분발하세요. |

```

## 출력
{:.no_toc}

|      | 수학 |  평가  |  
| :--- | ---: | :---: |  
| 철수  | 90  | 참잘했어요. |  
| 영희  | 50  | 분발하세요. |

---

# Table of Content (TOC)
Kramdown이 마크다운을 HTML로 전환할 때 헤더 ID를 자동으로 생성한다. 이 헤더 ID를 이용하여 원하는 곳에 아래와 같은 코드를 넣어 목차를 만들 수 있다. 현재 페이지 맨 위에 사용 된 코드는 아래와 같다.

```
* 1
{:toc}
```

`#`뿐만이 아니라 `##`, `###` 등 모든 헤더 스타일 마크다운 문법에 ID가 생성되므로 원하지 않는 헤더 밑에는 아래 코드와 같이 입력하여 목차에서 지웠다. 일일히...

```
## 입력
{:.no_toc}

## 출력
{:.no_toc}
```

게시글을 작성하기 전에 글의 depth를 어느정도 생각하고 작성하면 훨씬 편할 것 같다.

---

이상으로 기본적인 kramdown 문법을 살펴보았다.\\

---
