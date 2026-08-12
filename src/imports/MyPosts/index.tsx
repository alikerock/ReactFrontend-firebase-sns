import svgPaths from "./svg-ey8b44wy2y";

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
          <path d={svgPaths.p15feb9b0} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
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
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[16px] h-[48px] items-center px-[16px] relative rounded-[8px] shrink-0 w-full" data-name="menu-item-Home">
      <IconHome />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
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
          <path d={svgPaths.p30951c00} id="Vector" stroke="#1976D2" strokeLinecap="round" strokeWidth="2" />
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
    <div className="bg-[rgba(25,118,210,0.08)] content-stretch flex gap-[16px] h-[48px] items-center px-[16px] relative rounded-[8px] shrink-0 w-full" data-name="menu-item-My Posts">
      <IconBook />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#1976d2] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function WriteBtn() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="write-btn">
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        WRITE NEW POST
      </p>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header-row">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        내 게시글
      </p>
      <WriteBtn />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center relative rounded-[18px] shrink-0 size-[36px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
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
        React 초보자를 위한 State vs Props 이해하기
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] overflow-hidden relative shrink-0 text-[#666] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        React 초보자들은 State와 Props를 혼동하기 쉽습니다. 간단히 말해 Props는 부모 컴포넌트에서 전달받는 파라미터 같은 것이고, State는 컴포넌트 내부에서 관리하는 데이터입니다...
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
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        8 comments
      </p>
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="edit">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_20)" id="edit">
          <path d={svgPaths.p381def80} id="Vector" stroke="#1976D2" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_20">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EditBtn() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="edit-btn">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Edit />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1976d2] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Edit
      </p>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_4)" id="trash-2">
          <path d={svgPaths.p234d2680} id="Vector" stroke="#D32F2F" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DeleteBtn() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="delete-btn">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Trash />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#d32f2f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Delete
      </p>
    </div>
  );
}

function OwnerActions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-end min-w-px relative" data-name="owner-actions">
      <EditBtn />
      <DeleteBtn />
    </div>
  );
}

function ActionFooter() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="action-footer">
      <LikeAction />
      <CommentAction />
      <OwnerActions />
    </div>
  );
}

function PostCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="post-card">
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
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 text-[#9e9e9e] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        3일 전
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
        MUI Grid 설정 가이드 (컬럼, 간격, 반응형)
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] overflow-hidden relative shrink-0 text-[#666] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        MUI Grid는 강력하지만, 초보자는 컬럼이 겹치는 문제를 자주 만납니다. 이 가이드에서는 유동형 컨테이너, flex basis 정렬, 반응형 설정을 자세히 다룹니다...
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
        41
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
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        15 comments
      </p>
    </div>
  );
}

function Edit1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="edit">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_20)" id="edit">
          <path d={svgPaths.p381def80} id="Vector" stroke="#1976D2" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_20">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EditBtn1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="edit-btn">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Edit1 />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1976d2] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Edit
      </p>
    </div>
  );
}

function Trash1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_4)" id="trash-2">
          <path d={svgPaths.p234d2680} id="Vector" stroke="#D32F2F" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DeleteBtn1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="delete-btn">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Trash1 />
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#d32f2f] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Delete
      </p>
    </div>
  );
}

function OwnerActions1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-end min-w-px relative" data-name="owner-actions">
      <EditBtn1 />
      <DeleteBtn1 />
    </div>
  );
}

function ActionFooter1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="action-footer">
      <LikeAction1 />
      <CommentAction1 />
      <OwnerActions1 />
    </div>
  );
}

function PostCard1() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="post-card">
      <AuthorRow1 />
      <Frame5 />
      <div className="bg-[#e0e0e0] h-[220px] relative rounded-[4px] shrink-0 w-full" data-name="image-placeholder" />
      <ActionFooter1 />
    </div>
  );
}

function OnboardingBtn() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="onboarding-btn">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        글쓰기
      </p>
    </div>
  );
}

function EmptyStateCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center p-[40px] relative rounded-[8px] shrink-0 w-full" data-name="empty-state-card">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#666] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        다른 상태를 찾고 계신가요?
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9e9e9e] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        아직 작성한 게시글이 없습니다.\n첫 번째 글을 작성해 보세요!
      </p>
      <OnboardingBtn />
    </div>
  );
}

function PostsCenter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-start p-[24px] relative shrink-0 w-[680px]" data-name="posts-center">
      <HeaderRow />
      <PostCard />
      <PostCard1 />
      <EmptyStateCard />
    </div>
  );
}

function HelpCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0" data-name="help-card">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Manager Tips
      </p>
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#666] text-[13px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Here you can view, edit, and delete your published educational logs. Ensure your tech guides stay up-to-date with React updates!
      </p>
    </div>
  );
}

function RightRail() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[24px] relative" data-name="right-rail">
      <HelpCard />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex h-[1400px] items-start relative shrink-0 w-full" data-name="content-wrapper">
      <MuiDrawer />
      <PostsCenter />
      <RightRail />
    </div>
  );
}

export default function MyPosts() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="my-posts">
      <MuiAppBar />
      <ContentWrapper />
    </div>
  );
}