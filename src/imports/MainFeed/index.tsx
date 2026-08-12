import svgPaths from "./svg-5nhdxaavsd";

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

function Chip() {
  return (
    <div className="bg-[#1976d2] content-stretch flex h-[32px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="chip-전체">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        전체
      </p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="chip-웹디자인">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        웹디자인
      </p>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="chip-앱디자인">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        앱디자인
      </p>
    </div>
  );
}

function Chip3() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="chip-프론트엔드">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        프론트엔드
      </p>
    </div>
  );
}

function Chip4() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="chip-백엔드">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        백엔드
      </p>
    </div>
  );
}

function Chip5() {
  return (
    <div className="bg-white content-stretch flex h-[32px] items-center px-[12px] py-[6px] relative rounded-[16px] shrink-0" data-name="chip-기타">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        기타
      </p>
    </div>
  );
}

function TopicFilters() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="topic-filters">
      <Chip />
      <Chip1 />
      <Chip2 />
      <Chip3 />
      <Chip4 />
      <Chip5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        JD
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 text-[#9e9e9e] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        2시간 전
      </p>
    </div>
  );
}

function MoreVertical() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="more-vertical">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="more-vertical">
          <g id="Vector">
            <path d={svgPaths.p5c35800} stroke="#666666" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p67d79f0} stroke="#666666" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1caeca00} stroke="#666666" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconMoreVert() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-more_vert">
      <MoreVertical />
    </div>
  );
}

function AuthorRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="author-row">
      <Frame />
      <Frame1 />
      <IconMoreVert />
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        React State와 Props 초보자 가이드
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] overflow-hidden relative shrink-0 text-[#666] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        React를 처음 배우는 개발자들이 가장 헷갈려하는 개념이 State와 Props입니다. 간단히 말해 Props는 부모로부터 전달받는 매개변수이고...
      </p>
    </div>
  );
}

function HeartOff() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="heart-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g clipPath="url(#clip0_0_8)" id="heart-off">
          <path d={svgPaths.p2137580} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconFavoriteBorder() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-favorite_border">
      <HeartOff />
    </div>
  );
}

function LikeAction() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="like-action">
      <IconFavoriteBorder />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        24
      </p>
    </div>
  );
}

function MessageCircle() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g clipPath="url(#clip0_0_6)" id="message-circle">
          <path d={svgPaths.p126c2d00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconChatBubbleOutline() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-chat_bubble_outline">
      <MessageCircle />
    </div>
  );
}

function CommentAction() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="comment-action">
      <IconChatBubbleOutline />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        댓글 3개
      </p>
    </div>
  );
}

function ActionFooter() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="action-footer">
      <LikeAction />
      <CommentAction />
    </div>
  );
}

function PostCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="post-card-0">
      <AuthorRow />
      <Frame2 />
      <div className="bg-[#e0e0e0] h-[220px] relative rounded-[4px] shrink-0 w-full" data-name="image-placeholder" />
      <ActionFooter />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        AS
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        이준혁
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 text-[#9e9e9e] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        5시간 전
      </p>
    </div>
  );
}

function MoreVertical1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="more-vertical">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g id="more-vertical">
          <g id="Vector">
            <path d={svgPaths.p5c35800} stroke="#666666" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p67d79f0} stroke="#666666" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1caeca00} stroke="#666666" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconMoreVert1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-more_vert">
      <MoreVertical1 />
    </div>
  );
}

function AuthorRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="author-row">
      <Frame3 />
      <Frame4 />
      <IconMoreVert1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[16px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Material UI Grid 시스템 소개
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] overflow-hidden relative shrink-0 text-[#666] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        MUI Grid 시스템은 데스크톱 레이아웃을 구성할 때 매우 유용합니다. CSS Flexbox를 기반으로 12컬럼 구조로 동작하며...
      </p>
    </div>
  );
}

function HeartOff1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="heart-off">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g clipPath="url(#clip0_0_8)" id="heart-off">
          <path d={svgPaths.p2137580} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconFavoriteBorder1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-favorite_border">
      <HeartOff1 />
    </div>
  );
}

function LikeAction1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="like-action">
      <IconFavoriteBorder1 />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        24
      </p>
    </div>
  );
}

function MessageCircle1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="17" preserveAspectRatio="none" viewBox="0 0 17 17" width="17">
        <g clipPath="url(#clip0_0_6)" id="message-circle">
          <path d={svgPaths.p126c2d00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="17" width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconChatBubbleOutline1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="icon-chat_bubble_outline">
      <MessageCircle1 />
    </div>
  );
}

function CommentAction1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="comment-action">
      <IconChatBubbleOutline1 />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        댓글 1개
      </p>
    </div>
  );
}

function ActionFooter1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="action-footer">
      <LikeAction1 />
      <CommentAction1 />
    </div>
  );
}

function PostCard1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="post-card-1">
      <AuthorRow1 />
      <Frame5 />
      <div className="bg-[#e0e0e0] h-[220px] relative rounded-[4px] shrink-0 w-full" data-name="image-placeholder" />
      <ActionFooter1 />
    </div>
  );
}

function FeedCenter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-start p-[24px] relative shrink-0 w-[680px]" data-name="feed-center">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        최근 게시글
      </p>
      <TopicFilters />
      <PostCard />
      <PostCard1 />
    </div>
  );
}

function InfoCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0" data-name="info-card">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        인기 주제
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#666] text-[12px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        #프론트엔드 — 42개 게시글 #React — 38개 게시글 #백엔드 — 27개 게시글 #웹디자인 — 21개 게시글
      </p>
    </div>
  );
}

function RightRail() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[24px] relative" data-name="right-rail">
      <InfoCard />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="content-wrapper">
      <MuiDrawer />
      <FeedCenter />
      <RightRail />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="plus">
          <path d={svgPaths.p3e11a380} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconAdd() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="icon-add">
      <Plus />
    </div>
  );
}

function Fab() {
  return (
    <div className="absolute bg-[#1976d2] bottom-[32px] content-stretch drop-shadow-[0px_3px_2.5px_rgba(0,0,0,0.2)] flex items-center justify-center right-[32px] rounded-[28px] size-[56px]" data-name="FAB">
      <IconAdd />
    </div>
  );
}

export default function MainFeed() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="main-feed">
      <MuiAppBar />
      <ContentWrapper />
      <Fab />
    </div>
  );
}