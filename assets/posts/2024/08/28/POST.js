export default `
    <h1 id="-">이 웹 페이지에 글을 쓰는 과정</h1>
<p>이 웹 페이지에 글을 올릴 때 어떤 순서로 진행해야될지 정리해보자!</p>
<h2 id="-">당연히 글부터 써야지!!</h2>
<p><a href="https://markdowntohtml.com/">마크다운으로 글 쓰러가기</a></p>
<ul>
<li><p>글을 쓰고나서 할 일:</p>
<ol>
<li>POST_LIST.js에 json 등록</li>
<li>등록한 json에 명시한 날짜를 경로로 하는 폴더 생성 ex) assets/posts/{2024/08/28}</li>
<li>최하단 폴더에 POST.js 생성</li>
<li>POST.js파일에 마크다운으로 작성한 글 Raw HTML로 복사 붙여넣기</li>
</ol>
</li>
<li><p>Commit!</p>
</li>
</ul>
<p>highlighting test:</p>
<pre><code class="lang-js"><span class="hljs-keyword">var</span> foo = <span class="hljs-string">'bar'</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">baz</span><span class="hljs-params">(s)</span> </span>{
   <span class="hljs-keyword">return</span> foo + <span class="hljs-string">':'</span> + s;
}
</code></pre>
<p>아쉽지만 코드 하이라이팅은 안 되는것 같다 직접 스타일링을 해줘야 되는건가??
천천히 알아보자!</p>
<p>The end ...</p>
`;