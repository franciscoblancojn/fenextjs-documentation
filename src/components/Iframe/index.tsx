
export interface IframeProps {
  src: string;
  minHeightIframe?:string
}

export const Iframe = ({ src, minHeightIframe }: IframeProps) => {
  return (
    <>
      <iframe
        src={src}
        className="iframe"
        style={{
          width: "100%",
          border: 0,
          minHeight: minHeightIframe ?? "30dvh",
        }}
      />
    </>
  );
};
