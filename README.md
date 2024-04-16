# Spring EGG Project
## 알 캐릭터 홍보 사이트 프로젝트

#### 사이트 제작 및 코딩 By Gi-Di-Zi (Kim Dong Jin)
#### 사이트 디자인 및 이미지 소스 By Jin Yerim

###### 소스 코드는 자유롭게 사용해도 좋으나 이미지 소스 및 파일들은 당사자의 허락 없이 사용하지 말아 주세요!

## 1. 사용된 기술 및 전체 구조
````
구조 -  Vue3 + Vue Router + Pinia 

DB 및 Storage - Supabase

UI - Ant Design Vue

게임 및 이펙트 - GSAP, Phaser
````
[Vue3](https://ko.vuejs.org/)

[Pinia](https://pinia.vuejs.kr/)

[supabase](https://supabase.com/)

[Ant Design Vue](https://www.antdv.com/docs/vue/introduce)

[GSAP](https://gsap.com/)

[Phaser](https://phaser.io/)

### 폴더 설명
````
Components - 페이지

style - CSS 설정

utils - supabase 설정

images - 자주 사용되는 이미지 파일

router - Vue Router 설정

store - Pinia 설정
````
### 페이지 구성
````
* MainPage - 메인 페이지

* CharacterPage - 캐릭터 소개 페이지
    각각의 캐릭터 - EggCharacter 내의 Vue 파일들 

* WorldPage - 세계관 소개 페이지

* EpisodePage - 갤러리 및 에피소드 페이지

* AuthorPage - 작가진 소개 페이지

* SalesPage - 굿즈 소개 및 판매 페이지
    GoodsDetail - 굿즈 세부 페이지

* GamePage - 미니 게임 페이지

* ContectPage - 의견 전달 페이지

* AdminPage - 관리자 페이지
````