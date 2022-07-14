import React from "react";
import AddIcon from "@mui/icons-material/Add";
import LoginIcon from "@mui/icons-material/Login";
interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
                <div className="btn btn-lg btn-primary gap-2">
                    <AddIcon fontSize="large" />
                    สร้างห้อง
                </div>
                <div className="btn btn-lg btn-primary gap-2">
                    <LoginIcon fontSize="large" />
                    เข้าร่วม
                </div>
            </div>
        </div>
    );
};

export default Home;
