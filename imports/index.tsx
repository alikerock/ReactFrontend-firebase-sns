import svgPaths from "./svg-itkvyuhqh2";

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

function UploadAction() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="upload-action">
      <div aria-hidden className="absolute border border-[#1976d2] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1976d2] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        이미지 변경
      </p>
    </div>
  );
}

function PhotoActions() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="photo-actions">
      <UploadAction />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        최대 2MB의 JPG, PNG 이미지를 지원합니다.
      </p>
    </div>
  );
}

function ProfilePhotoEdit() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="profile-photo-edit">
      <LargeAvatar />
      <PhotoActions />
    </div>
  );
}

function InputContainer() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[40px] items-center px-[14px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-name="input-container">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        김지현
      </p>
    </div>
  );
}

function Field() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="field-이름">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        이름
      </p>
      <InputContainer />
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[40px] items-center px-[14px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-name="input-container">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        jihyun.kim@email.com
      </p>
    </div>
  );
}

function Field1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="field-이메일 주소">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        이메일 주소
      </p>
      <InputContainer1 />
    </div>
  );
}

function TextareaContainer() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start min-h-[100px] p-[12px] relative rounded-[4px] shrink-0 w-full" data-name="textarea-container">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212121] text-[14px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>{`프론트엔드 개발자 | React & TypeScript 학습 중 | 배운 것을 기록하는 블로그`}</p>
    </div>
  );
}

function Field2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="field-자기소개">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        자기소개
      </p>
      <TextareaContainer />
    </div>
  );
}

function ProfileFields() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="profile-fields">
      <Field />
      <Field1 />
      <Field2 />
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[40px] items-center px-[14px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-name="input-container">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`https://github.com/jihyun-kim`}</p>
    </div>
  );
}

function FieldGitHub() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="field-GitHub 주소">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        GitHub 주소
      </p>
      <InputContainer2 />
    </div>
  );
}

function InputContainer3() {
  return (
    <div className="bg-[#fafafa] content-stretch flex h-[40px] items-center px-[14px] py-[10px] relative rounded-[4px] shrink-0 w-full" data-name="input-container">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#9e9e9e] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`https://example.com`}</p>
    </div>
  );
}

function Field3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="field-개인 웹사이트 / 블로그">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        개인 웹사이트 / 블로그
      </p>
      <InputContainer3 />
    </div>
  );
}

function SocialFields() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="social-fields">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        소셜 및 웹사이트 링크
      </p>
      <FieldGitHub />
      <Field3 />
    </div>
  );
}

function CancelButton() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[10px] relative rounded-[4px] shrink-0" data-name="cancel-button">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#666] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        취소
      </p>
    </div>
  );
}

function SaveButton() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-start px-[24px] py-[10px] relative rounded-[4px] shrink-0" data-name="save-button">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        저장
      </p>
    </div>
  );
}

function FormActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-end relative shrink-0 w-full" data-name="form-actions">
      <CancelButton />
      <SaveButton />
    </div>
  );
}

function ProfileEditCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[28px] items-start p-[32px] relative rounded-[8px] shrink-0 w-full" data-name="ProfileEditCard">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        프로필 정보 수정
      </p>
      <ProfilePhotoEdit />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 568 1" width="568">
            <line id="Line" stroke="#E0E0E0" x2="568" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <ProfileFields />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 568 1" width="568">
            <line id="Line" stroke="#E0E0E0" x2="568" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <SocialFields />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 568 1" width="568">
            <line id="Line" stroke="#E0E0E0" x2="568" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FormActions />
    </div>
  );
}

function ProfileCenter() {
  return (
    <div className="content-stretch flex flex-col h-full items-start p-[24px] relative shrink-0 w-[680px]" data-name="profile-center">
      <ProfileEditCard />
    </div>
  );
}

function Frame() {
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

function Frame1() {
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

function Frame2() {
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

function StatsMetrics() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="stats-metrics">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function StatsCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="stats-card">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Personal Stats
      </p>
      <StatsMetrics />
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

export default function ProfileEdit() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="profile-edit">
      <MuiAppBar />
      <ContentWrapper />
    </div>
  );
}