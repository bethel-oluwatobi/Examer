
//  the reason for the file is to make the svg easy to manipulate

const systemIcon = {
    menuIcon:<path d="M4 4H52.0027M4 20.0009H52.0027M4 36.0018H52.0027" stroke="#292929" strokeWidth="6.66705" strokeLinecap="round" strokeLinejoin="round"/>,
    circleUserIcon: <path d="M65.7526 72.9324C59.3704 77.8332 51.9555 80.4545 44.4863 80.9247C31.9621 81.7132 19.285 76.4539 11.0676 65.7526C2.85014 55.0512 1.0416 41.4462 5.03637 29.55C7.41879 22.4553 11.8653 15.9683 18.2474 11.0676C35.3309 -2.05061 59.8143 1.16392 72.9324 18.2474C86.0506 35.331 82.8361 59.8143 65.7526 72.9324Z" stroke="#292929" stroke-width="5" />,
    
}


export type TSystemIconsKeys = keyof typeof systemIcon


export const systemIconSvg = (icons: TSystemIconsKeys) => {
    
    const iconPath = systemIcon[ icons ]
    
    return iconPath
    
}