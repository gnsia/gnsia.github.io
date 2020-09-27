---
layout: post
title: "[Server] Server Log로 알아보는 SQL Injection"
categories: server
---

- 1
{:toc}

### 들어가며
SQL 인젝션 등의 공격이 Log 상에 어떤식으로 나타나는지 알아보자

---

# 로그란?
로그는 서버에서 제공하는 가장 중요한 정보의 조각이다. 거의 대부분의 서버, 서비스, 어플리케이션은 정렬된 로깅을 제공한다. 어플리케이션이나 서비스를 실행하는 동안 발생하는 이벤트들은 로그 파일에 기록된다.

로그 파일들은 언제, 어떻게, 누구로부터 서버에 접근하는지와 같은 크리티컬한 정보들을 정밀하게 보여준다. 이런 정보들은 퍼포먼스 모니터링, 트러블 슈팅, 디버그 어플리케이션 심지어 범죄 조사에도 도움을 준다.

백엔드 웹 서버로 예를 들어보자. 보통 Apache HTTP Server는 두 개의 메인 로그를 제공한다. access.log는 모든 요청을 파일 형태로 기록한다. 만약 방문자가 'www.example.com/main.php'라는 요청한다면 따라오는 엔트리가 로그파일에 추가 될 것이다.

```
88.54.124.178 - - [16/Apr/2016:07:44:08 +0100] "GET /main.php HTTP/1.1"
200 203 "-" "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0"
```

위에 보이는 로그그는 아이피 주소가 88.54.124.178인 방문자가 2016년 4월 16일 07:44 에 main.php 파일에 요청했다는 사실과 그 요청이 성공했다는 기록을 보여준다.

이 정보는 아마도 그리 흥미롭지 않을 수 도 있다. 하지만 같은 날, 같은 시각, 같은 방문자가 dump_database.php 파일을 요청했고 그 요청이 성공했다는 기록을 보여준다면 어떨까? 로그 파일이 부재하다면 당신이 갖고 있는 웹사이트에 데이터 베이스를 날려버리는 비밀스런 행동을 누군가가 저지르고 있는지 절대로 발견 할 수 없을 것이다.

이처럼 로그 파일은 중요한 자산이다. 웹 사이트를 누가 언제 어떻게 해킹했는지 로그 파일 예시를 통해 알아보자.

# 조사

우리가 관리하는 웹사이트가 손상되었다고 가정해보자. 우분투 서버위에서 돌아가는 워드프레스로 간단하게 제작된 웹 사이트라고 가정해보자.

포렌식 팀에 도움을 요청한 후 서버를 오프라인으로 전환했다. 서버는 로그와 시스템 상태를 보존하기 위해 분리되었고 네트워크 상에 어떠한 다른 장치와의 상호작용을 예방 하므로써 (백도어가 설치되어 있다는 가정에서) 공격자의 원격 접근을 막아준다.

웹 서버 상에 악성 행위들을 확인하기 위해 법적으로 걸리지 않는 방식으로 서버 사본을 만들고 조사를 진행한다. 그러나, 공격자에 대한 법적 조치를 취할 계획이 없기 때문에 이런 경우에는 포렌식팀이 오리지날 데이터로 작업을 진행 할 수 있다.

# 증거

조사를 시작하기 위하여 찾아야 할 증거를 파악해야한다. 일반적으로 공격의 증거는 숨겨진 파일 또는 일반적이지 않은 파일에 대한 접근, 인증 유무와 관계 없는 접근, 원격 코드 실행, SQL 인젝션, XSS 및 취약성 검색 또는 정찰 등 기타 비정상적인 동작을 포함한다.

웹 서버 accesee.log를 사용 할 수 있다고 가정해보자.
```
root@secureserver:/var/log/apache2# less access.log
```

보통 access.log 파일은 엄청난 양의 요청들이 기록되어 매우 큰 경향이 있다.

```
84.55.41.57 - - [16/Apr/2016:20:21:56 +0100] "GET /john/index.php HTTP/1.1"
200 3804 "-" "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0"
84.55.41.57 - - [16/Apr/2016:20:21:56 +0100] "GET /john/assets/js/skel.min.js HTTP/1.1"
200 3532 "http://www.example.com/john/index.php" "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0"
84.55.41.57 - - [16/Apr/2016:20:21:56 +0100] "GET /john/images/pic01.jpg HTTP/1.1"
200 9501 "http://www.example.com/john/index.php" "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0"
84.55.41.57 - - [16/Apr/2016:20:21:56 +0100] "GET /john/images/pic03.jpg HTTP/1.1"
200 5593 "http://www.example.com/john/index.php" "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0"
```

