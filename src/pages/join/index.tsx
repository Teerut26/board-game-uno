import styled from "@emotion/styled";
import React from "react";
import QrCodeIcon from "@mui/icons-material/QrCode";
import TitleIcon from "@mui/icons-material/Title";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";

interface Props {}

const Button = styled.button`
    ${tw`btn btn-lg btn-primary rounded-full`}
`;

const Join: React.FC<Props> = () => {
    const navigate = useNavigate();

    return (
        <div className="absolute top-0 bottom-0  right-0 left-0 flex flex-col justify-center items-center gap-3 p-3">
            <div className="flex flex-col gap-3">
                <Button
                    onClick={() => navigate(`qrcode`)}
                    className="gap-2"
                >
                    <QrCodeIcon fontSize="large" />
                    แสกน QR code
                </Button>
                <Button
                    onClick={() => navigate(`text`)}
                    className="gap-2"
                >
                    <TitleIcon fontSize="large" />
                    กรอกรหัสห้อง
                </Button>
            </div>
            {/* <Outlet /> */}
        </div>
    );
};

export default Join;
