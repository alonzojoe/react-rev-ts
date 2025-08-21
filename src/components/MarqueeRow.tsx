import UserReview from "./UserReview";

type MarqueeRowProps = {
  offset?: number;
  prefix?: string;
};

const MarqueeRow = ({ offset = 0, prefix = "marquee" }: MarqueeRowProps) => {
  const items = [
    ...Array(20).map((_, index) => <UserReview key={`${prefix}-${index}`} />),
  ];
  return (
    <div className="relative flex overflow-hidden w-full">
      <div
        className={`flex gap-5 animate-marquee`}
        style={{
          animation: "var(--animate-marquee)",
          marginLeft: offset ? `${offset}px` : undefined,
        }}
      >
        {items}
      </div>
    </div>
  );
};

export default MarqueeRow;
