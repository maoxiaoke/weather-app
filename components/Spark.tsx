import type { SVGProps } from 'react';

export const Dot = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={Number(props.width) / 2} cy={Number(props.width) / 2} r={Number(props.width) / 2} fill="white"/>
    </svg>
  )
}

const Spark = () => {
  return (
    <>
      <div className="absolute top-[10px] left-[290px]">
        <Dot width={8} height={8} />
      </div>
      <div className="absolute top-[32px] left-[227px]">
        <Dot width={5} height={5} />
      </div>
      <div className="absolute bottom-[150px] left-[73px]">
        <Dot width={4} height={4} />
      </div>
      <div className="absolute bottom-[109px] left-[27px]">
        <Dot width={11} height={11} />
      </div>
      <div className="absolute bottom-[95px] left-[94px]">
        <Dot width={5} height={5} />
      </div>
      <div className="absolute bottom-[210px] right-[48px]">
        <Dot width={5} height={5} />
      </div>
    </>

  )
}

export default Spark;
