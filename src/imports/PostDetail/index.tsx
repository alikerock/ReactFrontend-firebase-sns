import svgPaths from "./svg-x9zy4k3eb2";

function Terminal() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="terminal">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="terminal">
          <path d={svgPaths.p3ace5b80} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconTerminal() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-terminal">
      <Terminal />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="logo">
      <IconTerminal />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        DevLog
      </p>
    </div>
  );
}

function DatabaseSearch() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="database-search">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="database-search">
          <path d={svgPaths.p1f2f2480} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconSearch() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-search">
      <DatabaseSearch />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[rgba(255,255,255,0.15)] content-stretch flex gap-[8px] h-[36px] items-center px-[12px] relative rounded-[4px] shrink-0 w-[400px]" data-name="search-bar">
      <IconSearch />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[14px] text-[rgba(255,255,255,0.7)]" style={{ fontVariationSettings: '"wdth" 100' }}>
        게시글, 주제, 작성자 검색...
      </p>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="bell">
          <path d={svgPaths.p21bb9400} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconNotifications() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-notifications">
      <Bell />
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[40px]" data-name="badge">
      <IconNotifications />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="avatar">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#666] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        JD
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="actions">
      <Badge />
      <Avatar />
    </div>
  );
}

function MuiAppBar() {
  return (
    <div className="bg-[#1976d2] content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.14)] flex h-[64px] items-center justify-between px-[24px] relative shrink-0 w-full" data-name="MuiAppBar">
      <Logo />
      <SearchBar />
      <Actions />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="home">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="home">
          <path d={svgPaths.p15feb9b0} id="Vector" stroke="#1976D2" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconHome() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[22px]" data-name="icon-home">
      <Home />
    </div>
  );
}

function MenuItemHome() {
  return (
    <div className="bg-[rgba(25,118,210,0.08)] content-stretch flex gap-[16px] h-[48px] items-center px-[16px] relative rounded-[8px] shrink-0 w-full" data-name="menu-item-Home">
      <IconHome />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#1976d2] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        홈
      </p>
    </div>
  );
}

function Book() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="book">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="book">
          <path d={svgPaths.p28287fc0} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconBook() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[22px]" data-name="icon-book">
      <Book />
    </div>
  );
}

function MenuItemMyPosts() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-[48px] items-center px-[16px] relative rounded-[8px] shrink-0 w-full" data-name="menu-item-My Posts">
      <IconBook />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        내 게시글
      </p>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="user">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="user">
          <path d={svgPaths.p299d2dc0} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconPerson() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[22px]" data-name="icon-person">
      <User />
    </div>
  );
}

function MenuItemProfile() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-[48px] items-center px-[16px] relative rounded-[8px] shrink-0 w-full" data-name="menu-item-Profile">
      <IconPerson />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        프로필
      </p>
    </div>
  );
}

function LogOut() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="log-out">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 19 19" width="19">
        <g id="log-out">
          <path d={svgPaths.p199c9e00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconLogout() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[22px]" data-name="icon-logout">
      <LogOut />
    </div>
  );
}

function MenuItemLogout() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-[48px] items-center px-[16px] relative rounded-[8px] shrink-0 w-full" data-name="menu-item-Logout">
      <IconLogout />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        로그아웃
      </p>
    </div>
  );
}

function MuiDrawer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] h-full items-start px-[8px] py-[16px] relative shrink-0 w-[240px]" data-name="MuiDrawer">
      <div aria-hidden className="absolute border-[#e0e0e0] border-r border-solid inset-0 pointer-events-none" />
      <MenuItemHome />
      <MenuItemMyPosts />
      <MenuItemProfile />
      <MenuItemLogout />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[40px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[15px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 text-[#9e9e9e] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        2시간 전 · 5분 소요
      </p>
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="share-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="share-2">
          <path d={svgPaths.p2b5b2b70} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconShare() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-share">
      <Share />
    </div>
  );
}

function AuthorRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="author-row">
      <Frame />
      <Frame1 />
      <IconShare />
    </div>
  );
}

function PostBody() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal gap-[16px] items-start leading-[1.6] relative shrink-0 text-[#212121] text-[15px] w-full" data-name="post-body">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        React를 처음 배우는 개발자들이 가장 헷갈려하는 개념이 State와 Props입니다.
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 읽기 전용 데이터입니다. 함수의 매개변수와 비슷하게 동작합니다.
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        State는 컴포넌트 내부에서 관리되는 동적 데이터입니다. useState 훅을 사용하여 선언하며, setState를 통해 업데이트할 수 있습니다.
      </p>
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="heart">
          <path d={svgPaths.p3ca92000} id="Vector" stroke="#1976D2" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconFavorite() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-favorite">
      <Heart />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <IconFavorite />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        좋아요 48개
      </p>
    </div>
  );
}

function MessageCircle() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g clipPath="url(#clip0_0_5)" id="message-circle">
          <path d={svgPaths.p126c2d00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_5">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconComment() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-comment">
      <MessageCircle />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Frame">
      <IconComment />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        댓글 3개
      </p>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="stats-row">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#666] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        박서연
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] bg-[#f5f5f5] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px p-[12px] relative rounded-[4px] text-[13px]" data-name="Frame">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        박서연
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#666] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        정말 도움이 많이 됐습니다! 감사합니다.
      </p>
    </div>
  );
}

function Comment() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="comment-0">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#666] text-[11px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        최민수
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] bg-[#f5f5f5] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px p-[12px] relative rounded-[4px] text-[13px]" data-name="Frame">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        최민수
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#666] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        초보자에게 딱 필요한 설명이네요.
      </p>
    </div>
  );
}

function Comment1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="comment-1">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function CommentsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="comments-section">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        댓글
      </p>
      <Comment />
      <Comment1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_26px] h-[40px] items-center min-w-px px-[12px] relative rounded-[4px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9e9e9e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        댓글을 입력하세요...
      </p>
    </div>
  );
}

function PostButton() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[4px] shrink-0" data-name="post-button">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        등록
      </p>
    </div>
  );
}

function CommentInputRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="comment-input-row">
      <Frame8 />
      <PostButton />
    </div>
  );
}

function DetailCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[20px] items-start p-[24px] relative rounded-[8px] shrink-0 w-full" data-name="DetailCard">
      <AuthorRow />
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[24px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        React State와 Props 초보자 가이드
      </p>
      <div className="bg-[#e0e0e0] h-[300px] relative rounded-[4px] shrink-0 w-full" data-name="large-image" />
      <PostBody />
      <StatsRow />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 584 1" width="584">
            <line id="divider" stroke="#EEEEEE" x2="584" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CommentsSection />
      <CommentInputRow />
    </div>
  );
}

function DetailCenter() {
  return (
    <div className="content-stretch flex flex-col h-full items-start p-[24px] relative shrink-0 w-[680px]" data-name="detail-center">
      <DetailCard />
    </div>
  );
}

function RightRail() {
  return <div className="content-stretch flex flex-[1_0_0] flex-col h-[100px] items-start min-w-px p-[24px] relative" data-name="right-rail" />;
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="content-wrapper">
      <MuiDrawer />
      <DetailCenter />
      <RightRail />
    </div>
  );
}

export default function PostDetail() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="post-detail">
      <MuiAppBar />
      <ContentWrapper />
    </div>
  );
}