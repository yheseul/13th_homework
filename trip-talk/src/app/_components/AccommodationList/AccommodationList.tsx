import Image from "next/image";

export default function AccommodationList() {
  return (
    <div className="flex flex-row gap-5">
      {Array.from(Array(4)).map((_, i) => (
        <div className="w-[296px]" key={i}>
          <Image
            src="/pngs/accommodationCard.png"
            alt="accommodationCard"
            width={296}
            height={296}
          />
          <div>
            <div className="text-base font-medium leading-6 text-black">
              살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀
            </div>
            <div className="text-sm font-normal leading-5 text-dimGray">
              살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑...
            </div>
            <div className="text-sm font-normal leading-5 text=blue">
              #6인 이하 #건식 사우나 #애견동반 가능
            </div>
            <div className="flex flex-row justify-between">
              <div className="text-sm font-light leading-5 text-mediumGray">
                반얀트리
              </div>
              <div className="text-base not-italic leading-6 text-black">
                32,900원
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
