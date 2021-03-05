## [OMDB API](http://www.omdbapi.com/) 를 이용한 검색 어플리케이션

<br/>

### 어떻게 사용하나요? 📄

- 다음 <a href="https://mass2527.github.io/Ticketplace-assignment/" target="blank_">링크</a>를 클릭해서 접속해 주세요.

- 1글자 이상의 검색어를 입력해 주세요. (영어 소문자, 대문자 또는 숫자)

- Search 버튼을 누르거나 엔터키를 눌러주세요.
   (검색 결과가 너무 많은 경우 데이터를 불러올 수 없으므로 정확한 키워드를 입력 해주세요)

- 해당 키워드를 가진 영화, 시리즈 혹은 게임의 정보를 제목, 포스터, 타입, 연도 순으로 확인할 수 있어요.

<br/>

### 어떻게 테스트하나요? 🧪

- 우선 avengers라는 키워드로 검색을 해보세요 데이터를 불러오는 동안 loading이라는 메시지를 받게 되고 데이터를 받아온 즉시 해당 키워드를 가진 포스터들을 확인해 볼 수 있어요.

- 이번엔 aven이라는 키워드를 한 번 입력해보세요. 포스터 이미지를 제공하지 않는 데이터는 제가 We're preparing poster image...라는 메시지가 써진 이미지로 대체하였어요.

- a라는 키워드로 검색을 해보시면 해당 검색 결과가 너무 많아 Too many results라는 메시지를 받게 돼요.

- sdf라는 키워드로 검색을 하면 Movie not found! 라는 경고 메시지를 받게 돼요.

- 브라우저상에서 F12키를 눌러 Network 텝을 선택한 후 상태를 Online에서 Slow 3G로 변경한 후 새로 고침을 해보세요. 인터넷 속도가 느린 유저가 포스터 이미지가 로드되는 동안 예쁜 파란색 배경을 볼 수 있도록 해두었어요.

<br/>

### less와 CSS는 무엇이 다른가요? 🤔

<br/>

1. `CSS에서도 변수를 만들어서 사용할 수 있지만 매우 제한적이에요. less에서는 selector, property 등 다양한 값을 변수로 만들어 사용할 수 있어요.`

**less**

```
@main-color:#4361ff;
@my-selector: banner;
@property: color;

.@{my-selector}{
  background-color:@main-color;
  @{property}: #0ee;
}
```

**CSS**

```
:root{
  --main-color:#4361ff;
}

.banner{
  background-color:var(--main-color);
}

```

<br/>

2. `CSS와는 다르게 less를 사용하면 한 선택자를 다른 선택자 안에 포함시키는 것이 가능하기 때문에 이를 활용하여 중복을 없앨수 있고 이해하기 쉽게 스타일링을 할 수 있어요.`

**less**

```
nav {
      background: @basecolor;
      border:@Border;
      border-radius: 5px;
      height:40px;

      ul {
          list-style:none;

          li {
              display: inline;
              float: left;
              position: relative;
          }
      }
}

```

**CSS**

```
nav {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  height: 40px;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline;
  float: left;
  position: relative;

```

<br/>

3. `CSS를 사용하다 보면 중복된 스타일링 코드를 여러 차례 반복하는 걸 느낄 수 있는데 less에서는 믹스인이라는 기능을 활용하여 중복을 최소화하고 빠르게 스타일링할 수 있어요.`

**less**

```
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#menu a {
  color: #111;
  .center;
}

.post a {
  color: red;
  .center;
}


```

**CSS**

```
#menu a {
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
}

.post a {
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

```

<br/>

4. `less에서는 css에서는 존재하지 않는 다양한 내장함수를 제공하므로 특수한 경우에 조건문, 반복문 등을 활용하여 스타링을 할 수 있어요.`

less

```
@some: foo;

div {
    margin: if((2 > 1), 0, 3px);
    color:  if((iscolor(@some)), @some, black);
}

@set: {
  one: blue;
  two: green;
  three: red;
}

.set {
  each(@set, {
    @{key}-@{index}: @value;
  });
}

```

css

```
div {
    margin: 0;
    color:  black;
}

.set {
  one-1: blue;
  two-2: green;
  three-3: red;
}
```
