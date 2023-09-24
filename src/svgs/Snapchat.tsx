import { SvgIconProps, useTheme } from "@mui/material";


const SnapchatIcon = (props: SvgIconProps) => {
    const theme = useTheme();

    return (
        <svg
            fill={theme.palette.mode === "dark" ? '#fffc00' : theme.palette.text.primary}
            width="30px"
            height="30px"
            viewBox="0 0 48 48"
            id="b"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g id="c">
                <path id="d" d="m24.0116,42.2697c3.8272-.0024,4.9669-1.6066,7.486-2.7237,2.2497-.9976,5.4694.5087,6.1373-2.1616h0c.0865-1.3801,2.513-1.1579,3.8742-2.0996,1.2418-.8591,1.3659-2.2361.0902-2.778-2.8877-1.2269-5.9232-3.9144-6.6578-6.7964-.4582-1.7978,5.2788-2.3506,4.0841-5.7402-.7049-2.0001-3.2379-1.2958-4.616-.8478.9182-7.1086-2.542-13.3923-10.4098-13.3923s-11.328,6.2837-10.4098,13.3923c-1.378-.448-3.911-1.1523-4.616.8478-1.1947,3.3896,4.5424,3.9424,4.0841,5.7402-.7346,2.882-3.77,5.5695-6.6578,6.7964-1.2757.542-1.1516,1.9189.0902,2.778,1.3612.9417,3.7878.7195,3.8742,2.0996h0c.6679,2.6703,3.8876,1.164,6.1373,2.1616,2.5191,1.1171,3.6588,2.7213,7.486,2.7237.0058,0,.0173,0,.0231,0Z" />
            </g>
        </svg>
    );
};

export default SnapchatIcon;