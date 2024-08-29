export default `
    <h1 id="-">이 웹페이지는 어떻게 만들었나?</h1>
<p> 제가 직접 작성한 코드를 기반으로 이야기해보자면 순수 HTML, CSS, Javascript만 이용한 노 프레임워크 웹 페이지입니다. 현재 사용중인 이 github 페이지에는 원래 jekyll로 만든 블로그가 올라가 있었습니다만... 잘 다루지도 못하면서 깊게 공부해보고 싶지는 않았습니다.</p>
<p> 꼭 정적 웹사이트 생성해주는 프레임워크가 있어야 github page가 돌아가는 줄 알았는데 github repository에 index.html만 올리고 해당 repository를 github page로 전환만 하면 index.html이 웹 호스팅 되어 브라우저를 통해 볼 수 있다는 사실을 알게 되었습니다!!</p>
<p>좋았어!</p>
<p> 한창 황준일 개발자님의 “<a href="https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/">Vanilla Javascript로 웹 컴포넌트 만들기</a> ”에 빠져있던 터라... 저 포스팅을 보며 공부한 내용을 제 github page에 적용해보고 싶었습니다.</p>
<h3 id="-dom-ui-state-data-3-">“dom(ui)은 state(data)에 종속된다.” 입밖으로 3번 말하세요.</h3>
<p>이 개념을 익히기위해 황준일님의 저 포스팅을 읽고 읽고 또 읽었습니다. 상태에 변화가 생기면 DOM이 다시 렌더링 된다!! 상태 변화에 따라 일일히 DOM API로 조작하던 시절은 지난것이다!! 물론 우리 회사에서는 아직 DOM을 일일히 조작합니다... 샤라웃 Spring &amp; JSP.</p>
<p>프레임워크나 라이브러리 없이 구현하는 과정은 매우 재밌습니다. 모든 규칙을 스스로 생각해서 만들어야하는데 이 방식이 최선일지 아닌지는 시간이 지나봐야 알 수가 있습니다. 그래도 문제가 드러나기 전까지는 최선이 맞는 것 같습니다. 해당 페이지에 코드 소스가 궁금하신 분들은 <a href="https://github.com/gnsia/gnsia.github.io">여기</a>로 오셔서 확인하실 수 있습니다.</p>
<h2 id="-">앞으로 구현해야 할 것들</h2>
<ol>
<li>댓글 기능 붙이기</li>
<li>방문객 수 붙이기</li>
<li>about 채우기</li>
<li>CSS 최적화</li>
<li>more...</li>
</ol>
<p>The end ...</p>

`