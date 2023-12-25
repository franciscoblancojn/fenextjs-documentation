export interface IframeProps {
    src:string
}

export const Iframe = ({src}:IframeProps) => {
    return <>
        <iframe src={src} className="iframe"
            style={{
                width:"100%",
                border:0,
            }}
        />
    </>
}