한 줄 한 줄 체크해 나가는건 비효율적이으로 흥미롭지 않은 부분들은 필터링해서 날려버린다. CSS나 이미지에 대한 리소스위주로 걸러내고 가끔 일부 조사관들은 자바스크립트 파일도 걸러낸다.

하지만 지금 이 우리 예제에 웹사이트는 워드프레스 웹 어플리케이션이기 때문에 살짝 다른 접근을 시도 할 필요가 있다. 우리는 일부 데이터를 걸러내는 대신 워드프레스 특성에 맞춰 필터링 시켜주자.

```
root@secureserver:~#cat /var/log/apache2/access.log | grep -E "wp-admin|wp-login|POST /"
```

위에 access.log를 필터링하는 명령어는 wp-admin[^1], wp-login[^2], POST[^3]만 보여준다.

[^1]: 워드프레스 기본 관리자 폴더에 있는 wp-admin에 담긴 문자열
[^2]: 워드프레스(wp-login.php)의 로그인 파일 일부분
[^3]: 로그인 폼을 submit 하는 것과 같은 HTTP 요청을 서버로 보내는 POST method

출력은 많은 결과를 반환한다. 우리는 다음과 같은 로그 한줄에 집중해보자.

```
84.55.41.57 - - [17/Apr/2016:06:52:07 +0100] "GET /wordpress/wp-admin/ HTTP/1.1"
200 12349 "http://www.example.com/wordpress/wp-login.php" "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0"
```

우리는 성공적으로 워드프레스 관리자 인터페이스에 접근한 IP 84.55.41.57인 누군가가 보인다. 이 IP 주소를 사용하는 유저가 했던것을 보려면 IP가 포함된 grep 명령어를 한번더 실행해야한다.

```
root@secureserver:~#cat /var/log/apache2/access.log | grep 84.55.41.57
```

아래의 결과는 흥미롭다.
```
84.55.41.57 - - [17/Apr/2016:06:57:24 +0100] "GET /wordpress/wp-login.php HTTP/1.1"
200 1568 "-"
84.55.41.57 - - [17/Apr/2016:06:57:31 +0100] "POST /wordpress/wp-login.php HTTP/1.1"
302 1150 "http://www.example.com/wordpress/wp-login.php"
84.55.41.57 - - [17/Apr/2016:06:57:31 +0100] "GET /wordpress/wp-admin/ HTTP/1.1"
200 12905 "http://www.example.com/wordpress/wp-login.php"
84.55.41.57 - - [17/Apr/2016:07:00:32 +0100] "POST /wordpress/wp-admin/admin-ajax.php HTTP/1.1"
200 454 "http://www.example.com/wordpress/wp-admin/"
84.55.41.57 - - [17/Apr/2016:07:00:58 +0100] "GET /wordpress/wp-admin/theme-editor.php HTTP/1.1"
200 20795 "http://www.example.com/wordpress/wp-admin/"
84.55.41.57 - - [17/Apr/2016:07:03:17 +0100] "GET /wordpress/wp-admin/theme-editor.php?file=404.php&theme=twentysixteen HTTP/1.1"
200 8092 "http://www.example.com/wordpress/wp-admin/theme-editor.php"
84.55.41.57 - - [17/Apr/2016:07:11:48 +0100] "GET /wordpress/wp-admin/plugin-install.php HTTP/1.1"
200 12459 "http://www.example.com/wordpress/wp-admin/plugin-install.php?tab=upload"
84.55.41.57 - - [17/Apr/2016:07:16:06 +0100] "GET /wordpress/wp-admin/update.php?action=install-plugin&plugin=file-manager&_wpnonce=3c6c8a7fca HTTP/1.1"
200 5698 "http://www.example.com/wordpress/wp-admin/plugin-install.php?tab=search&s=file+permission"
84.55.41.57 - - [17/Apr/2016:07:18:19 +0100] "GET /wordpress/wp-admin/plugins.php?action=activate&plugin=file-manager%2Ffile-manager.php&_wpnonce=bf932ee530 HTTP/1.1"
302 451 "http://www.example.com/wordpress/wp-admin/update.php?action=install-plugin&plugin=file-manager&_wpnonce=3c6c8a7fca"
84.55.41.57 - - [17/Apr/2016:07:21:46 +0100] "GET /wordpress/wp-admin/admin-ajax.php?action=connector&cmd=upload&target=l1_d3AtY29udGVudA&name%5B%5D=r57.php&FILES=&_=1460873968131 HTTP/1.1"
200 731 "http://www.example.com/wordpress/wp-admin/admin.php?page=file-manager_settings"
84.55.41.57 - - [17/Apr/2016:07:22:53 +0100] "GET /wordpress/wp-content/r57.php HTTP/1.1"
200 9036 "-"
84.55.41.57 - - [17/Apr/2016:07:32:24 +0100] "POST /wordpress/wp-content/r57.php?14 HTTP/1.1"
200 8030 "http://www.example.com/wordpress/wp-content/r57.php?14"
84.55.41.57 - - [17/Apr/2016:07:29:21 +0100] "GET /wordpress/wp-content/r57.php?29 HTTP/1.1"
200 8391 "http://www.example.com/wordpress/wp-content/r57.php?28"
84.55.41.57 - - [17/Apr/2016:07:57:31 +0100] "POST /wordpress/wp-admin/admin-ajax.php HTTP/1.1"
200 949 "http://www.myw ebsite.com/wordpre ss/wp-admin/admin.php?page=file-manager_settings"
```

