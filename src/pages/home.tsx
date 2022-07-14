import React from "react";

import AddIcon from "@mui/icons-material/Add";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { v4 as uuidv4 } from 'uuid';

interface Props {}

const Button = styled.button`
    ${tw`btn btn-lg btn-primary rounded-full`}
`;

const Home: React.FC<Props> = () => {
    let navigate = useNavigate();

    return (
        <div className="absolute top-0 bottom-0 overflow-y-auto right-0 left-0 flex flex-col justify-center items-center gap-[3rem]">
            <div>
                <img
                    className="w-[13rem]"
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/UNO_Logo.svg"
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-3">
                <Button onClick={() => navigate(`/create/${uuidv4()}`)} className="gap-2">
                    <AddIcon fontSize="large" />
                    สร้างห้อง
                </Button>
                <Button onClick={() => navigate(`/join`)} className="gap-2">
                    <ArrowRightAltIcon fontSize="large" />
                    เข้าร่วม
                </Button>
            </div>
        </div>
    );
};

export default Home;
