import svgPaths from "./svg-g2he0wuzji";

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
          <path d={svgPaths.p30951c00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
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
          <path d={svgPaths.p299d2dc0} id="Vector" stroke="#1976D2" strokeLinecap="round" strokeWidth="2" />
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
    <div className="bg-[rgba(25,118,210,0.08)] content-stretch flex gap-[16px] h-[48px] items-center px-[16px] relative rounded-[8px] shrink-0 w-full" data-name="menu-item-Profile">
      <IconPerson />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] min-w-px relative text-[#1976d2] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
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

function LargeAvatar() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="large-avatar">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[32px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
      </p>
    </div>
  );
}

function ProfileMeta() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="profile-meta">
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#666] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        jihyun.kim@email.com
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 text-[#9e9e9e] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        2024년 10월 가입
      </p>
    </div>
  );
}

function EditProfileAction() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="edit-profile-action">
      <div aria-hidden className="absolute border border-[#1976d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1976d2] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        프로필 수정
      </p>
    </div>
  );
}

function UserProfileInfo() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="user-profile-info">
      <LargeAvatar />
      <ProfileMeta />
      <EditProfileAction />
    </div>
  );
}

function ProfileBio() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start relative shrink-0 text-[14px] w-full" data-name="profile-bio">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        About Me
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#666] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>{`프론트엔드 개발자 | React & TypeScript 학습 중 | 배운 것을 기록하는 블로그`}</p>
    </div>
  );
}

function ProfileHeaderCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[20px] items-start p-[24px] relative rounded-[8px] shrink-0 w-full" data-name="ProfileHeaderCard">
      <UserProfileInfo />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 584 1" width="584">
            <line id="Line" stroke="#E0E0E0" x2="584" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ProfileBio />
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
        <g clipPath="url(#clip0_0_6)" id="heart-off">
          <path d={svgPaths.p2137580} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
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
        <g clipPath="url(#clip0_0_4)" id="message-circle">
          <path d={svgPaths.p126c2d00} id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
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
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[16px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="post-card">
      <AuthorRow />
      <Frame2 />
      <div className="bg-[#e0e0e0] h-[220px] relative rounded-[4px] shrink-0 w-full" data-name="image-placeholder" />
      <ActionFooter />
    </div>
  );
}

function ProfileCenter() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-full items-start p-[24px] relative shrink-0 w-[680px]" data-name="profile-center">
      <ProfileHeaderCard />
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현님의 게시글
      </p>
      <PostCard />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#1976d2] text-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        12
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#666] text-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        POSTS
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#1976d2] text-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        254
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#666] text-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        LIKES
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#1976d2] text-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        38
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#666] text-[11px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        COMMENTS
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function StatsCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0" data-name="stats-card">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Personal Stats
      </p>
      <Frame3 />
    </div>
  );
}

function RightRail() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px p-[24px] relative" data-name="right-rail">
      <StatsCard />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="content-wrapper">
      <MuiDrawer />
      <ProfileCenter />
      <RightRail />
    </div>
  );
}

export default function Profile() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="profile">
      <MuiAppBar />
      <ContentWrapper />
    </div>
  );
}