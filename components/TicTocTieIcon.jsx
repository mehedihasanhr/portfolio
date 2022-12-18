


export const TicTocTieIcon = ({
    className = "w-[380px] h-[372px]",
    lineColor = "#D9D9D9",
    lineWidth = "1",
    circleColor = "#9B9B9B",
    circleWidth = "1",
    crossColor = "#8E8E8E",
    crossWidth = "1",
    croseLineColor = "#C8C8C8",
    crossLineWidth = "1"
}) => {
    return (
        <div className={`${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 380 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="39" y="372" width={lineWidth} height="372" transform="rotate(-180 39 372)" fill={lineColor} />
                <rect x="241" y="372" width={lineWidth} height="372" transform="rotate(-180 241 372)" fill={lineColor} />
                <rect x="140" y="372" width={lineWidth} height="372" transform="rotate(-180 140 372)" fill={lineColor} />
                <rect x="342" y="372" width={lineWidth} height="372" transform="rotate(-180 342 372)" fill={lineColor} />
                <rect x="379" y="336" width={lineWidth} height="379" transform="rotate(90 379 336)" fill={lineColor} />
                <rect x="379" y="134" width={lineWidth} height="379" transform="rotate(90 379 134)" fill={lineColor} />
                <rect x="379" y="235" width={lineWidth} height="379" transform="rotate(90 379 235)" fill={lineColor} />
                <rect x="379" y="33" width={lineWidth} height="379" transform="rotate(90 379 33)" fill={lineColor} />
                <circle cx="85.5" cy="83.5" r="20" stroke={circleColor} strokeWidth={circleWidth} />
                <circle cx="190.5" cy="186.5" r="20" stroke={circleColor} strokeWidth={circleWidth} />
                <circle cx="291.5" cy="286.5" r="20" stroke={circleColor} strokeWidth={circleWidth} />
                <line x1="272.65" y1="207.741" x2="318.65" y2="162.643" stroke={crossColor} strokeWidth={crossWidth} />
                <line x1="318.648" y1="208.904" x2="272.648" y2="163.355" stroke={crossColor} strokeWidth={crossWidth} />
                <line x1="168.65" y1="104.741" x2="214.65" y2="59.6431" stroke={crossColor} strokeWidth={crossWidth} />
                <line x1="214.648" y1="105.904" x2="168.648" y2="60.3551" stroke={crossColor} strokeWidth={crossWidth} />
                <line x1="61.65" y1="307.741" x2="107.65" y2="262.643" stroke={crossColor} strokeWidth={crossWidth} />
                <line x1="107.648" y1="308.904" x2="61.6482" y2="263.355" stroke={crossColor} strokeWidth={crossWidth} />
                <line x1="2.35071" y1="0.643622" x2="379.351" y2="371.644" stroke={croseLineColor} strokeWidth={crossLineWidth} />
            </svg>

        </div >
    )
}