이 기록들을 분석해보면, 공격자는 로그인 페이지에 접속했다.

```
84.55.41.57 - GET /wordpress/wp-login.php 200
```

공격자는 HTTP POST방식으로 된 로그인 폼을 제출했고 302 HTTP status code로 다시 보내졌다.

```
84.55.41.57 - POST /wordpress/wp-login.php 302
```

공격자는 워드프레스 관리자 대쉬보드로 다시 보내졌다. 인증에 성공했다는 의미이다.

```
84.55.41.57 - GET /wordpress/wp-admin/ 200
```

공격자는 테마 에디터를 다뤘다.

```
84.55.41.57 - GET /wordpress/wp-admin/theme-editor.php 200
```

공격자는 파일에 악성코드를 심는 매우 보편적인 전략으로 404.php 파일을 수정하는 것을 시도했다. 공격자는 쓰기 권한이 없어서 아마도 실패했을 것이다.

```
84.55.41.57 - GET /wordpress/wp-admin/theme-editor.php?file=404.php&theme= twentysixteen 200
```

공격자는 plugin-installer에 접근했다.

```
84.55.41.57 - GET /wordpress/wp-admin/plugin-install.php 200
```

공격자는 file-manager 플러그인을 설치하고 활성화했다.

```
84.55.41.57 - GET
/wordpress/wp-admin/update.php?action=install-plugin&plugin= file-manager &_wpnonce=3c6c8a7fca 200
84.55.41.57 - GET
/wordpress/wp-admin/plugins.php?action=activate&plugin=file-manager%2Ffile-manager.php&_wpnonce=bf932ee530 200
```

공격자는 file-manager 플러그인을 이용하여 PHP `web shell`[^4] 스크립트 r57.php를 업로드 했다.

[^4]: 이미 손상된 웹 애플리케이션에 대한 지속적인 액세스를 확대하고 유지하기 위해 공격자가 사용하는 악성 스크립트

~~~
84.55.41.57 - GET
/wordpress/wp-admin/admin-ajax.php?action=connector& cmd= upload&target=l1_d3AtY29udGVudA&name%5B%5D=r57.php&FILES=&_=1460873968131 200
~~~

아래 로그는 공격자가 r57 shell script를 실행하였음을 나타낸다.
- ``?1`` 은 phpinfo();를 실행
- 서비스 목록을 획득한 공격자가 ``?28``로 쉘 스크립트의 다른 세션을 통하여 navigation을 표시.

공격자가 흥미로워 할 부분은 나타나지 않았다.

```
84.55.41.57 - GET /wordpress/wp-content/r57.php 200
84.55.41.57 - POST /wordpress/wp-content/r57.php?1 200
84.55.41.57 - GET /wordpress/wp-content/r57.php?28 200
```

공격자는 file-manager 플러그인을 이용하여 인덱스 파일을 수정한고 `HACKED!`이라는 문자로 내용을 바꾼다.

```
84.55.41.57 - POST /wordpress/wp-admin/admin-ajax.php
200 - http://www.example.com/wordpress/wp-admin/admin.php?page=file-manager_settings
```

위 정보를 토대로 공격자가 웹 사이트를 훼손하기 위한 행동들의 타임라인을 획득했다. 그러나 한 가지 의문점이 든다. 애초에 공격자는 어떤 방식으로 인증을 우회 할 수 있었을까?

brute-force 공격이나 관리자 패스워드가 새어 나가지 않았음이 확실하다고 가정하고 다시 뒤로 돌아가보자 이 문제에 대한 단서를 찾으러!

지금의 'access.log' 로는 일어난 일에 대한 단서를 찾기가 부족하다. 하지만 우리가 조사 할 수 있는 'access.log' 파일이 하나 더 있다. Apache HTTP Server log 수집 알고리즘은 오래된 로그 파일을 보관한다. `/var/log/apache2/` 디렉토리에 들어가면 4개의 추가적인 로그 파일이 보일 것이다.

첫번째 스텝으로   
