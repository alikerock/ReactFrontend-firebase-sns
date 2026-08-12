import svgPaths from "./svg-qv7pm32zy1";

function Header() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="header">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#1976d2] text-[28px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        DevLog
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0 text-[#666] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`교육 기술 블로그 & SNS`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        developer@devlog.com
      </p>
    </div>
  );
}

function EmailField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="email-field">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        이메일 *
      </p>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center px-[12px] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9e9e9e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        ••••••••
      </p>
    </div>
  );
}

function PasswordField() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="password-field">
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#666] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        비밀번호 *
      </p>
      <Frame1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="form">
      <EmailField />
      <PasswordField />
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#1976d2] content-stretch flex h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="primary-button">
      <p className="[word-break:break-word] font-['Roboto:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        로그인
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="divider">
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 144.5 1" width="144.5">
            <line id="Line" stroke="#E0E0E0" x2="144.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9e9e9e] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        또는
      </p>
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" height="1" preserveAspectRatio="none" viewBox="0 0 144.5 1" width="144.5">
            <line id="Line" stroke="#E0E0E0" x2="144.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CircleX() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="circle-x">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g clipPath="url(#clip0_0_6)" id="circle-x">
          <path d={svgPaths.p122bf8c0} id="Vector" stroke="#212121" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_6">
            <rect fill="white" height="15" width="15" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconGoogle() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-google">
      <CircleX />
    </div>
  );
}

function GoogleButton() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="google-button">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconGoogle />
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Google로 로그인
      </p>
    </div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="github">
          <path d={svgPaths.pb3ec800} id="Vector" stroke="#212121" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconGithub() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[18px]" data-name="icon-github">
      <Github />
    </div>
  );
}

function GithubButton() {
  return (
    <div className="content-stretch flex gap-[10px] h-[40px] items-center justify-center relative rounded-[4px] shrink-0 w-full" data-name="github-button">
      <div aria-hidden className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconGithub />
      <p className="[word-break:break-word] font-['Roboto:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#212121] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        GitHub로 로그인
      </p>
    </div>
  );
}

function SocialButtons() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="social-buttons">
      <GoogleButton />
      <GithubButton />
    </div>
  );
}

function FooterLink() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="footer-link">
      <p className="[word-break:break-word] font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1976d2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        계정이 없으신가요? 회원가입
      </p>
    </div>
  );
}

function LoginCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.12)] flex flex-col gap-[24px] items-start p-[32px] relative rounded-[8px] shrink-0 w-[400px]" data-name="LoginCard">
      <Header />
      <Form />
      <PrimaryButton />
      <Divider />
      <SocialButtons />
      <FooterLink />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center justify-center p-[40px] relative size-full" data-name="login">
      <LoginCard />
    </div>
  );
}