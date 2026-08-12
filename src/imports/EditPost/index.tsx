import svgPaths from "./svg-1beldyzsxk";

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
    <div className="bg-white content-stretch flex h-[40px] items-center px-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        MUI 컴포넌트 시작하기 (버튼, 그리드, 레이아웃)
      </p>
    </div>
  );
}

function TitleField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="title-field">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        제목
      </p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex h-[200px] items-start p-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        MUI는 React용 CSS 프레임워크입니다. 시작하려면 코어 패키지를 설치하세요. 이 튜토리얼에서는 기본 타이포그래피, 버튼 레이아웃, 컨테이너 설정을 리뷰합니다...
      </p>
    </div>
  );
}

function ContentField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="content-field">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        내용
      </p>
      <Frame1 />
    </div>
  );
}

function RemoveBtn() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="remove-btn">
      <div aria-hidden className="absolute border border-[#d32f2f] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#d32f2f] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        삭제
      </p>
    </div>
  );
}

function ImagePreviewContainer() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex flex-col h-[140px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="image-preview-container">
      <p className="[word-break:break-word] font-['Roboto:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        [ mui_grid_guide_thumbnail.png ]
      </p>
      <RemoveBtn />
    </div>
  );
}

function CurrentImageSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="current-image-section">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        현재 대표 이미지
      </p>
      <ImagePreviewContainer />
    </div>
  );
}

function UploadCloud() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="upload-cloud">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="upload-cloud">
          <path d={svgPaths.p1575f800} id="Vector" stroke="#1976D2" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconCloudUpload() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="icon-cloud_upload">
      <UploadCloud />
    </div>
  );
}

function DashedUploadBox() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col gap-[8px] h-[120px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="dashed-upload-box">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-dashed inset-0 pointer-events-none rounded-[4px]" />
      <IconCloudUpload />
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        클릭하여 이미지 업로드
      </p>
    </div>
  );
}

function UploadSection() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="upload-section">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        새 이미지 업로드
      </p>
      <DashedUploadBox />
    </div>
  );
}

function CancelButton() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="cancel-button">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#666] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        취소
      </p>
    </div>
  );
}

function PublishButton() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[4px] shrink-0" data-name="publish-button">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        수정
      </p>
    </div>
  );
}

function ButtonRow() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="button-row">
      <CancelButton />
      <PublishButton />
    </div>
  );
}

function FormCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[20px] items-start p-[24px] relative rounded-[8px] shrink-0 w-full" data-name="FormCard">
      <TitleField />
      <ContentField />
      <CurrentImageSection />
      <UploadSection />
      <ButtonRow />
    </div>
  );
}

function EditCenter() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-full items-start p-[24px] relative shrink-0 w-[680px]" data-name="edit-center">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        게시글 수정
      </p>
      <FormCard />
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
      <EditCenter />
      <RightRail />
    </div>
  );
}

export default function EditPost() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="edit-post">
      <MuiAppBar />
      <ContentWrapper />
    </div>
  );
}