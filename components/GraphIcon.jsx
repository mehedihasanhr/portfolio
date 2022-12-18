

export const GraphIcon = ({
    className = '',
    fillColor = '#777',
    width = '1',
}) => {
    return (
        <div className={className}>
            <svg width="100%" height="100%" viewBox="0 0 680 680" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="389" width={width} height="679" transform="rotate(-90 0 389)" fill={fillColor} />
                <rect y="486" width={width} height="680" transform="rotate(-90 0 486)" fill={fillColor} />
                <rect y="583" width={width} height="680" transform="rotate(-90 0 583)" fill={fillColor} />
                <rect y="98" width={width} height="680" transform="rotate(-90 0 98)" fill={fillColor} />
                <rect y="195" width={width} height="680" transform="rotate(-90 0 195)" fill={fillColor} />
                <rect y="292" width={width} height="680" transform="rotate(-90 0 292)" fill={fillColor} />
                <rect x="389" y="680" width={width} height="680" transform="rotate(-180 389 680)" fill={fillColor} />
                <rect x="486" y="680" width={width} height="680" transform="rotate(-180 486 680)" fill={fillColor} />
                <rect x="583" y="680" width={width} height="680" transform="rotate(-180 583 680)" fill={fillColor} />
                <rect x="98" y="680" width={width} height="680" transform="rotate(-180 98 680)" fill={fillColor} />
                <rect x="195" y="680" width={width} height="680" transform="rotate(-180 195 680)" fill={fillColor} />
                <rect x="292" y="680" width={width} height="680" transform="rotate(-180 292 680)" fill={fillColor} />
            </svg>

        </div>
    )
}