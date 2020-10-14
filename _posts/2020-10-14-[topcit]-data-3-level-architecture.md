---
layout : post
title : "[TOPCIT] 데이터 독립성과 3-Level Architecture"
categories : topcit
---

* 1
{:toc}

---

# 3-Level Architecture
미국국가표준기관 ANSI/SPARC[^1]에서 처음 제시 되었다.\\
3단계의 데이터베이스 구조화를 통해 중복을 배제하고 독립성을 획득 할 수 있다!

[^1]: American National Standards Institute / Standards Planning And Requirements Committee

![3-Level-Architecture](https://resources.infosecinstitute.com/wp-content/uploads/082516_1119_PracticalTh2.png)

## 외부 단계(External Level) or 뷰 단계(View Level)
- 사용자, 어플리케이션 관점
- 외부 스키마[^2] (External Schema) : 데이터베이스에 접근하는 개별 사용자를 위하여 데이터베이스에 대한 명세. 여러명의 개별 사용자가 존재하므로 여러개의 외부 스키마를 가질 수 있다. 명칭으로는 서브 스키마 또는 사용자 뷰라고도 한다.

[^2]: 데이터베이스의 전체적인 구조와 제약조건에 대한 설명

## 개념 단계(Conceptual Level) or 논리적 단계(Logical Level)
- DBMS[^3]
- 개념 스키마(Conceptual Schema) : 모든 사용자 또는 응용 시스템들이 필요로 하는 데이터를 통합한 조직 전체의 데이터 베이스 구조이며, 단 하나의 개념 스키마만 존재한다. 향후 모든 외부 스키마는 하나의 개념 스키마로부터 생성되고 지원될 것이다. 논리 스키마(Logical Schema)라고도 한다.

[^3]: Database Management System - 모든 사용자나 어플리케이션이 데이터베이스를 공유 되도록 관리/운영하는 소프트웨어 시스템

## 내부 단계(Internal Level) or 물리적 단계(Physical Level)
- Database 관점
- 내부 스키마(Internal Schema) : 하드웨어에 저장되는 전체 데이터베이스의 물리적 구조를 기술하며 단 하나의 내부 스키마만 존재한다. 물리 스키마(Physical Schema)라고도 부른다.

---

# 데이터 독립성
응용 프로그램과 데이터가 서로 종속되지 않는 것, 서로 영향을 미치지 않도록 하는 것!

## 논리적 독립성
- 응용 프로그램에 영향을 주지 않고 DB의 논리적 구조(개념 스키마)를 변경할 수 있는 것을 의미
- 외부/개념 단계 간의 사상(Mapping)에 의해 보장

## 물리적 독립성
- 응용 프로그램이나 DB의 논리적 구조에 영향을 주지 않고 DB의 물리적 구조(파일 편성, 데이터 접근 방법 등)를 변경할 수 있는 것
- 개념/내부 단계 간의 사상(Mapping)에 의해 보장

---
