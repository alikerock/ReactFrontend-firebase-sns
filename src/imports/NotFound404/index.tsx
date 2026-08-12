import svgPaths from "./svg-y352st5uaz";

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

function SearchSpacer() {
  return <div className="h-[36px] relative shrink-0 w-[400px]" data-name="search-spacer" />;
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
      <SearchSpacer />
      <Actions />
    </div>
  );
}

function HeaderIllustration() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="header-illustration">
      <p className="font-['Roboto:Black',sans-serif] font-black relative shrink-0 text-[#9e9e9e] text-[72px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        404
      </p>
      <p className="font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold relative shrink-0 text-[#212121] text-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        페이지를 찾을 수 없습니다
      </p>
    </div>
  );
}

function GoHomeBtn() {
  return (
    <div className="bg-[#1976d2] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="go-home-btn">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        홈으로 돌아가기
      </p>
    </div>
  );
}

function Component404Card() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-center p-[48px] relative rounded-[8px] shrink-0 w-[480px]" data-name="404-card">
      <HeaderIllustration />
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#666] text-[15px] text-center w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        요청하신 페이지가 존재하지 않습니다.
      </p>
      <GoHomeBtn />
    </div>
  );
}

function ContentWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px p-[80px] relative w-full" data-name="content-wrapper">
      <Component404Card />
    </div>
  );
}

export default function NotFound() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-start relative size-full" data-name="not-found-404">
      <MuiAppBar />
      <ContentWrapper />
    </div>
  );
}