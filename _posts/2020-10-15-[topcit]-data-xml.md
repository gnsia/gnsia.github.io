---
layout : post
title : "[TOPCIT] XML 개념 특징 구성요소"
categories : topcit
---

* 1
{:toc}

---

# What is XML?

"eXtensible Mark-up Language"의 약자로 다른 특수한 목적을 갖는 마크업 언어를 만드는데 사용하도록 권장하는 __다목적 마크업 언어__ 이다.\\
웹 환경에서 웹 문서를 작성하고 포맷팅하는데 주로 사용하는 HTML(HyperText Markup Language)는 데이터베이스에서 추출되는 구조화된 데이터를 명세하는 데에는 적절치 않았다. 이에 W3C[^1]는 웹 환경에서 데이터를 구조화하고 교환하기 위한 표준으로 XML을 개발하였다.

[^1]: World Wide Web Consoritum

---

## XML 특징

### 단순성
- SGML[^2]의 간략화.
- 사용되지 않는 기능은 삭제, 주요기능은 수용.

[^2]: "Standard Generalized Markup Language" 문서용 마크업 언어를 정의하기 위한 메타 언어.

### 개방성
- HTML과 더불어 웹에서 함께 사용이 가능하고, Meta-data를 주고 받을 수 있다.

### 확장성
- 자신만의 태그 생성 가능
- 자체 기술 가능(Self-describing)

### 사람과 기계가 모두 이해 할 수 있는 구조
- 데이터의 비교와 취합이 용이하다.

### 내용과 표현의 분리
- 이용자가 원하는 포맷으로 변환가능(재사용성 증가)

### 계층적 구조
- 구조검색, 전문검색 가능

### 유니코드
- 여러 국가 언어 지원

---

## XML 구성요소

### XML DTD
- XML Document Type Definition
- XML 문서의 형태를 일관된 구조로 정의하는 문서로서 XML __유효성 검증__ 을 위하여 사용

### XML Schema
- XML DTD를 대체하기 위하여 개발됨
- XML 구조를 명세하기위한 고급 데이터 정의 언어
- XML DTD보다 복잡한 데이터타입의 선언이 가능

### XPath
- XML 경로식에 탐색조건을 수용 할 수 있도록 확장하여 질의를 표현하는 언어

### XQuery
- XML 표준 질의어
- XML 파일로부터 마치 데이터베이스를 사용하는 것 같이 원하는 정보를 추출 할 수 있다.

### XSL/XSLT
- XSL(eXtensible Stylesheet Language) : XML 데이터를 여러 가지 상이한 형태로 표현하기 위한 스타일시트를 명세하는 언어
- XSLT(eXtensible Stylesheet Language Transformation) : XSL의 일부로서 XML문서를 다른 일반 브라우저도 디스플레이 할 수 있도록 다른 유형의 문서(HTML 등)로 변환하는 언어

### XLL
- eXtensible Linking Language
- XML 요소간의 연결 및 관계를 표시한다.
- XLink : Hyper Link의 인식과 처리
- XPointer : XML 문서내의 요소에 대한 주소

---
