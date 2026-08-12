import svgPaths from "./svg-p76782g49w";

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
    <div className="bg-white content-stretch flex h-[40px] items-center px-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Getting Started with MUI Components
      </p>
    </div>
  );
}

function TitleField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="title-field">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        제목
      </p>
      <Frame />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chevron-down">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="#666666" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center justify-between px-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#666] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        주제를 선택하세요
      </p>
      <ChevronDown />
    </div>
  );
}

function TopicField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="topic-field">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        주제 선택
      </p>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex h-[200px] items-start p-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#212121] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Material-UI (MUI) is a CSS framework that provides React components out-of-the-box. To get started, you will need to install the core package. In this tutorial, we will review the basic typography, button layouts, and container setup...
      </p>
    </div>
  );
}

function ContentField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="content-field">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        내용
      </p>
      <Frame2 />
    </div>
  );
}

function UploadCloud() {
  return (
    <div className="relative shrink-0 size-[27px]" data-name="upload-cloud">
      <svg className="absolute block inset-0 size-full" fill="none" height="27" preserveAspectRatio="none" viewBox="0 0 27 27" width="27">
        <g id="upload-cloud">
          <path d={svgPaths.p1f3a5f00} id="Vector" stroke="#1976D2" strokeLinecap="round" strokeWidth="2" />
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
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        대표 이미지
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
        등록
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
      <TopicField />
      <ContentField />
      <UploadSection />
      <ButtonRow />
    </div>
  );
}

function CreateCenter() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-full items-start p-[24px] relative shrink-0 w-[680px]" data-name="create-center">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#212121] text-[20px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        새 게시글 작성
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
      <CreateCenter />
      <RightRail />
    </div>
  );
}

export default function CreatePost() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="create-post">
      <MuiAppBar />
      <ContentWrapper />
    </div>
  );
}